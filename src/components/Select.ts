import styled, {css} from "styled-components/macro";
import {colorFromProps, CommonProps, withCommon} from "./common";


export const Select = styled.select<CommonProps>`
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
  
  option {
    background: ${p => p.theme.colors.background};
    padding: .4rem .1rem;
  }
`;
