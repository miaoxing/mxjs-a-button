import {BtnLink} from '../';
import {MemoryRouter} from 'react-router';
import {render} from '@testing-library/react';

describe('BtnLink', () => {
  test('renders correctly', () => {
    const {container} = render(<MemoryRouter>
      <BtnLink href="foo">bar</BtnLink>
    </MemoryRouter>);

    expect(container).toMatchSnapshot();
  });

  test('text', () => {
    const {getByTestId} = render(<MemoryRouter>
      <BtnLink data-testid="foo" href="foo">bar</BtnLink>
    </MemoryRouter>);

    expect(getByTestId('foo').innerHTML).toBe('bar');
  });
});
