import React from "react";
import webmidi, {Input, WebMidi} from "webmidi";


export interface IMidiContext {
  webmidi: WebMidi;
  init(): void;
  error?: Error;
  initialized: boolean;
  inputs: Input[];
}

const {Provider, Consumer, displayName} = React.createContext<IMidiContext>({
  webmidi,
  init(){},
  initialized: false,
  inputs: [],
});

export const [ MidiProvider, MidiConsumer, MidiName ] = [ Provider, Consumer, displayName ];