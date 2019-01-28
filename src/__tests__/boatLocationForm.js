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
    wrapper.find('input').first().simulate('change', { target: { value: 'Hello' } })
    setTimeout(() => {
      expect(wrapper.state('dinghyLocation')).toEqual('Hello')
    }, 20)
  })
})
