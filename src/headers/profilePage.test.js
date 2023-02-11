import React from 'react';
import { shallow } from 'enzyme';
import ProfilePage from './profilepage';


describe('ProfilePage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProfilePage />);
  });


  it('should toggle the help dropdown on click', () => {
    const toggleHelpBtn = wrapper.find('.drop-btn');
    toggleHelpBtn.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper.state().isOpen).toEqual(true);

    toggleHelpBtn.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper.state().isOpen).toEqual(false);
  });

  it('should render the help description when isOpen is true', () => {
    wrapper.setState({ isOpen: true });
    expect(wrapper.find('.desc')).toHaveLength(1);
  });

  it('should not render the help description when isOpen is false', () => {
    wrapper.setState({ isOpen: false });
    expect(wrapper.find('.desc')).toHaveLength(0);
  });
});

