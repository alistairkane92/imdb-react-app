import React from 'react';
import ShowItem from './ShowItem'

class ShowTimes extends React.Component {
  render(){
    const MovieItems = this.props.title.map(movie => {
      return(
          <ShowItem>{movie.title}</ShowItem>
      )
    })
  }
}

export default ShowTimes
