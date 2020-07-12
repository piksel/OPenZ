import {DefaultTheme, FlattenSimpleInterpolation, ThemeProps} from "styled-components/macro";

export interface CommonProps {
  primary?: boolean;
  red?: boolean;
  green?: boolean;
  blue?: boolean;
  yellow?: boolean;
}

type PropsArg = CommonProps & ThemeProps<DefaultTheme>;
type PropsArgWithCommon = PropsArg & { propColor: string };

export const colorFromProps = (props: PropsArg) =>
  props.green ? props.theme.colors.green :
    props.blue ? props.theme.colors.blue :
      props.yellow ? props.theme.colors.yellow :
        props.red ? props.theme.colors.red :
          props.theme.colors.secondary;

type PropsFun<T = PropsArg> = (props: T) => FlattenSimpleInterpolation;

export const withCommon = (cb: PropsFun<PropsArgWithCommon>) =>
  (props: CommonProps & ThemeProps<DefaultTheme>) =>
    cb({...props, propColor: colorFromProps(props)})