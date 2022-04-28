import React from "react";
import { shallow, mount } from "enzyme";
import Counter from './Counter';

function Component(props){
    return shallow(<Counter {...props}/>)
}

describe ('app component',()=>{
    it('snapshot testing',()=>{
        const wrapper = Component();
        expect(wrapper).toMatchSnapshot();
    })
    it('should test incrementHandler',()=>{
      const wrapper = Component();
      const spy = jest.spyOn(wrapper.instance(), 'incrementHandler')
      wrapper.instance().forceUpdate();
      wrapper.update();
      wrapper.find('button').at(0).props().onClick();
      expect(spy).toHaveBeenCalled();
    })

    it('should test decrementHandler',()=>{
      const wrapper = Component();
      const spy = jest.spyOn(wrapper.instance(), 'decrementHandler')
      wrapper.instance().forceUpdate();
      wrapper.update();
      wrapper.find('button').at(1).props().onClick();
      expect(spy).toHaveBeenCalled();
    })

})