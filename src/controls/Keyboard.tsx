import styled, {css} from "styled-components/macro";
import {NoteSet} from "../models";
import React from "react";

const NoteKey = styled.div<{ pressed: boolean, black: boolean, noteColor: number }>`
  user-select: none;
  vertical-align: bottom;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: .5rem;
  border-top: .1rem solid black;
  font-size: 1.4rem;
  font-weight: 300;
  padding-bottom: .5rem;
  //box-shadow: 0 0 5px #00000080;
  pointer-events: all;
  ${p => p.black ? css`
      background-color: ${p.pressed ? `hsl(${p.noteColor}, 90%, 30%)` : 'black'};
      color: white;
      height: 6rem;
      margin: 0 -2.38095238095238%;
      //position: absolute;
      width: 2rem;
      z-index: 2;
      flex: 2;
      
  ` : css`
      background-color: ${p.pressed ? `hsl(${p.noteColor}, 90%, 70%)` : 'white'};
      color: black;
      height: 10rem;
      flex: 3;
      width: 3rem;
      border-right: .1rem solid black;
  `}
  ${p => p.pressed && css`box-shadow: 0 0 .1rem #ff518c`}
`

const noteNames = [
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
]

export const Keyboard = (props: { notes: NoteSet, onKeyClicked: (key: string, octave: number, down: boolean) => void }) => {
  const {notes, onKeyClicked} = props;

  return (<div style={{display: 'flex', flexDirection: 'row', position: 'relative'}}>
    {notes.map(({pressed, instrument}, index) => {
        const octIndex = index % 12;
        const octave = index > 18 ? 5 : index > 6 ? 4 : 3;
        const noteName = noteNames[octIndex];
        const black = [1, 3, 5, 8, 10].includes(octIndex);
        const keyOn = () => onKeyClicked(noteName, octave, true);
        const keyOff = () => onKeyClicked(noteName, octave, false);

        return <NoteKey pressed={pressed} black={black} onMouseDown={keyOn} onMouseUp={keyOff} onMouseLeave={keyOff}
                        noteColor={instrument * 45}
                        onMouseEnter={e => e.buttons === 1 && keyOn()}
                        key={index}>{noteName}</NoteKey>
      }
    )}

  </div>)
}