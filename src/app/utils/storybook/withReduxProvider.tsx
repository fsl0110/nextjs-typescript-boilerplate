import { makeDecorator } from '@storybook/addons';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

export const withReduxProvider = makeDecorator({
  name: 'Reduxprovider',
  parameterName: 'reduxprovider',
  wrapper(getStory, context) {
    return <Provider store={store}>{getStory(context)}</Provider>;
  },
});
