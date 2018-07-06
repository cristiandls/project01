import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import i18n from '../i18n';
import { logout } from '../actions/UserActions';
import { Button, Card, CardSection } from '../components/common';

class Authenticated extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>{i18n.t('title_authenticated') + ' ' + this.props.payload.user.email}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={() => { this.props.logout(); }}>
            {i18n.t('button_logout')}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return { payload: state };
}

export default connect(mapStateToProps, { logout })(Authenticated);
