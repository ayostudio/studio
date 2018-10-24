import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Container from '../components/container';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <div>
        <Header />
        <Container>
          <p>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </p>
        </Container>
      </div>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default Error;
