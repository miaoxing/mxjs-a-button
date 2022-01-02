import {NewBtn} from '../';
import {MemoryRouter} from 'react-router';
import {render} from '@testing-library/react';

describe('NewBtn', () => {
  test('default', () => {
    const {container} = render(<MemoryRouter>
      <NewBtn href="foo">bar</NewBtn>
    </MemoryRouter>);

    expect(container).toMatchSnapshot();
  });

  test('text', () => {
    const {container} = render(<MemoryRouter>
      <NewBtn data-testid="foo" href="foo">bar</NewBtn>
    </MemoryRouter>);

    expect(container).toMatchSnapshot();
  });
});
