import React from 'react';
import Spinner from '../components/Spinner';
import { PageContent } from './Styles';

const AbvCalculator = React.lazy(() => import('./abv-calculator'));
const BrixConverter = React.lazy(() => import('./brix-converter'));

const Page: React.FC = props => (
  <React.Suspense fallback={<Spinner />}>{props.children}</React.Suspense>
);

export const AbvCalculatorPage: React.FC = () => (
  <Page>
    <PageContent>
      <AbvCalculator />
    </PageContent>
  </Page>
);

export const BrixConverterPage: React.FC = () => (
  <Page>
    <PageContent>
      <BrixConverter />
    </PageContent>
  </Page>
);
