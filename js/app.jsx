import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import axios from 'axios';

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

  handlePoints = () => {
    //Liczę punkty
    let scores = this.state.games.map((e, i) => {
      return {
        home: e.home,
        homePoints: e.homeScore > e.guestScore
          ? 3
          : (
            e.homeScore == e.guestScore
            ? 1
            : 0),
        guest: e.guest,
        guestPoints: e.guestScore > e.homeScore
          ? 3
          : (
            e.guestScore == e.homeScore
            ? 1
            : 0)
      }
    });

    let points = [];

    scores.forEach((e, i) => {

      console.log(e.homePoints, e.guestPoints);
      if (!points.find((val) => val.team === e.home)) {
        points.push({team: e.home, score: e.homePoints})
      } else {
        let t = points.find((val) => val.team == e.home)
        t.score = t.score + e.homePoints;
      }
      if (!points.find((val) => val.team === e.guest)) {
        points.push({team: e.guest, score: e.guestPoints})
      } else {
        let t = points.find((val) => val.team == e.guest)
        t.score = t.score + e.guestPoints;
      }
    })
    return _.sortBy(points, (val) => val.score).reverse();
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/games', {
      //data: JSON.stringify({
      //id: 12,
      home: this.state.home,
      guest: this.state.guest,
      homeScore: this.state.homeScore,
      guestScore: this.state.guestScore
      //})
    }).then(() => {
      axios.get('http://localhost:3000/games').then((res) => {
        this.setState({games: res.data})
      })
    })

  }

  render() {

    let table = this.handlePoints().map((e, i) => {
      return (<tr key={i}>
        <td>{e.team}</td>
        <td>{e.score}</td>
      </tr>)
    })

    let games = this.state.games.map((e, i) => {
      return <li key={i}>{e.home}
        {e.homeScore}
        : {e.guestScore}
        {e.guest}</li>
    })

    return (<> < form onSubmit = {
      this.handleSubmit
    } > <input onChange={this.handleChange} value={this.state.home} type="text" name="home" placeholder="Gospodarz"/>
    <input onChange={this.handleChange} value={this.state.homeScore} type="text" name="homeScore" placeholder="Bramki Gospodarza"/>
    <input onChange={this.handleChange} value={this.state.guest} type="text" name="guest" placeholder="Gość"/>
    <input onChange={this.handleChange} value={this.state.guestScore} type="text" name="guestScore" placeholder="Bramki Gości"/>
    <button>Dodaj</button>
  </form>
  <div>
    <ul>
      {games}
    </ul>
    <table>
      <tbody>
        {table}
      </tbody>
    </table>
  </div> < />)
  }

  componentDidMount() {
    axios.get('http://localhost:3000/games ').then((res) => {
 this.setState({games: res.data})
  })
}
}

document.addEventListener('DOMContentLoaded', function() {
ReactDOM.render(<Liga/>, document.getElementById('app'));
});
