import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import {mount} from 'enzyme';
import {BtnLink} from '../';
import {MemoryRouter} from 'react-router';

describe('BtnLink', () => {
  it('renders correctly', () => {
    expect(<MemoryRouter>
      <BtnLink href="foo">bar</BtnLink>
    </MemoryRouter>).toMatchSnapshot();
  });

  test('text', () => {
    const wrapper = mount(<MemoryRouter>
      <BtnLink href="foo">bar</BtnLink>
    </MemoryRouter>);

    expect(wrapper.find('a').text()).toBe('bar');
  });
});
