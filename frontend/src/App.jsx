import React from 'react';
import "./App.scss";
import { Welcome } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}


export default App;
