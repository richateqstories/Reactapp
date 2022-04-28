//import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme'
import React from 'react';

function Component(props){
  return shallow(<App {...props}/>)

}
describe('app component',()=>{
  it('snapshot testing',()=>{
    const wrapper = Component();
    expect(wrapper).toMatchSnapshot()
  })
})