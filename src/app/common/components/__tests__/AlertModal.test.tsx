import React from 'react';
import { render } from '@testing-library/react';
import AlertModal from '../AlertModal';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

// jest.mock('./MyComponent', () => () => <div>hi</div>);
// const MockMyComponent = () => {
//   React.useEffect(() => {
//     console.log('using an effect');
//   });
//   return <div>Hello World</div>;
// };
// jest.mock('../AlertModal', () => ({
//   __esModule: true,
//   namedExport: jest.fn(),
//   default: jest.fn(),
// }));

// beforeAll(() => {
//   AlertModal.mockImplementation(MockMyComponent);
// });

import configureStore from '../../../../configureStore';

const { persistor, store } = configureStore();

test('renders', () => {
  const { container } = render(
    <Provider store={store}>
      <AlertModal alertMessage="Testing alert message!"></AlertModal>
    </Provider>
  );
  console.log('container', container);

  expect(container.textContent).toMatch('Testing alert message!');
});
