/// <reference types="react-scripts" />

declare module '*.ttf';

declare module 'react-gauge-chart' {
  import React from 'react';

  type Props = {
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
  };

  export default function GaugeChart(props: Props): React.ReactElement;
}

declare module 'react-context-devtool' {
  import React from 'react';

  type Props<T> = {
    id: string;
    displayName: string;
    context: React.Context<T>;
  };

  export default function ContextDevTool<T>(props: Props): React.ReactElement;
}
