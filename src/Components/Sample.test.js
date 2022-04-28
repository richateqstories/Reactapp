import React from "react";
import { shallow, mount } from "enzyme";
import Sample from './Sample';

function Component(props){
    return shallow(<Sample {...props}/>)
}

describe ('app component',()=>{
    it('snapshot testing',()=>{
        const wrapper = Component();
        expect(wrapper).toMatchSnapshot();
    })

    it('should call updatedata',()=>{
      const wrapper = Component();
      const spy = jest.spyOn(wrapper.instance(), 'updatedata')
      wrapper.instance().forceUpdate();
      wrapper.update();
      wrapper.find('button').at(0).props().onClick();
      expect(spy).toHaveBeenCalled();
    })

})