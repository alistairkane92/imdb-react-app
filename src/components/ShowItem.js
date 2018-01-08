import React from 'react';

class ShowItem extends React.Component {
  render(){
    return(
      <div>
        <h4>{this.props.title}</h4>
      </div>
    )
  }
}

export default ShowItem
