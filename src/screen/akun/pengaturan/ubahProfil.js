import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'

export default class UbahProfil extends Component {

    constructor() {
        super()
        this.state = {
            token: '',
            foto: 'Foto',
            nama: 'Nama Pengguna',
            username: 'username',
            jenisKelamin: 'Jenis Kelamin',
            tanggalLahir: 'Tanggal Lahir',
            noTelepon: 'No.Telepon',
            email: 'Email',
            ubahPassword: 'Ubah Password',
            ModalNama: false,
            ModalUsername: false,
            ModalKelamin: false,
            ModalLahir: false,
            ModalTlpn: false,
            ModalEmail: false,
            Modalpass: false,
        }
    }

    selesai = () => {
        const { token, foto, nama, username, jenisKelamin, tanggalLahir, noTelepon, email, ubahPassword, ModalNama, ModalUsername, ModalKelamin, ModalLahir, ModalTlpn, ModalEmail, Modalpass}=this.state
        const url = 'http://lava-store.herokuapp.com/api/profile';

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.state.token}`
            },
        })

            .then((respon) => respon.json())
            .then((resJson) => {
                console.log(resJson)
            })
            .catch((error) => {
                console.log('errornya adalah' + error);
            })
    }

    okUs = () => {
        this.setState({ ModalUsername: false });
    }

    kembali = () => {
        this.props.navigation.navigate('SetAkun')
    }

    render() {

        
        return (
            <View style={{ flex: 1 }}>

                <LinearGradient
                    colors={['pink', '#707070']}
                    style={{ flexDirection: 'row', height: 50, alignItems: 'center', backgroundColor: '#707070' }}>

                    <TouchableOpacity
                        onPress={() => this.kembali()}
                        style={{ width: '15%' }}>
                        <Icon name='arrow-left' size={30} color='white' />
                    </TouchableOpacity>

                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Ubah Profil</Text>
                    </View>

                    <TouchableOpacity style={{ width: '10%' }}>
                        <Icon name='check' size={30} color='white' />
                    </TouchableOpacity>

                </LinearGradient>

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.ModalUsername}
                    onRequestClose={() => this.setState({ ModalUsername: false })}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5, color: 'white' }}>Username</Text>
                        <TextInput
                            placeholder={this.state.username}
                            onChangeText={(text) => this.setState({ username: text })}
                            style={{ backgroundColor: 'white', width: 300, marginBottom: 5 }} />
                        <TouchableOpacity
                            onPress={() => this.setState({ModalUsername:false})}>
                            <LinearGradient
                                colors={['black', '#707070']}
                                style={{ width: 100, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                            >
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Selesai</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <View style={{ flex: 1, padding: 5 }}>

                    <ScrollView>

                        <View style={{ height: 150, backgroundColor: '#transparant', justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{ height: 100, width: 100, backgroundColor: '#bdbdbdd4', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>

                                <Text> Profil Saya </Text>

                            </View>
                        </View>



                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Nama</Text>
                                </View>

                                <View style={{ width: '60%', alignItems: 'flex-end', paddingHorizontal: 5 }}>
                                    <Text>Tes</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>edit</Text>
                                </View>

                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Username</Text>
                                </View>

                                <View style={{ width: '60%', alignItems: 'flex-end', paddingHorizontal: 5 }}>
                                    <Text>{this.state.username}</Text>
                                </View>

                                <TouchableOpacity
                                    onPress={() => this.setState({ ModalUsername: true })}>
                                    <Text style={{ fontWeight: 'bold' }}>edit</Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Jenis Kelamin</Text>
                                </View>

                                <View style={{ width: '60%', alignItems: 'flex-end', paddingHorizontal: 5 }}>
                                    <Text>Tes</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>edit</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Tanggal Lahir</Text>
                                </View>

                                <View style={{ width: '60%', alignItems: 'flex-end', paddingHorizontal: 5 }}>
                                    <Text>Tes</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>edit</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>No. Telepon</Text>
                                </View>

                                <View style={{ width: '60%', alignItems: 'flex-end', paddingHorizontal: 5 }}>
                                    <Text>Tes</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>edit</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Email</Text>
                                </View>

                                <View style={{ width: '60%', alignItems: 'flex-end', paddingHorizontal: 5 }}>
                                    <Text>Tes</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>edit</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 0.5, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '30%' }}>
                                    <Text>Ubah Password</Text>
                                </View>

                                <View style={{ width: '60%', alignItems: 'flex-end', paddingHorizontal: 5 }}>
                                    <Text>Tes</Text>
                                </View>

                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>edit</Text>
                                </View>

                            </TouchableOpacity>

                        </View>

                    </ScrollView>

                </View>

            </View>
        )
    }
}
