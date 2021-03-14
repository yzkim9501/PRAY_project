import React, { Fragment,Component } from 'react';

import Header from '../components/Header';
import Contents_react from '../components/Contents_react';

class ReactP extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Contents_react />
      </Fragment>
    )
  };
}
export default ReactP;