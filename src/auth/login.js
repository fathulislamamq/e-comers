import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Image, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends Component {

  state = {
    visibel: true,
    email: '',
    password: '',
  };
  signIn = () => {
    const { email, password } = this.state;
    const url = 'http://lava-store.herokuapp.com/api/login';

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((resjson) => {
        console.log(resjson);
        const { token } = resjson
        if (token) {
          AsyncStorage.setItem('token', token)
          ToastAndroid.show(
            'Anda Berasil Sign In',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            this.props.navigation.replace('Tab'),
          );
        } else if (resjson.error) {
          alert(resjson.error);
        } else {
          console.log(error);
        }
      });
  };

  masuk = () => {
    this.props.navigation.navigate('Tab')
  };

  daftar = () => {
    this.props.navigation.navigate('Signup')
  }
  render() {
    return (
      <LinearGradient
        colors={['pink', '#707070']}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ height: 460, backgroundColor: '#bdbdbdd4', marginVertical: 50, width: 300, borderRadius: 5, padding: 10 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>

            <Image source={require('../assets/image/tas_belanja_3d.png')} />

            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
              <Text style={{ color: 'green' }}>La</Text>
              <Text style={{ color: 'blue' }}>va</Text>
              <Text style={{ color: 'yellow' }}> Sto</Text>
              <Text style={{ color: 'red' }}>re</Text>
            </Text>

          </View>

          <View>

            <Text style={{ fontWeight: 'bold', }}>Email</Text>

            <TextInput
              placeholder='Email'
              value={this.state.email}
              keyboardType='email-address'
              onChangeText={(text) => this.setState({ email: text })}
              style={{ backgroundColor: 'white', borderRadius: 5, marginVertical: 10 }} />
            <Text style={{ fontWeight: 'bold', }}>Password</Text>

            <TextInput
              placeholder='Password'
              value={this.state.password}
              keyboardType='name-phone-pad'
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ password: text })}
              style={{ backgroundColor: 'white', borderRadius: 5, marginVertical: 10 }} />

          </View>

          <TouchableOpacity style={{ alignItems: 'flex-end' }}>
            <Text>lupa password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.signIn()}
            style={{
              backgroundColor: 'black',
              height: 40,
              borderRadius: 21,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10
            }}>

            <Text style={{ color: 'white', fontWeight: 'bold' }}>Masuk</Text>

          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ alignItems: 'flex-end', width: '60%' }}>
              <Text>gak punya akun? </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.daftar()}>

              <Text style={{ fontWeight: 'bold', }}> Daftar</Text>

            </TouchableOpacity>
          </View>

        </View>
      </LinearGradient>
    )
  }
}
