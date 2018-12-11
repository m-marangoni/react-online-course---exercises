/* global Mixcloud */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Header';
import FeaturedMix from './FeaturedMix';
import Home from './Home';


const About = () => <h1>Home</h1>;
const Archive = () => <h1>Home</h1>;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playng: false,
      currentMix: ''
    };
  }

  mountAudio = async () => {

    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
    this.widget.events.pause.on(
      () => this.setState({
        playing: false
      }));
      this.widget.events.play.on(
        () => this.setState({
          playing: true
        }));
    
  };

  componentDidMount(){
    this.mountAudio();
  }

  togglePlay = () => {
    this.widget.togglePlay();
  };

  playMix = mixName => {
    this.setState({
      currentMix: mixName
    })
    this.widget.load(mixName, true);
  };

  render() {
    return (
      <Router>
        <div>
        <div className="flex-l justify-end"> 
          <FeaturedMix/>
          <div className="w-50-l relative z-1 ">
          <Header></Header>
          <div> 
            {this.state.playing && (
              <button onClick={this.togglePlay}>
              { this.state.playing ? 'Pause' : 'Play'}
              </button>
            )};
          </div>
          <div>
            <h1>currently playing: {this.state.currentMix} </h1> 
            <button onClick={() => this.playMix
            ('/NTSRadio/bonobo-24th-june-2015/')}>Play bonobo mix</button>
            <button onClick={() => this.playMix
            ('/NTSRadio/floating-points-four-tet-16th-march-2017/')}>Play four-tet mix</button>
          </div>
          { /* Routed page*/}
          <Route exact path="/" component={Home}/>
          <Route  path="/archive" component={Archive}/>
          <Route  path="/about" component={About}/>
          </div>
        </div>
        { /* AudioPlayer*/}
        <iframe 
        width="100%" 
        height="60" 
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2F" 
        frameBorder="0"
        className="z-5 db fixed bottom-0 "
        ref={player => (this.player = player)} >
        </iframe>

        </div>
      </Router>
    );
  }
}

export default App;
