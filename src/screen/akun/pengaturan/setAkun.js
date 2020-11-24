import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'

export default class SetAkun extends Component {

    profil = () => {
        this.props.navigation.navigate('UbahProfil')
    }

    alamat = () => {
        this.props.navigation.navigate('AlamatSaya')
    }

    akun = () => {
        this.props.navigation.navigate('Tab')
    }

    keluar = () => {
        AsyncStorage.clear()
        this.props.navigation.replace('Tab')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <LinearGradient
                    colors={['pink', '#707070']}
                    style={{ flexDirection: 'row', height: 50, backgroundColor: '#707070', alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={() => this.akun()}
                        style={{ width: '13%', padding: 5 }}>

                        <Icon name='arrow-left' size={30} color='white' />

                    </TouchableOpacity>

                    <View style={{ width: '87%', padding: 5 }}>

                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                            Pengaturan Akun
                        </Text>

                    </View>

                </LinearGradient>


                <View style={{ flex: 1, padding: 5 }}>

                    <ScrollView>

                        <Text style={{ fontWeight: 'bold', marginVertical: 10, fontSize: 18 }}>Akun Saya
                        </Text>

                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>
                            <TouchableOpacity
                                onPress={() => this.profil()}
                                style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Profil Saya</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={() => this.alamat()}
                            style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Alamat Saya</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Kartu/ Rekening Bank</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                        </View>

                        <Text style={{ fontWeight: 'bold', marginVertical: 10, fontSize: 18 }}>Pengaturan
                        </Text>

                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Pengaturan Chat</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Pengaturan Notifikasi</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Pengaturan Privasi</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Pengguna Diblokir</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                        </View>

                        <Text style={{ fontWeight: 'bold', marginVertical: 10, fontSize: 18 }}>Bantuan
                        </Text>

                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Pusat Bantuan</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Kebijakan Lava Store</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Informasi</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, marginVertical: 10, height: 30 }}>

                                <View style={{ width: '92%' }}>
                                    <Text>Ajukan Penghapusan Akun</Text>
                                </View>

                                <View>
                                    <Icon name='chevron-right' size={20} />
                                </View>

                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity
                            onPress={() => this.keluar()}
                            style={{ alignItems: 'center', backgroundColor: 'black', justifyContent: 'center', elevation: 15, borderRadius: 5, height: 50 }}>

                            <Text style={{ color: 'white', fontWeight: 'bold', }}>Keluar</Text>

                        </TouchableOpacity>

                    </ScrollView>
                </View>


            </View>
        )
    }
}    
