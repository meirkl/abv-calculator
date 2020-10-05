import React from 'react';
import { useLastLocation } from 'react-router-last-location';
import Spinner from '../components/Spinner';
import { SlideLeftTransition, SlideRightTransition } from './Styles';

const AbvCalculator = React.lazy(() => import('./abv-calculator'));
const BrixConverter = React.lazy(() => import('./brix-converter'));
const GravityCorrection = React.lazy(() => import('./gravity-correction'));

const Page: React.FC = props => (
  <React.Suspense fallback={<Spinner />}>{props.children}</React.Suspense>
);

export const AbvCalculatorPage: React.FC = () => (
  <Page>
    <SlideLeftTransition>
      <AbvCalculator />
    </SlideLeftTransition>
  </Page>
);

export const BrixConverterPage: React.FC = () => {
  const lastLocation = useLastLocation();
  return (
    <Page>
      {lastLocation?.pathname === '/' ? (
        <SlideRightTransition>
          <BrixConverter />
        </SlideRightTransition>
      ) : (
        <SlideLeftTransition>
          <BrixConverter />
        </SlideLeftTransition>
      )}
    </Page>
  );
};

export const GravityCorrectionPage: React.FC = () => (
  <Page>
    <SlideRightTransition>
      <GravityCorrection />
    </SlideRightTransition>
  </Page>
);
