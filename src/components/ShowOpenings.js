import React from 'react';
import ShowTimes from './ShowTimes'

class ShowOpenings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listings: [
        { id: 1, title: "Star Wars"},
        { id: 2, title: "Mollys Game"},
        { id: 3, title: "The Greatest Entertainer"},
        { id: 4, title: "Jumanji"},
        { id: 5, title: "Pitch Perfect 3"}
      ]
    }
  }

  render(){
    return (
       <React.Fragment>
         <h1>UK Openings This Weekend</h1>
         <ShowTimes listings={this.state.listings}/>
         <a href="see-more">See More Openings This Week</a>
         <button>Click to See More</button>
       </React.Fragment>
     );
   }
}

export default ShowOpenings
