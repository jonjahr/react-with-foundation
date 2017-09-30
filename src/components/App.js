import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  componentWillUpdate(nextProps, nextState) {
  }



  render() {
    return (
      <div className="app">App component</div>
    )
  }
}

export default App;
