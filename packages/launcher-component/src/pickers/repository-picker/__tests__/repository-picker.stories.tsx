import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FormPanel } from '../../../core/form-panel/form-panel';
import { GitInfoLoader } from '../../../loaders/git-info-loader';
import { defaultRepoPickerValue, isRepositoryPickerValueValid, RepositoryPicker } from '../repository-picker';
import { LauncherClientProvider } from '../../..';

storiesOf('Pickers', module)
  .add('RepositoryPicker', () => {
    return (
      <LauncherClientProvider>
        <GitInfoLoader>
          {gitInfo => (
            <FormPanel
              value={defaultRepoPickerValue}
              onSave={action('save')}
              onCancel={action('cancel')}
              isValid={isRepositoryPickerValueValid}
            >
              {(inputProps) => (<RepositoryPicker {...inputProps} gitInfo={gitInfo} />)}
            </FormPanel>
          )}
        </GitInfoLoader>
      </LauncherClientProvider>
    );
  })
  .add('RepositoryPicker: import', () => {
    return (
      <LauncherClientProvider>
        <GitInfoLoader>
          {gitInfo => (
            <FormPanel
              value={defaultRepoPickerValue}
              onSave={action('save')}
              onCancel={action('cancel')}
              isValid={isRepositoryPickerValueValid}
            >
              {(inputProps) => (<RepositoryPicker {...inputProps} gitInfo={gitInfo} import={true} />)}
            </FormPanel>
          )}
        </GitInfoLoader>
      </LauncherClientProvider>
    );
  });
