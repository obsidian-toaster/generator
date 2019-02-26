import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { storiesOf } from '@storybook/react';
import { Launcher } from '../launcher';
import { LauncherClientProvider } from '../../contexts/launcher-client-provider';

storiesOf('Launcher', module)
  .add('component', () => {
    return (
      <LauncherClientProvider>
        <Launcher />
      </LauncherClientProvider>
    );
  });
