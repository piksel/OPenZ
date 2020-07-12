export type Note = { pressed: boolean, instrument: number };

export type NoteName =
  'C' |
  'C#' |
  'D' |
  'D#' |
  'E' |

  'F' |
  'F#' |
  'G' |
  'G#' |
  'B' |
  'B#' |
  'A' ;


export type Octave = {
  [key in NoteName]: Note;
};

export type NoteSet = Note[];