/// <reference types="react-scripts" />

declare module '*.woff2';

declare module 'react-context-devtool' {
  import React from 'react';

  type Props<T> = {
    id: string;
    displayName: string;
    context: React.Context<T>;
  };

  export default function ContextDevTool<T>(
    props: Props<T>,
  ): React.ReactElement;
}
