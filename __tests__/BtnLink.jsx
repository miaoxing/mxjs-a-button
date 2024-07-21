import {BtnLink} from '../';
import {MemoryRouter} from 'react-router';
import {render} from '@testing-library/react';
import {ConfigProvider} from 'antd';

describe('BtnLink', () => {
  test('renders correctly', () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <MemoryRouter>
          <BtnLink to="foo">bar</BtnLink>
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(container).toMatchSnapshot();
  });

  test('text', () => {
    const {getByTestId} = render(
      <ConfigProvider theme={{hashed: false}}>
        <MemoryRouter>
          <BtnLink data-testid="foo" to="foo">bar</BtnLink>
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(getByTestId('foo')).toMatchSnapshot();
  });
});
