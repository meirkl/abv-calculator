/// <reference types="react-scripts" />

declare module '*.ttf';

declare module 'react-gauge-chart/dist/GaugeChart' {
  var React = require('react');
  interface Props {
    id: string;
    className?: string;
    style?: React.CSSProperties;
    marginInPercent?: number;
    cornerRadius?: number;
    nrOfLevels?: number;
    percent?: number;
    arcPadding?: number;
    arcWidth?: number;
    arcsLength?: array;
    colors?: Array<string>;
    textColor?: string;
    needleColor?: string;
    needleBaseColor?: string;
    hideText?: boolean;
    animate?: boolean;
    animDelay?: number;
    formatTextValue?: () => string;
  }

  function GaugeChart(props: Props): JSX.Element;

  export = GaugeChart;
}
