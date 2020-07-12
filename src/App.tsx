import React, {useEffect, useState} from 'react';
import './App.css';
import {IMidiContext, MidiProvider} from './contexts/MidiContext';
import webmidi, {IEventController, IEventNote, Input, InputEvents, Output} from "webmidi";
import {BigText, Button, Flex, Select} from "./components";
import styled, {ThemeProvider} from "styled-components/macro";
import {DefaultDarkTheme} from "./themes";
import {NoteSet} from "./models";
import {Keyboard, NumberBox, Wheels} from "./controls";
import {MidiBeatMessageType} from "./models/midiConstants";
import {ChannelState, ProjectInfo, WheelInfo} from "./models/stateModels";
import {ChannelBox} from "./controls/ChannelBox";

const fmtBytes = (bytes: Uint8Array) => Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(' ');


const App = () => {
  const [input, setInput] = useState<Input | null>();
  const [output, setOutput] = useState<Output | null>();

  const [channel, setChannel] = useState<number>(0);
  const [channels, setChannels] = useState<ChannelState[]>(Array.from(new Array(16), _ => ({playing: false})));
  const [project, setProject] = useState<ProjectInfo>({});

  const [notes, setNotes] = useState<NoteSet>(Array.from(new Array(24), _ => ({pressed: false, instrument: 0})));

  const [wheels, setWheels] = useState<WheelInfo[]>(Array.from(new Array(4), _ => ({
    channel: 0,
    page: 0
  })))

  const [tempo, setTempo] = useState({bpm: 0, playing: false});
  const [, setClock] = useState({lastBeat: 0, pulses: 0});

  const updateNote = (note: IEventNote, channel: number, pressed: boolean) => {
    const modNote = (note.number - 5) % 24;
    //setNoteOffset(note.number - shiftNote);

    setChannels(cs => cs.map((c, i) => i === channel - 1 ? {playing: pressed, note: modNote} : c));

    setChannel(channel);
    setNotes(ps => {
      return ps.map((v, i) => i === modNote ? {
        pressed,
        instrument: channel,
      } : v);
    });
    if (pressed) {
      // console.log(`Key ${note.name}${note.octave} ${state ? 'pressed' : 'released'} on channel ${channel}, raw: ${note.number}`)
    }
  }

  const updateWheel = (control: IEventController, channel: number, value: number) => {
    const wheelNumber = (control.number - 1) % 4;
    const page = Math.floor((control.number - wheelNumber) / 4);
    // console.log(`Wheel update for channel: ${channel}, page: ${page} (${(control.number - wheelNumber)}), wheel: ${wheelNumber}, new value: ${value}`);
    setWheels(pw => pw.map((v, i) => i === wheelNumber ? {value, channel, page} : {
      page,
      channel,
      value: v.page === page && v.channel === channel ? v.value : undefined
    }));
  }

  const updateClock = (messageType: MidiBeatMessageType, timestamp: number) => {

    if (messageType === MidiBeatMessageType.Clock) {
      // 1200 = 100bpm
      //  600 = 200bpm

      setClock(c => {
        if (c.pulses === 47) { // 1/4 == 24 pulses, so 48 pulses == 2/4
          setTempo(t => ({...t, bpm: Math.round(120000 / (timestamp - c.lastBeat))}))
          return {
            lastBeat: timestamp,
            pulses: 0,
          };
        } else return {
          lastBeat: c.lastBeat || timestamp,
          pulses: c.pulses + 1,
        }
      })
    } else {
      setTempo(t => ({...t, playing: messageType !== MidiBeatMessageType.Stop}));
    }


  }

  useEffect(() => {
    console.log('init!')
    webmidi.enable(error => {
      if (!error) {
        webmidi.addListener('connected', event => {
          console.log('Connected!', event);
        });
        webmidi.addListener('disconnected', event => {
          console.log('Disconnected!', event);
        });

      }
      setMidi(m => ({...m, error, initialized: !error, inputs: webmidi.inputs}));
    });
  }, []);

  useEffect(() => {
    (window as any).opz = input;
    const logEvent = (e: InputEvents[keyof InputEvents]) => {
      console.log(e.type, fmtBytes(e.data));
    }
    input?.removeListener();

    input?.addListener("controlchange", "all", (e) => updateWheel(e.controller, e.channel, e.value));
    input?.addListener("noteon", "all", (e) => updateNote(e.note, e.channel, true));
    input?.addListener("noteoff", "all", (e) => updateNote(e.note, e.channel, false));
    input?.addListener("clock", "all", e => updateClock(e.data[0], e.timestamp));
    input?.addListener("channelmode", "all", logEvent);
    input?.addListener("activesensing", "all", logEvent);
    input?.addListener("songposition", "all", logEvent);
    input?.addListener("sysex", "all", logEvent);
    input?.addListener("unknownsystemmessage", "all", logEvent);
    input?.addListener("tuningrequest", "all", logEvent);
    input?.addListener("programchange", "all", e => setProject(p => ({...p, number: e.channel, pattern: e.value})));
    input?.addListener("reset", "all", logEvent);
    input?.addListener("start", "all", () => setProject(p => ({...p, playing: true})));
    input?.addListener("stop", "all", () => setProject(p => ({...p, playing: false})));

    //input?.addListener("midimessage", undefined, logEvent);
  }, [input]);

  useEffect(() => {
    (window as any).opzo = output;

    //output?.sendControlChange(102, 1, 0);

    //input?.addListener("midimessage", undefined, logEvent);
  }, [output]);

  const [midi, setMidi] = useState<IMidiContext>({
    webmidi,
    init() {

    },
    initialized: false,
    inputs: [],
  });

  useEffect(() => {
    if (!input && midi.inputs.length > 0) {
      setInput(midi.inputs[0]);
    }
    if (!output && midi.webmidi.outputs.length > 0) {
      setOutput(midi.webmidi.outputs[0]);
    }

  }, [midi, input, output]);

  const keyClicked = (key: string, octave: number, down: boolean) => {

    //console.log(`Playing ${key}${octave} on channel ${channel || 1}`);

    try {
      output?.playNote(`${key}${octave}`, channel || 1, {
        velocity: down ? .5 : 0,
      });
    } catch (e) {
      console.error('Failed to play note ')
    }
  }



  return (
    <ThemeProvider theme={DefaultDarkTheme}>
      <MidiProvider value={midi}>
        <AppRoot>
          <AppHeader>
            <HeadLeft>
              MIDI
              <Button primary blue disabled={midi.initialized}
                      onClick={() => midi.init()}>{midi.initialized ? 'Enabled!' : 'Enable'}</Button>
              <pre>{midi?.error ?? ''}</pre>
              <label>
                Input:
                <Select value={input?.id} onChange={(e) => setInput(midi.inputs.find(i => i.id == e.target.value))}>
                  <option value={''}>{midi.inputs.length > 0 ? 'Select a midi input' : 'No inputs detected'}</option>
                  {midi.inputs.map(input => <option key={input.id} value={input.id}>{input.name}</option>)}
                </Select>
              </label>
              <label>
                Output:
                <Select value={output?.id}
                        onChange={(e) => setOutput(webmidi.outputs.find(({id}) => id == e.target.value))}>
                  <option
                    value={''}>{webmidi.outputs.length > 0 ? 'Select a midi output' : 'No outputs detected'}</option>
                  {midi.webmidi.outputs.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
                </Select>
              </label>
            </HeadLeft>
            <HeadRight>
              <></>
            </HeadRight>
          </AppHeader>
          <AppMain>
            <Flex row style={{padding: '2rem', alignItems: 'center', justifyContent: 'space-between'}}>
              <Flex row style={{cursor: 'pointer'}} onClick={() => setProject(p => ({...p, playing: !p.playing}))}>
                <BigText disabled={project.playing}>{'JAM'}</BigText>
                <BigText style={{width: '2rem'}}>/</BigText>
                <BigText disabled={!project.playing}>{'PLY'}</BigText>
              </Flex>
              <Flex row>
                <NumberBox value={project.number?.toString()?.padStart(2, '0') ?? 'XX'} label='PROJECT'/>
                <NumberBox value={project.pattern?.toString()?.padStart(2, '0') ?? 'XX'} label='PATTERN'/>

                <NumberBox value={tempo.bpm.toFixed(0)} label='BPM'/>
              </Flex>
            </Flex>
            {project.playing ? <PlayMain {...{channels, notes}} /> :
              <JamMain {...{channel, notes, wheels, keyClicked}} />}

          </AppMain>
        </AppRoot>
      </MidiProvider>
    </ThemeProvider>
  );
}

/*
const channelNames = ['None', 'Kick', 'Snare', 'Percussion', 'Sample', 'Bass', 'Lead', 'Arp', 'Chord',
  'Fx 1', 'Fx 2', 'Tape', 'Master', 'Perform', 'Module', 'Lights', 'Motion'];
 */
const PlayMain = (props: { channels: ChannelState[], notes: NoteSet }) => {
  const {channels, notes} = props;


  return (
    <div style={{height: '14rem'}}>
      <Flex stretch row style={{padding: '2rem', flexWrap: 'wrap'}}>
        {channels.map((channel, i) => (<>
          <Flex row style={{
            width: '12.5%',
            justifyContent: 'center',
          }}>
            <ChannelBox state={channel} number={i}/>
          </Flex>
        </>))}
      </Flex>
      <div style={{padding: '2rem'}}>
        <Keyboard notes={notes} onKeyClicked={() => {
        }}/>
      </div>
    </div>)
}

const JamMain = (props: { channel: number, notes: NoteSet, wheels: WheelInfo[], keyClicked: any }) => {

  //{{ /* Instrument: {channelNames.length > channel ? channelNames[channel] : `Unknown (${channel})`} */}}

  const {notes, wheels, keyClicked} = props;
  return (
    <div style={{height: '14rem'}}>
      <Flex stretch row style={{padding: '2rem'}}>
        <Wheels wheels={wheels}/>
      </Flex>
      <div style={{padding: '2rem'}}>

        <Keyboard notes={notes} onKeyClicked={keyClicked}/>
      </div>
    </div>
  )
}

const HeadLeft = styled.div`
display: flex;
padding: 0 .5rem;
align-items: center;
flex-direction: row;`;

const HeadRight = HeadLeft;

const AppRoot = styled.div`
background: ${p => p.theme.colors.background};
display: flex;
flex-direction: column;

justify-content: center;
color: white;
min-height: 100vh;
`;

const AppHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`;

const AppMain = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: flex-start;
flex: 1;
`;


export default App;
