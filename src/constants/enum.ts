import {ColorSchemeName} from 'react-native';

type ValidColorSchemeName = Exclude<ColorSchemeName, null | undefined>;

const IS_DARK_MODE: {[key in ValidColorSchemeName]: ValidColorSchemeName} = {
  dark: 'dark',
  light: 'light',
};

export {IS_DARK_MODE};
