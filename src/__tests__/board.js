import React from 'react'
import { Board } from '../components/board'
import { shallow, mount, render } from 'enzyme'

describe('Ship', function() {
  var wrapper

  it("should have 100 divs", function() {
    wrapper = shallow(<Board />)
    const divs = wrapper.find('div')
    expect(divs.length).toBe(100)
  })
})
