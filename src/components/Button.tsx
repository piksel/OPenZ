import styled, {css} from 'styled-components/macro'
import {colorFromProps, CommonProps, withCommon} from "./common";


export const Button = styled.button<CommonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid transparent;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${withCommon(props => props.primary ? css`
    background: ${colorFromProps(props)};
    color: white;
  ` : css`
    color: ${colorFromProps(props)};
    border-color: ${colorFromProps(props)};
  `)}
`