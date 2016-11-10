import React from 'react';
import UnprotectedRoute from '../../components/Common/UnprotectedRoute';

class Home extends React.Component { // eslint-disable-line
  render() {
    return (
      <UnprotectedRoute>
        <div>
          Hello
        </div>
      </UnprotectedRoute>
    );
  }
}

export default Home;
