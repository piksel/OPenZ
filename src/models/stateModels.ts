export interface WheelInfo {
  value?: number;
  channel: number;
  page: number;
}

export interface ProjectInfo {
  playing?: boolean;
  number?: number;
  pattern?: number;
}

export interface ChannelState {
  playing: boolean;
  note?: number;
}