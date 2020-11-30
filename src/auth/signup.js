import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class Signup extends Component {

    state = {
        visibel: true,
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        loading: false
    };
    signUp = () => {
        const { name, email, password, password_confirmation } = this.state;
        const url = 'http://lava-store.herokuapp.com/api/register';
        this.setState({ loading: true })

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation: password,
            }),
        })
            .then((respon) => respon.json())
            .then((resJson) => {
                console.log(resJson);
                if (resJson.token) {
                    this.setState({ loading: false })
                    ToastAndroid.show(
                        'Sign Up Berasil',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    );
                    this.props.navigation.replace('Login')
                } else {
                    this.setState({ loading: false })
                    alert('error');
                }
            })
            .catch((error) => {
                console.log('error is' + error);
            });
    };

    masuk = () => {
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <LinearGradient
                colors={['pink', 'purple']}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ backgroundColor: '#bdbdbdd4', height: 560, width: 300, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5 }}>

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

                        <Text style={{ fontWeight: 'bold', }}>Username</Text>

                        <TextInput
                            placeholder='Username'
                            value={this.state.name}
                            keyboardType='email-address'
                            onChangeText={(text) => this.setState({ name: text })}
                            style={{ backgroundColor: 'white', borderRadius: 5, marginVertical: 5 }} />

                        <Text style={{ fontWeight: 'bold', }}>Email</Text>

                        <TextInput
                            placeholder='Email'
                            value={this.state.email}
                            keyboardType='email-address'
                            onChangeText={(text) => this.setState({ email: text })}
                            style={{ backgroundColor: 'white', borderRadius: 5, marginVertical: 5 }} />

                        <Text style={{ fontWeight: 'bold', }}>Password</Text>

                        <TextInput
                            placeholder='Password'
                            value={this.state.password}
                            keyboardType='name-phone-pad'
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ password: text })}
                            style={{ backgroundColor: 'white', borderRadius: 5, marginVertical: 5 }} />

                        <Text style={{ fontWeight: 'bold', }}>Konfirmasi Password</Text>

                        <TextInput
                            placeholder='Konfirmasi Password'
                            value={this.state.password_confirmation}
                            keyboardType='name-phone-pad'
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ password_confirmation: text })}
                            style={{ backgroundColor: 'white', borderRadius: 5, marginVertical: 5 }} />
                    </View>

                    <TouchableOpacity
                        onPress={() => this.signUp()}
                        style={{
                            backgroundColor: 'black',
                            height: 40,
                            borderRadius: 21,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: 5
                        }}>

                        {this.state.loading ? (
                            <ActivityIndicator size={25} color="white" />
                        ) : (
                                <Text
                                    style={{ color: 'white', fontWeight: 'bold', }}>Daftar
                                </Text>
                            )}


                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ alignItems: 'flex-end', width: '60%' }}>
                            <Text>punya punya akun? </Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => this.masuk()}>

                            <Text style={{ fontWeight: 'bold', }}> Masuk</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

// aku8@gmail.com
// aku1234567