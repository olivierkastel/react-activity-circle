jest.unmock('../ActivityCircle');

import React from 'react';
import { shallow } from 'enzyme';

describe('ActivityCircle', () => {
  it('should work', () => {
    const ActivityCircle = require('../ActivityCircle');
    const wrapper = shallow(
      <ActivityCircle />
    );
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('Hay.');
  });

  it('should render all the card components', () => {
    const ActivityCircle = require('../ActivityCircle');
    const wrapper = shallow(
      <ActivityCircle text="It works!" />
    );

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('It works!');
  });
});
