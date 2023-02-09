import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MyHeader from './MyHeader';

describe('MyHeader', () => {
  let props;
  let shallowMyHeader;
  let renderedMyHeader;
  let mountedMyHeader;

  const shallowTestComponent = () => {
    if (!shallowMyHeader) {
      shallowMyHeader = shallow(<MyHeader {...props} />);
    }
    return shallowMyHeader;
  };

  const renderTestComponent = () => {
    if (!renderedMyHeader) {
      renderedMyHeader = render(<MyHeader {...props} />);
    }
    return renderedMyHeader;
  };

  const mountTestComponent = () => {
    if (!mountedMyHeader) {
      mountedMyHeader = mount(<MyHeader {...props} />);
    }
    return mountedMyHeader;
  };  

  beforeEach(() => {
    props = {};
    shallowMyHeader = undefined;
    renderedMyHeader = undefined;
    mountedMyHeader = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
