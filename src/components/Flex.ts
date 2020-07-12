import styled from "styled-components";

export const Flex = styled.div<{ row?: boolean, col?: boolean, fill?: boolean }>`
  display: flex;
  flex-direction: ${p => p.row ? 'row' : p.col ? 'column' : 'inherit'};
  flex: ${p => p.fill ? '1' : 'none'};
`;