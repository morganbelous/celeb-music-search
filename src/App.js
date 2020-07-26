import React, { Component } from 'react';
import Clarifai from 'clarifai';
import InputForm from './components/InputForm/InputForm';
import InputImage from './components/InputImage/InputImage';
import TrackList from './components/SpotifyDisplay/TrackList';
import './App.css';

/* inspiration for face recognition from Udemy course The Complete
Web Developer in 2020: Zero to Mastery by Andrei Neagoie
github: https://github.com/aneagoie/face-recognition-brain
*/
const app = new Clarifai.App({
  apiKey: '142d9db761aa4445bf8515faf6c584f2'
})

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      celebName: '',
      artistId: '',
      artistTracks: []
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    app.models.predict("e466caa0619f444ab97497640cefc4dc", this.state.input)
      .then(response => {
        var celebName = response.outputs[0].data.regions[0].data.concepts[0].name;
        this.setState({ celebName: celebName });
        console.log(this.state.celebName);
        fetch('http://localhost:5000/artist/' + this.state.celebName)
          .then(resp => resp.json())
          .then(data => {
            this.setState({ artistId: data["data"][1] });
            console.log(this.state.artistId);
            fetch('http://localhost:5000/artist_tracks/' + this.state.artistId)
              .then(resp => resp.json())
              .then(data => this.setState({ artistTracks: data.data }))
              .catch(err => console.log("no tracks found"))

          })
          .catch(err => console.log("no artist found"))
      })
      .catch(err => "no face found");
  }

  render() {
    return (
      <div className="App">
        <InputForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <InputImage celebName={this.state.celebName} imageURL={this.state.imageURL} />
        <TrackList celebName={this.state.celebName} artistTracks={this.state.artistTracks} />

      </div>
    );
  }
}

export default App;