import React from 'react';
import { render } from '@testing-library/react';
import AlertModal from '../AlertModal';
import '@testing-library/jest-dom/extend-expect';

// jest.mock('./MyComponent', () => () => <div>hi</div>);
const MockMyComponent = () => {
  React.useEffect(() => {
    console.log('using an effect');
  });
  return <div>Hello World</div>;
};
jest.mock('../AlertModal', () => ({
  __esModule: true,
  namedExport: jest.fn(),
  default: jest.fn(),
}));

beforeAll(() => {
  AlertModal.mockImplementation(MockMyComponent);
});

test('renders', () => {
  const { container } = render(<AlertModal />);
  expect(container.textContent).toMatch('Hello World');
});
