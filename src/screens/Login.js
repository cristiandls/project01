import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import i18n from '../i18n';
import { Button, Card, CardSection, Input, Spinner } from '../components/common';
import { login } from '../actions/UserActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onLoginPress() {
    this.setState({ loading: true })
    this.props.login(this.state.email, this.state.password).catch(err => {
      console.log(err);
      this.setState({
        error: err.message
      });
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onLoginPress.bind(this)}>
        {i18n.t('button_login')}
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={i18n.t('placeholder_email')}
            label={i18n.t('label_email')}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            keyboardType="email-address"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder={i18n.t('placeholder_password')}
            label={i18n.t('label_password')}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <View><Text style={styles.errorTextStyle}>{this.state.error}</Text></View>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return { payload: state };
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps, { login })(Login);
