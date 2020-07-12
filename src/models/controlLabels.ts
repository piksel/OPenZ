/*
kick / snare / hihat / perc

   green blue yellow red
w  pitch  revers filter resonance
g  attack decay  sustn  release
p  lfoAmt lfoSpd lfoTgt lfoShp
y  fx1Snd fx2Snd pan    level
 */

/*
param 1 param 2 filter resonance
attack decay sustain release
lfoamount lfospeed lfotarget lfoshape
fx1send fx2send pan level
 */

interface ControlLabel {
  group: string;
  params: string[][];
}

const instPage = ['Param 1', 'Param 2', 'Filter', 'Resonance'];
const percPage = ['Pitch', 'Reverse', 'Filter', 'Resonance'];
const adsrPage = ['Attack', 'Decay', 'Sustain', 'Release'];
const lfoPage = ['LFO Amount', 'LFO Speed', 'LFO Target', 'LFO Shape'];
const fxPage = ['FX1 Send', 'FX2 Send', 'Pan', 'Level'];
const arpPage = ['Arp. Speed', 'Arp. Pattern', 'Arp. Style', 'Arp. Range'];


const rhythmParams = [percPage, adsrPage, lfoPage, fxPage];

const melodyParams = [instPage, adsrPage, lfoPage, fxPage];

const arpegParams = [instPage, adsrPage, arpPage, fxPage];

const fxParams = [instPage, lfoPage];

export const controlLabels: { [key: number]: ControlLabel } = {
  [0]: {group: '', params: [['---', '---', '---', '---']]},
  [0x01]: {group: 'KCK', params: rhythmParams},
  [0x02]: {group: 'SNR', params: rhythmParams},
  [0x03]: {group: 'HIH', params: rhythmParams},
  [0x04]: {group: 'PCS', params: rhythmParams},
  [0x05]: {group: 'BAS', params: melodyParams},
  [0x06]: {group: 'LEA', params: melodyParams},
  [0x07]: {group: 'ARP', params: arpegParams},
  [0x08]: {group: 'CHO', params: melodyParams},
  [0x09]: {group: 'FX1', params: fxParams},
  [0x0a]: {group: 'FX2', params: fxParams},
}