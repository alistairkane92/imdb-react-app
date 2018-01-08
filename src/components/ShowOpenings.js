import React from 'react';
import Heading from './Heading'
import ShowTimes from './ShowTimes'

class ShowOpenings extends React.Component {
  render(){
    return(
    <React.Fragment>
      <Heading/>
      <ShowTimes/>
    </React.Fragment>
    )
  }
}

export default ShowOpenings
