import React, { Component } from 'react';
import { connect } from 'react-redux';

class Index extends Component {
  render () {
    return (
      <div>
        Hello word!
      </div>
    );
  }
}

export default connect(
  null
)(Index);
