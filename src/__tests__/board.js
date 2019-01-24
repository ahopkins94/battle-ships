import React from 'react'
import { PlayerBoard } from '../components/Playerboard'
import { shallow, mount, render } from 'enzyme'

describe('PlayerBoard', function() {
  var wrapper

  it("should have 10 divs", function() {
    wrapper = shallow(<PlayerBoard />)
    const divs = wrapper.find('div')
    expect(divs.length).toBe(12)
  })
})
