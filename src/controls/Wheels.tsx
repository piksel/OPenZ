import styled, {css} from "styled-components/macro";
import {CommonProps, withCommon} from "../components/common";
import {controlLabels} from "../models/controlLabels";
import React from "react";
import {NumberBox} from "./NumberBox";
import {BigText, Flex} from "../components";
import {Stretcher} from "../components/Stretcher";

export const Wheels = (props: { wheels: { value?: number, channel: number, page: number }[] }) => {
  const {wheels} = props;

  return (<Flex row fill>
    <BigText>{controlLabels[wheels[0].channel]?.group}</BigText>
    <Stretcher/>
    {wheels.map(({value, channel, page}, index) =>

      <Wheel key={index} index={index} value={value} channel={channel} page={page}/>
    )}
  </Flex>)
}

const WheelBackground = styled.div<CommonProps>`
  border-radius: 50%;
  color: black;
  ${withCommon(p => css`
    background-color: ${p.propColor}
  `)}
`;

const pageColors = [
  '#ffffff',
  '#1fc400',
  '#6300c1',
  '#e99500',
]

const Wheel = (props: { index: number, value?: number, channel: number, page: number }) => {
  const {index, value, channel, page} = props;

  const {params} = controlLabels[channel] || {params: [[]]}

  const hasValue = typeof value === 'number';
  const fmtValue = hasValue ? Math.ceil((value ?? 0) / 1.28).toFixed(0) : 'XX';
  const rotation = -135 + ((value ?? 64) * 2.109375);

  return (<div style={{
    display: 'flex',
    flexDirection: 'row',
    padding: '0 1rem',
    border: '1px #ff00ff00 dashed',
    opacity: hasValue ? 1 : .5
  }}>
    <WheelBackground
      style={{transform: `rotateZ(${rotation}deg)`, width: '5rem', height: '5rem', marginRight: '.5rem'}}
      green={index === 0}
      blue={index === 1} yellow={index === 2}
      red={index === 3}>
      <div style={{marginLeft: 'auto', marginRight: 'auto', background: 'black', width: '2px', height: '50%'}}/>
    </WheelBackground>
    <NumberBox value={`${fmtValue}%`}
               color={pageColors[page]}
               label={params[page]?.[index] || `🤷‍ 0x${channel.toString(16).padStart(2, '0')} ${index.toString(16).padStart(2, '0')}`}/>
  </div>)
}