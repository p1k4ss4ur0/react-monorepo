const defaltColors = {
  black: '#363950',
  red: '#F7768E',
  green: '#9ECE6A',
  yellow: '#E0AF68',
  blue: '#7AA2F7',
  purple: '#AD8EE6',
  cyan: '#449DAB',
  white: '#787C99',
};

const light = {
  dark: false,

  primary: '#bb9af7',
  secondary: '#7aa2f7',

  background: '#d5d6db',
  foreground: '#9699a3',

  title: '#7dcfff',
  text: '#9aa5ce',

  ...defaltColors,
};

const dark = {
  dark: true,

  primary: '#bb9af7',
  secondary: '#7aa2f7',

  background: '#1a1b26',
  foreground: '#a9b1d6',

  title: '#7dcfff',
  text: '#9aa5ce',

  ...defaltColors,
};

export default {
  light,
  dark,
};
