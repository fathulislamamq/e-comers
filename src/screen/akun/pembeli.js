import React, { Component } from 'react'
import { Text, View, ScrollView, Modal, TextInput } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default class Pembeli extends Component {

    constructor() {
        super()
        this.state = {
            token: '',
            username: '',
            data: '',
        }
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
    keluar = () => {
        AsyncStorage.clear()
        this.props.navigation.replace('Home')
    }

    render() {

        
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1, padding: 5 }}>

                    <ScrollView>

                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Nama</Text>
                                </View>

                                <View style={{ width: '5%', paddingHorizontal: 5 }}>
                                    <Text>:</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.data.name}</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Username</Text>
                                </View>

                                <View style={{ width: '5%', paddingHorizontal: 5 }}>
                                    <Text>:</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.data.username}</Text>
                                </View>

                            </View>

                        </View>

                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Jenis Kelamin</Text>
                                </View>

                                <View style={{ width: '5%', paddingHorizontal: 5 }}>
                                    <Text>:</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.data.kelamin}</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Tanggal Lahir</Text>
                                </View>

                                <View style={{ width: '5%', paddingHorizontal: 5 }}>
                                    <Text>:</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.data.lahir}</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>No. Telepon</Text>
                                </View>

                                <View style={{ width: '5%', paddingHorizontal: 5 }}>
                                    <Text>:</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.data.telepon}</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Email</Text>
                                </View>

                                <View style={{ width: '5%', paddingHorizontal: 5 }}>
                                    <Text>:</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.data.email}</Text>
                                </View>

                            </View>

                        </View>

                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Alamat</Text>
                                </View>

                                <View style={{ width: '5%', paddingHorizontal: 5 }}>
                                    <Text>:</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.data.alamat}</Text>
                                </View>

                            </View>

                        </View>

                    </ScrollView>

                </View>

            </View>
        )
    }
}

