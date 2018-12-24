import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';

import SideDrawerDisplay from "./components/SideDrawer/SideDrawerDisplay.js"

import BackDrop from "./components/BackDrop/BackDrop"

class App extends Component {

  state = {
    sideDrawerDisplayOn: false
  };

  toggleClickHandler = ()=> {

    this.setState((prevState)=>{
      return {sideDrawerDisplayOn:!prevState.sideDrawerDisplayOn};
    });
  };

  backDropClickHandler = ()=>{
    this.setState({sideDrawerDisplayOn: false});
  };


  render() {

    let sideDrawerDisplay;
    let backDrop;

    if(this.state.sideDrawerDisplayOn){
      sideDrawerDisplay = <SideDrawerDisplay/>;
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div className="App" style={{heigth: "50%"}}>
        <Toolbar drawerClickHandler={this.toggleClickHandler}/>
        {sideDrawerDisplay}
        {backDrop}
        <main style={{marginTop:'60px'}} >
        <p>This is main page !</p>
        </main>
      </div>
    );
  }
}

export default App;
