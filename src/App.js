import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <header><div class="logo"><a href="/">Jason Somai</a></div><nav><a href="/blog/">Blog</a></nav></header>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;