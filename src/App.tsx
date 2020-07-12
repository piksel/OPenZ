import React, {useEffect, useState} from 'react';
import './App.css';
import {IMidiContext, MidiProvider} from './contexts/MidiContext';
import webmidi, {IEventController, IEventNote, Input, InputEvents, Output} from "webmidi";
import {Button, Flex, Select} from "./components";
import styled, {ThemeProvider} from "styled-components/macro";
import {DefaultDarkTheme} from "./themes";
import {NoteSet} from "./models";
import {Keyboard, NumberBox, Wheels} from "./controls";
import {MidiBeatMessageType} from "./models/midiConstants";

const fmtBytes = (bytes: Uint8Array) => Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(' ');


const App = () => {
  const [input, setInput] = useState<Input | null>();
  const [output, setOutput] = useState<Output | null>();

  const [channel, setChannel] = useState<number>(0);

  const [notes, setNotes] = useState<NoteSet>(Array.from(new Array(24), _ => ({pressed: false, instrument: 0})));
  const [noteOffset, setNoteOffset] = useState<number>(0);

  const [wheels, setWheels] = useState<{ value?: number, channel: number, page: number }[]>(Array.from(new Array(4), _ => ({
    channel: 0,
    page: 0
  })))

  const [tempo, setTempo] = useState({bpm: 0, playing: false});
  const [, setClock] = useState({lastBeat: 0, pulses: 0});

  const updateNote = (note: IEventNote, channel: number, pressed: boolean) => {
    const modNote = (note.number - 5) % 24;
    const shiftNote = modNote;
    //setNoteOffset(note.number - shiftNote);

    setChannel(channel);
    setNotes(ps => {
      return ps.map((v, i) => i === shiftNote ? {
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

      //bpm: Math.round((timestamp - c.lastBeat) * .12),

      // 1200 = 100bpm
      //  600 = 200bpm

      setClock(c => {
        if (c.pulses == 47) {
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
    input?.addListener("controlchange", undefined, (e) => updateWheel(e.controller, e.channel, e.value));
    input?.addListener("noteon", undefined, (e) => updateNote(e.note, e.channel, true));
    input?.addListener("noteoff", undefined, (e) => updateNote(e.note, e.channel, false));
    input?.addListener("clock", undefined, e => updateClock(e.data[0], e.timestamp));
    input?.addListener("channelmode", undefined, logEvent);
    input?.addListener("activesensing", undefined, logEvent);
    input?.addListener("songposition", undefined, logEvent);
    input?.addListener("sysex", undefined, logEvent);
    input?.addListener("unknownsystemmessage", undefined, logEvent);
    input?.addListener("tuningrequest", undefined, logEvent);
    input?.addListener("programchange", undefined, logEvent);
    input?.addListener("reset", undefined, logEvent);
    input?.addListener("start", undefined, logEvent);
    input?.addListener("stop", undefined, logEvent);

    //input?.addListener("midimessage", undefined, logEvent);
  }, [input]);

  useEffect(() => {
    (window as any).opzo = output;
    const logEvent = (e: InputEvents[keyof InputEvents]) => {
      console.log(e.type, fmtBytes(e.data));
    }

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


    output?.playNote(`${key}${octave}`, channel || 1, {
      velocity: down ? .5 : 0,
    });
  }

  const channelNames = [
    'None',
    'Kick',
    'Snare',
    'Hihat',
    'Percussion',
    'Bass',
    'Lead',
    'Arp',
    'Chord',
    'Fx 1',
    'Fx 2',
  ]

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

            <Flex row style={{padding: '2rem'}}>
              <Wheels wheels={wheels}/>
              <NumberBox value={tempo.bpm.toFixed(0)} label='BPM'/>
            </Flex>
            <div style={{padding: '2rem'}}>
              Instrument: {channelNames.length > channel ? channelNames[channel] : `Unknown (${channel})`}

              <Keyboard notes={notes} onKeyClicked={keyClicked}/>
            </div>
          </AppMain>
        </AppRoot>
      </MidiProvider>
    </ThemeProvider>
  );
}

const MidiInput = (props: Input) => {
  const {connection, id, name} = props;
  return (<>
    {name} ({id}): {connection}

  </>)
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
align-items: center;
justify-content: flex-start;
flex: 1;
`;


export default App;
