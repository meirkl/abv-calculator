import React from 'react';
import Spinner from '../components/Spinner';
import Tabs from '../components/Tabs';
import { PageContent } from './Styles';

const AbvCalculator = React.lazy(() => import('./abv-calculator'));
const BrixConverter = React.lazy(() => import('./brix-converter'));

const Page: React.FC = props => (
  <>
    <React.Suspense fallback={<Spinner />}>{props.children}</React.Suspense>
    <Tabs />
  </>
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
