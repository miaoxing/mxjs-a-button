import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import {BtnLink} from '../';
import {act} from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router';

let container;

describe('BtnLink', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('column', async () => {
    await act(async () => {
      ReactDOM.render(<MemoryRouter>
        <BtnLink href="#">foo</BtnLink>
      </MemoryRouter>, container);
    });

    const button = container.querySelector('a');
    expect(button.textContent).toBe('foo');
  });
});
