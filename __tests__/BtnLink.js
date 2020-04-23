import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import {mount} from 'enzyme';
import {BtnLink} from '../';
import {MemoryRouter} from 'react-router';

describe('BtnLink', () => {
  test('renders correctly', () => {
    expect(mount(<MemoryRouter>
      <BtnLink href="foo">bar</BtnLink>
    </MemoryRouter>).find(BtnLink)).toMatchSnapshot();
  });

  test('text', () => {
    const wrapper = mount(<MemoryRouter>
      <BtnLink href="foo">bar</BtnLink>
    </MemoryRouter>);

    expect(wrapper.find('a').text()).toBe('bar');
  });
});
