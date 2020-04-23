import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import {mount} from 'enzyme';
import {BtnLink} from '../';
import {MemoryRouter} from 'react-router';

describe('BtnLink', () => {
  test('Text', () => {
    const wrapper = mount(<MemoryRouter>
      <BtnLink href="#">foo</BtnLink>
    </MemoryRouter>);

    expect(wrapper.find('a').text()).toBe('foo');
  });
});
