import React from 'react';
import Heading from './Heading'
import ShowTimes from './ShowTimes'
import SeeMoreLink from './SeeMoreLink'
import TimesButton from './TimesButton'

class ShowOpenings extends React.Component {
  render(){
    return(
    <React.Fragment>
      <Heading title="UK Openings This Week"/>
      <ShowTimes listings={this.props.listings}/>
      <SeeMoreLink/>
      <TimesButton/>
    </React.Fragment>
    )
  }
}

export default ShowOpenings
