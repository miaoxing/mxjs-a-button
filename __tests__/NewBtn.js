import {NewBtn} from '../';
import {MemoryRouter} from 'react-router';
import {render} from '@testing-library/react';
import {ConfigProvider} from 'antd';

describe('NewBtn', () => {
  test('default', () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <MemoryRouter>
          <NewBtn href="foo">bar</NewBtn>
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(container).toMatchSnapshot();
  });

  test('text', () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <MemoryRouter>
          <NewBtn data-testid="foo" href="foo">bar</NewBtn>
        </MemoryRouter>
      </ConfigProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
