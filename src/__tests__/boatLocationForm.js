import React from 'react'
import { BoatLocationForm } from '../components/boatLocationForm'
import { shallow, mount, render } from 'enzyme'

describe('BoatLocationForm', function() {
  var wrapper

  it("should match the snapshot", function() {
    wrapper = shallow(<BoatLocationForm />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should have 3 divs", function() {
    wrapper = shallow(<BoatLocationForm />)
    const divs = wrapper.find('div')
    expect(divs.length).toBe(3)
  })

  it("should set state and change dinghyLocation", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('input').first().simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(1).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(2).simulate('change', { target: { name: 'Hello' } })
    setTimeout(() => {
      expect(wrapper.state('dinghyLocation')).toEqual('Hello')
    }, 20)
  })

  it("should set state and change submarineLocation", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('input').at(3).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(4).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(5).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(6).simulate('change', { target: { name: 'Hello' } })
    setTimeout(() => {
      expect(wrapper.state('submarineLocation')).toEqual('Hello')
    }, 20)
  })

  it("should set state and change destroyerLocation", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('input').at(7).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(8).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(9).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(10).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(11).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(12).simulate('change', { target: { name: 'Hello' } })
    setTimeout(() => {
      expect(wrapper.state('destroyerLocation')).toEqual('Hello')
    }, 20)
  })

  it("should set state and change battleshipLocation", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('input').at(13).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(14).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(15).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(16).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(17).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(18).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(19).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(20).simulate('change', { target: { name: 'Hello' } })
    setTimeout(() => {
      expect(wrapper.state('destroyerLocation')).toEqual('Hello')
    }, 20)
  })

  it("should change history", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('form').simulate('submit')
    expect(wrapper.state('submitted')).toEqual(true)
  })

})
