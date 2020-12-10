import React, { Component } from 'react'
import { Text, View, ScrollView, Modal, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
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
            edit: false,
            image: ''
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

    createFormData = (photo, body) => {
        const data = new FormData()

        data.append('image', {
            name: photo.fileName,
            type: photo.type,
            uri:
                Platform.OS == 'android'
                    ? photo.uri
                    : photo.uri.replace('file://', ''),
        })
        Object.keys(body).forEach((key) => {
            data.append(key, body[key])
        })

        return data
    }

    handleChoosePhoto = () => {
        const option = {
            noData: true
        }
        ImagePicker.showImagePicker(option, (response) => {
            console.log(response);
            if (response.uri) {
                this.setState({ image: response })
            }
        })
    }
    keluar = () => {
        AsyncStorage.clear()
        this.props.navigation.replace('Home')
    }
    gakJadi = () => {
        this.setState({ edit: false })
    }
    render() {


        return (
            <View style={{ flex: 1 }}>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.edit}
                    onRequestClose={() => this.setState({ edit: false })}>

                    <LinearGradient
                        colors={['deepskyblue', 'blue']}
                        style={styles.modalGradasi}>

                        <LinearGradient
                            colors={['deepskyblue', 'blue']}
                            style={styles.modalHeader}>

                            <Text style={styles.textModalHeader}> Edit Profile </Text>

                        </LinearGradient>

                        <ScrollView style={{ flex: 1 }}>

                            <TouchableOpacity
                                onPress={() => this.handleChoosePhoto()}
                                style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                                <View style={styles.bingkaiImageModal}>

                                    {this.state.image !== '' ? (
                                        <Image
                                            style={styles.bingkaiImageModal}
                                            source={{ uri: this.state.image.uri }}
                                        />
                                    ) : (
                                            <Text>image</Text>
                                        )}

                                </View>
                            </TouchableOpacity>

                            <View style={{ padding: 10 }}>


                                <Text style={styles.judulInputModal}>Nama</Text>

                                <TextInput
                                    placeholder='nama'
                                    value={this.state.name}
                                    onChangeText={(text) => this.setState({ name: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>Username</Text>

                                <TextInput
                                    placeholder='username'
                                    value={this.state.name}
                                    onChangeText={(text) => this.setState({ username: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>Tanggal Lahir</Text>

                                <TextInput
                                    placeholder='tanggal lahir'
                                    value={this.state.tanggal}
                                    onChangeText={(text) => this.setState({ tanggal: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>No. Telepon</Text>

                                <TextInput
                                    placeholder='no telepon'
                                    value={this.state.nomor_telepon}
                                    keyboardType='number-pad'
                                    onChangeText={(text) => this.setState({ nomor_telepon: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>Email</Text>

                                <TextInput
                                    placeholder='email'
                                    value={this.state.email}
                                    keyboardType='number-pad'
                                    onChangeText={(text) => this.setState({ email: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>Alamat</Text>

                                <View style={{ backgroundColor: 'white', height: 150 }}>

                                    <TextInput
                                        value={this.state.alamat}
                                        multiline={true}
                                        placeholder='alamat'
                                        onChangeText={(text) => this.setState({ alamat: text })}
                                    />

                                </View>


                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', padding: 10, }}>

                                    <TouchableOpacity
                                        onPress={() => this.gakJadi()}
                                    >

                                        <View style={styles.buttonModal}>
                                            <Text style={{ color: 'white' }}>Cencel</Text>

                                        </View>

                                    </TouchableOpacity>

                                </View>

                                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', padding: 10, }}>

                                    <TouchableOpacity>
                                        <View style={styles.buttonModal}>

                                            {this.state.loading ? (
                                                <ActivityIndicator size={25} color="white" />
                                            ) : (
                                                    <Text style={{ color: 'white' }}>Simpan</Text>

                                                )}

                                        </View>

                                    </TouchableOpacity>

                                </View>

                            </View>
                        </ScrollView>

                    </LinearGradient>
                </Modal>

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
                                    <Text style={{ fontWeight: 'bold' }}>{this.state.data.name}</Text>
                                </View>

                            </View>

                        </View>

                        <View style={{ padding: 5, backgroundColor: 'white', marginBottom: 20, elevation: 15, borderRadius: 5 }}>

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

                        <TouchableOpacity
                            onPress={() => this.setState({ edit: true })}
                            style={{ alignItems: 'center', backgroundColor: 'black', justifyContent: 'center', elevation: 15, borderRadius: 5, height: 50 }}>

                            <Text style={{ color: 'white', fontWeight: 'bold', }}>Edit Profile</Text>

                        </TouchableOpacity>

                    </ScrollView>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalGradasi: {
        flex: 1,
        alignItems: 'center'
    },
    modalHeader: {
        height: 50,
        width: '100%',
        backgroundColor: '#bdbdbdd4',
        justifyContent: 'center',
        marginBottom: 10,
        alignItems: 'center'
    },
    textModalHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },
    bingkaiImageModal: {
        width: 300,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    judulInputModal: {
        marginTop: 5,
        fontWeight: 'bold',
        color: 'white'
    },
    inputModal: {
        height: 40,
        marginVertical: 5,
        backgroundColor: 'white'
    },
    buttonModal: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})
