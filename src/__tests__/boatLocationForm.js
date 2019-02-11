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
    wrapper.find('input').first().simulate('change', { target: { name: 1 } })
    wrapper.find('input').at(1).simulate('change', { target: { name: 2 } })
    wrapper.find('input').at(2).simulate('change', { target: { name: 3 } })
    setTimeout(() => {
      expect(wrapper.state('dinghyLocation1')).toEqual(1)
    }, 20)
  })

  it("should set state and change submarineLocation", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('input').at(3).simulate('change', { target: { name: 5 } })
    wrapper.find('input').at(4).simulate('change', { target: { name: 6 } })
    wrapper.find('input').at(5).simulate('change', { target: { name: 7 } })
    wrapper.find('input').at(6).simulate('change', { target: { name: 8 } })
    setTimeout(() => {
      expect(wrapper.state('submarineLocation1')).toEqual(5)
    }, 20)
  })

  it("should set state and change submarineLocation", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('input').at(3).simulate('change', { target: { name: 10 } })
    wrapper.find('input').at(4).simulate('change', { target: { name: 20 } })
    wrapper.find('input').at(5).simulate('change', { target: { name: 30 } })
    wrapper.find('input').at(6).simulate('change', { target: { name: 40 } })
    setTimeout(() => {
      expect(wrapper.state('submarineLocation')).toEqual(10)
    }, 20)
  })

  it("should set state and change destroyerLocation", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('input').at(7).simulate('change', { target: { name: 11 } })
    wrapper.find('input').at(8).simulate('change', { target: { name: 12 } })
    wrapper.find('input').at(9).simulate('change', { target: { name: 13 } })
    wrapper.find('input').at(10).simulate('change', { target: { name: 14 } })
    wrapper.find('input').at(11).simulate('change', { target: { name: 15 } })
    wrapper.find('input').at(12).simulate('change', { target: { name: 16 } })
    setTimeout(() => {
      expect(wrapper.state('destroyerLocation1')).toEqual(11)
    }, 20)
  })

  it("should set state and change battleshipLocation", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('input').at(13).simulate('change', { target: { name: 31 } })
    wrapper.find('input').at(14).simulate('change', { target: { name: 32 } })
    wrapper.find('input').at(15).simulate('change', { target: { name: 33 } })
    wrapper.find('input').at(16).simulate('change', { target: { name: 34 } })
    wrapper.find('input').at(17).simulate('change', { target: { name: 35 } })
    wrapper.find('input').at(18).simulate('change', { target: { name: 36 } })
    wrapper.find('input').at(19).simulate('change', { target: { name: 37 } })
    wrapper.find('input').at(20).simulate('change', { target: { name: 38 } })
    setTimeout(() => {
      expect(wrapper.state('battleshipLocation1')).toEqual(31)
    }, 20)
  })

  it("should change state of submitted to true", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('form').simulate('submit')
    expect(wrapper.state('submitted')).toEqual(true)
  })

  it("should not submit the form if the locations of a boat are invalid", function() {
    wrapper = mount(<BoatLocationForm />)
    wrapper.find('input').first().simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(1).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('input').at(2).simulate('change', { target: { name: 'Hello' } })
    wrapper.find('form').simulate('submit')
    expect(wrapper.state('submitted')).toEqual(false)
  })

})
