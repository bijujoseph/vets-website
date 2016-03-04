import React from 'react';
import Address from './Address';

import Phone from './Phone';
import Email from './Email';
import ErrorableSelect from '../form-elements/ErrorableSelect';

import { countries, states } from '../../utils/options-for-select.js';

class VeteranAddressSection extends React.Component {
  constructor() {
    super();
    this.confirmEmail = this.confirmEmail.bind(this);
  }

  confirmEmail() {
    if (this.props.data.email !== this.props.data.emailConfirmation) {
      return 'Please ensure your entries match';
    }

    return undefined;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="small-12 columns">
            <Address value={this.props.data.address}
                onUserInput={(update) => {this.props.onStateChange('address', update);}}/>

            <Email label="Email address"
                value={this.props.data.email}
                onValueChange={(update) => {this.props.onStateChange('email', update);}}/>

            <Email error={this.confirmEmail()}
                label="Re-enter Email address"
                value={this.props.data.emailConfirmation}
                onValueChange={(update) => {this.props.onStateChange('emailConfirmation', update);}}/>

            <Phone label="Home telephone number"
                value={this.props.data.homePhone}
                onValueChange={(update) => {this.props.onStateChange('homePhone', update);}}/>

            <Phone label="Mobile telephone number"
                value={this.props.data.mobilePhone}
                onValueChange={(update) => {this.props.onStateChange('mobilePhone', update);}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default VeteranAddressSection;
