import React from 'react';
import ReactDOM from 'react-dom';

class Liga extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
     teams: [],
     games: [],
     home: '',
     guest: '',
     homeScore: 0,
     guestScore: 0
   }

   }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


   render(){
     return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.home} type="text" name="home" placeholder="Gospodarz" />
        <input onChange={this.handleChange} value={this.state.homeScore} type="text" name="homeScore" placeholder="Bramki Gospodarza" />
        <input onChange={this.handleChange} value={this.state.guest} type="text" name="guest" placeholder="Gość" />
        <input onChange={this.handleChange} value={this.state.guestScore} type="text" name="guestScore" placeholder="Bramki Gości" />
        <button>Dodaj</button>
      </form>

     )
   }
 }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Liga />,
        document.getElementById('app')
    );
});
