import * as React from 'react';
import { fireEvent, render, act, cleanup } from 'react-testing-library';
import { newMockHealthChecksCapabilityApi } from '../HealthChecksCapabilityApi';
import { HealthChecksCapability, HealthChecksApiContext } from '../HealthChecksCapability';

jest.useFakeTimers();

afterEach(() => {
  console.log('cleanup()');
  cleanup();
});

describe('<HealthChecksCapability />', () => {
  it('check that initial render is correct', () => {
    const component = render(<HealthChecksCapability />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('check that readiness is working', async () => {
    const api = newMockHealthChecksCapabilityApi();
    const result = { content: 'OK', time: 1542793377 };
    const doGetReadiness = jest.spyOn(api, 'doGetReadiness').mockResolvedValue(result);
    const Wrapper: React.FunctionComponent = (props) => (<HealthChecksApiContext.Provider value={api}>{props.children}</HealthChecksApiContext.Provider>)
    const component = render(<HealthChecksCapability />, { wrapper: Wrapper });
    fireEvent.click(component.getByLabelText('Execute Readiness check'));
    await act(async () => {
      await doGetReadiness.mock.results[0];
    });
    expect(doGetReadiness).toHaveBeenCalled();
    expect(component.getByLabelText(result.content));
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('check that liveness is working', async () => {
    const api = newMockHealthChecksCapabilityApi();
    const result = { content: 'OK', time: 1542793377 };
    const doGetLiveness = jest.spyOn(api, 'doGetLiveness').mockResolvedValue(result);
    const Wrapper: React.FunctionComponent = (props) => (<HealthChecksApiContext.Provider value={api}>{props.children}</HealthChecksApiContext.Provider>)
    const component = render(<HealthChecksCapability />, { wrapper: Wrapper });
    fireEvent.click(component.getByLabelText('Execute Liveness check'));
    await act(async () => {
      await doGetLiveness.mock.results[0];
    });
    expect(doGetLiveness).toHaveBeenCalled();
    expect(component.getByLabelText(result.content));
    expect(component.asFragment()).toMatchSnapshot();
  });
});
