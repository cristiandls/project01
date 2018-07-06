import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import i18n from '../i18n';
import { getUser, login, logout } from '../actions/UserActions';
import { Spinner } from '../components/common';
import Login from './Login';
import Autheticated from './Authenticated';

class LoadingScreen extends Component {

  componentWillMount() {
    this.props.getUser();
  }

  onRenderScreen() {
    // Si no hay ningún usuario seteado pero se está esperando la respuesta de FB
    if (this.props.payload.loading.user === undefined || this.props.payload.loading.user === true) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <Text>
            {i18n.t('recover_session')};
          </Text>
          <Spinner size="large" />
        </View>
      );
    } 

    // Si no hay ningún usuario logueado
    if (this.props.payload.user === null || Object.keys(this.props.payload.user).length === 0) {
      return (
        <Login />
      );
    }

    return (
      <Autheticated />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>{this.onRenderScreen()}</View>
    );
  }
}

function mapStateToProps(state) {
  return { payload: state };
}

export default connect(mapStateToProps, { getUser, login, logout })(LoadingScreen);
