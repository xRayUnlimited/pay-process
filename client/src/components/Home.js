import React, { Component } from 'react';
import { Divider, Header, Image, Input, Label, Segment } from 'semantic-ui-react';
import BraintreeDrop from './BraintreeDrop';

class Home extends Component {
  state = { amount: 150.0 }

  render() {
    const { amount } = this.state
    return (
      <Segment basic textAlign="center">
        <Header
          as="h1"
          textAlign="center"
        >
          React Payments
        </Header>
        <Image 
          centered
          size="small"
          src="http://www.homedeliveryscript.com/uploads/general-store.jpg"
          alt="food basket"
        />
        <Label color="green">
          Payment Amount
        </Label>
        <Input
          value={amount}
          disabled
          style={{ fontSize: '18px' }}
        />
        <Divider />
        <BraintreeDrop amount={amount} />
      </Segment>
    );
  }
}

export default Home;