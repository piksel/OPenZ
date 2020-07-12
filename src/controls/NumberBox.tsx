import {Flex} from "../components/Flex";
import React from "react";

export const NumberBox = (props: { value: number | string, label: string, color?: string }) => {
  const {value, label, color} = props;
  return (
    <Flex col style={{}}>
      <div style={{
        textAlign: 'right', fontSize: '4rem', fontWeight: 300,
        lineHeight: '4rem',
        marginTop: '-.5rem',
        width: '8rem',
      }}>{value}</div>
      <Flex row style={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{
          width: '1.2rem',
          height: '1.2rem',
          borderRadius: '50%',
          background: color ?? 'transparent'
        }}/>
        <div style={{textAlign: 'right', fontSize: '1.2rem'}}>{label}</div>

      </Flex>
    </Flex>
  )
}