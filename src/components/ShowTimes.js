import React from 'react';
import ShowItem from './ShowItem'

class ShowTimes extends React.Component {
  render(){
    const movieNodes = this.props.listings.map(movie => {
      return (
        <ShowItem title={movie.title}></ShowItem>
      );
    });

    return (
      <div>
        {movieNodes}
      </div>
    );
  }
}

export default ShowTimes
