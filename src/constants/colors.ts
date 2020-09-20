import { lighten, darken } from 'polished';

export const primary = '#f1c40f';
export const danger = '#c0392b';
export const light = '#ecf0f1';
export const secondary = ((color = '#22a6b3') => ({
  main: color,
  light: lighten(0.2, color),
  dark: darken(0.2, color),
}))();
export const dark = ((color = '#1e2127') => ({
  main: color,
  light: lighten(0.02, color),
  dark: darken(0.02, color),
}))();
