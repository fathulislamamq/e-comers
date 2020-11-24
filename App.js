import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Login from './src/auth/login'
import Navigation from './src/router/stack'
import AlamatSaya from './src/screen/akun/pengaturan/alamatSaya'

export default class App extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}
