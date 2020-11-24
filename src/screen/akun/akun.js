import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View, Image, TouchableOpacity,Modal } from 'react-native'
import TabAkun from '../../router/tabAkun'
import LinearGradient from 'react-native-linear-gradient'

export default class Akun extends Component {

    constructor() {
        super()
        this.state = {
            token: '',
            username: 'Nama Pengguna',
            data: '',
        }
    }

    setAkun = () => {
        this.props.navigation.navigate('SetAkun')
    }
    akun = () => {
        const url = 'http://lava-store.herokuapp.com/api/profile';

        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.state.token}`
            },
        })

            .then((respon) => respon.json())
            .then((resJson) => {
                console.log(resJson);
                this.setState({ data: resJson.data[0] })
            })
            .catch((error) => {
                console.log('errornya adalah' + error);
            })
    }
    componentDidMount() {
        AsyncStorage.getItem('token').then((token) => {
            if (token != null) {
                this.setState({ token: token })
                this.akun()
            } else {
                console.log('gak ada token');
            }
        })
    }
    masuk = () => {
        this.props.navigation.navigate('Login')
    }
    daftar = () => {
        this.props.navigation.navigate('Signup')
    }
    keluar = () => {
        AsyncStorage.clear()
        this.props.navigation.replace('Home')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.token == '' ? (

                    <LinearGradient
                        colors={['pink', '#707070']}
                        style={{ height: 110, elevation: 5, alignItems: 'center', padding: 5 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <View>

                                <Image
                                    style={{ height: 40, width: 40 }}
                                    source={require('../../assets/image/tas_belanja_3d.png')}
                                />

                            </View>

                            <View>

                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                    <Text style={{ color: 'green' }}> La</Text>
                                    <Text style={{ color: 'blue' }}>va</Text>
                                    <Text style={{ color: 'yellow' }}> Ak</Text>
                                    <Text style={{ color: 'red' }}>un</Text>
                                </Text>

                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <View style={{ width: '50%', padding: 5 }}>

                                <TouchableOpacity
                                    onPress={() => this.masuk()}
                                    style={{ backgroundColor: 'black', height: 40, borderRadius: 21, justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>

                                    <LinearGradient colors={['black', '#707070']}>

                                        <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                            Masuk
                                </Text>

                                    </LinearGradient>

                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '50%', padding: 5 }}>

                                <TouchableOpacity
                                    onPress={() => this.daftar()}
                                    style={{ backgroundColor: 'black', height: 40, borderRadius: 21, justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>

                                    <LinearGradient colors={['black', '#707070']}>

                                        <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                            Daftar
                                </Text>

                                    </LinearGradient>

                                </TouchableOpacity>

                            </View>

                        </View>

                    </LinearGradient>
                ) : (
                        <View style={{ flex: 1 }}>

                            <LinearGradient
                                colors={['pink', '#707070']}
                                style={{ flexDirection: 'row', height: 100, elevation: 5, alignItems: 'center', padding: 10 }}>

                                <View style={{ borderRadius: 50, height: 80, width: 80, backgroundColor: 'white' }}>

                                </View>
                                <View style={{ padding: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{this.state.data.name}</Text>

                                    <TouchableOpacity
                                        onPress={() => this.setAkun()}>
                                        <Text style={{ color: 'white' }}>setelan  </Text>
                                    </TouchableOpacity>

                                </View>

                            </LinearGradient>

                            <TabAkun />

                        </View>

                    )
                }

            </View>

        )
    }
}
