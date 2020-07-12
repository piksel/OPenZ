import {Flex} from "../components";
import React from "react";
import {ChannelState} from "../models/stateModels";
import {controlLabels} from "../models/controlLabels";
import {noteNames} from "../models/midiConstants";

export const ChannelBox = (props: { state: ChannelState, number: number }) => {
  const {state, number} = props;
  const {playing, note} = state;


  const color = `hsl(${((number + 1) % 8) * 45}, 90%, 70%)`;
  const label = controlLabels[number + 1].group;

  return (
    <Flex col style={{
      height: '7rem',

      color: playing ? 'white' : color,


    }}>
      <div style={{
        textAlign: 'center', fontSize: '4rem', fontWeight: 300,
        lineHeight: '1em',
        height: '1em',
        marginTop: '-.5rem',
        width: '8rem',
        opacity: playing ? 1 : .2
      }}>{typeof note === 'undefined' ? '' : noteNames[note]}</div>


      <div style={{
        textAlign: 'center', fontSize: '2.2rem', fontWeight: 300, background: playing ? color : '#ffffff20'//'transparent'
      }}>{label}</div>

    </Flex>
  )
}