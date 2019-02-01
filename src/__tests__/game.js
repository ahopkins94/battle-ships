import React from 'react'
import { Game } from '../components/game'
import { shallow, mount, render } from 'enzyme'

describe('Game', function() {
  var wrapper

  it("should match the snapshot", function() {
    const mockProps = "hello"
    wrapper = shallow(<Game allPlayerLocations={mockProps}/>)
    expect(wrapper).toMatchSnapshot()
  })

})
