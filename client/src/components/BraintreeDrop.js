import BraintreeDropin from 'braintree-dropin-react';
import braintree from 'braintree-web-drop-in';
import React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';

class BraintreeDrop extends React.Component {
  state = { loaded: false, token: '' }

  handlePaymentMethod = (payload) => {
    debugger
  }

  render() {
    const { loaded, token } = this.state;

    if (loaded)
      return (
        <Segment basic textAlign="center">
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            renderSubmitButton={BraintreeSubmitButton}
          />
        </Segment>
      )
    else
      return (
        <Dimmer active>
          <Loader>
            Loading payment experience...
          </Loader>
        </Dimmer>
      )
  }
}

export default connect()(BraintreeDrop);