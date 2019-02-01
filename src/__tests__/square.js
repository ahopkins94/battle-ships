import React from 'react'
import { Square } from '../components/square'
import { shallow, mount, render } from 'enzyme'

describe('Square', function() {
  var wrapper

  it("should match the snapshot", function() {
    wrapper = shallow(<Square />)
    expect(wrapper).toMatchSnapshot()
  })

})
