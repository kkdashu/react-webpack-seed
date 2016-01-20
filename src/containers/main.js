import React from 'react';
import { connect } from 'react-redux';
// import { routeActions } from 'redux-simple-router';
import Header from 'components/header/header';

class Main extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}

export default connect(
  null
)(Main);
