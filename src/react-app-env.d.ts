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
    arcsLength?: number[];
    colors?: string[];
    textColor?: string;
    needleColor?: string;
    needleBaseColor?: string;
    hideText?: boolean;
    animate?: boolean;
    animDelay?: number;
    formatTextValue?: (value: string) => string;
  }

  function GaugeChart(props: Props): React.ReactElement;

  export = GaugeChart;
}
