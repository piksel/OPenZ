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
const tapePage = ['speed', 'fine tune', 'filter', 'resonance'];
const mastPage = ['chorus', 'drive', 'filter', 'resonance'];
const lightPage = ['color', 'alt color', 'speed', 'intensity'];

const percParams = [percPage, adsrPage, lfoPage, fxPage];
const synthParams = [instPage, adsrPage, lfoPage, fxPage];
const arpegParams = [instPage, adsrPage, arpPage, fxPage];
const fxParams = [instPage, lfoPage];
const numbParams = Array.from(Array(4), (_, x) => Array.from(Array(4), (_, y) => (x * 4 + y).toString(10).padStart(2, '0')))

export const controlLabels: ControlLabel[] = [
  {group: '', params: [['---', '---', '---', '---']]},
  {group: 'KCK', params: percParams},
  {group: 'SNR', params: percParams},
  {group: 'PCS', params: percParams},
  {group: 'SMP', params: percParams},
  {group: 'BAS', params: synthParams},
  {group: 'LEA', params: synthParams},
  {group: 'ARP', params: arpegParams},
  {group: 'CHO', params: synthParams},
  {group: 'FX1', params: fxParams},
  {group: 'FX2', params: fxParams},
  {group: 'TAP', params: [tapePage, fxPage]},
  {group: 'MAS', params: [mastPage]},
  {group: 'PRF', params: [[]]},
  {group: 'MOD', params: numbParams},
  {group: 'LGT', params: [lightPage, numbParams[1]]},
  {group: 'MTN', params: [[]]},
];