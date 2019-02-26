import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FormPanel } from '../../../core/form-panel/form-panel';

import { ExamplePicker } from '../example-picker';
import { ExamplesLoader } from '../../../loaders/example-catalog-loader';
import { LauncherClientProvider } from '../../..';

storiesOf('Pickers', module)
  .add('ExamplePicker', () => {
    return (
      <LauncherClientProvider>
        <ExamplesLoader>
          {result => (
            <FormPanel value={{}} onSave={action('save')} onCancel={action('cancel')}>
              {(inputProps) => (<ExamplePicker {...inputProps} {...result}/>)}
            </FormPanel>
          )}
        </ExamplesLoader>
      </LauncherClientProvider>
    );
  });
