import styled from "styled-components";

export const BigText = styled.h2<{ disabled?: boolean }>`      
    font-size: 6rem;
    line-height: 1em;
    width: 2em;
    text-align: center;
    font-weight: 300;
    height: 1em;
    margin: -.5rem 0 0 0;
    opacity: ${p => p.disabled ? .5 : 1};
`;