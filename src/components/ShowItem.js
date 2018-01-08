import React from 'react';

class ShowItem extends React.Component {
  render(){
    return (
      <React.Fragment>
          <h2>{this.props.title}</h2>
          <h3>Showtimes</h3>
      </React.Fragment>
    );
  }
}

export default ShowItem
