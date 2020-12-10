import React, { Component, forwardRef } from 'react'
import ImagePicker from 'react-native-image-picker'
import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    TextInput,
    ScrollView,
    Image,
    ToastAndroid,
    StyleSheet,
    ActivityIndicator,
    RefreshControl
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Penjual extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            token: '',
            name: '',
            category_id: '',
            description: '',
            price: '',
            weight: '',
            image: { uri: '' },
            status: '',
            modalAdd: false,
            loading: false
        }
    }
    gakJadi = () => {
        this.setState({ modalAdd: false })
    }
    tambahBarang = () => {
        const {
            name,
            category_id,
            description,
            price,
            weight,
            image,
            status
        } = this.state

        const url = 'http://lava-store.herokuapp.com/api/product';
        this.setState({ loading: true })

        const body = {
            name: name,
            category_id: category_id,
            description: description,
            price: price,
            weight: weight,
            status: status
        }
        const formDatas = new FormData()
        if (image.uri) {
            formDatas.append('image', {
                name: image.fileName,
                type: image.type,
                uri:
                    Platform.OS == 'android'
                        ? image.uri
                        : image.uri.replace('file://', ''),
            })
        }

        // Object.keys(body).forEach((key) => {
        //     data.append(key, body[key])
        // })
        formDatas.append('name', name)
        formDatas.append('category_id', category_id)
        formDatas.append('description', description)
        formDatas.append('price', price)
        formDatas.append('weight', weight)
        formDatas.append('status', status)

        console.log('ini formDatas',formDatas);

        fetch(url, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer${this.state.token}`
            },
            body: formDatas
            // this.createFormData(image, body),
        })
            .then((respon) => respon.json())
            .then((resJson) => {
                console.log(resJson);
                if (resJson.token) {
                    this.setState({ loading: false })
                    ToastAndroid.show(
                        'Barang berhasil di Upload',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                        console.log(resJson.token)
                    )
                    this.setState({ modalAdd: false })
                    this.props.navigation.navigate('Tab')
                } else {
                    this.setState({ loading: false })
                    this.setState({ modalAdd: false })
                    console.log(error);
                    alert('ada kesalahan saat upload')
                }
            })
            .catch((error) => {
                this.setState({ loading: false })
                this.setState({ modalAdd: false })
                console.log('errornya adalah ' + error);
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

    lihat = () => {
        const url = 'http://lava-store.herokuapp.com/api/product'

        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.state.token}`
            }
        })
            .then((respon) => respon.json())
            .then((resJson) => {
                console.log('ini resJson', resJson[0].data);
                this.setState({ data: resJson[0].data })
            })
            .catch((error) => {
                console.log('errornya adalah: ' + error);
            })
    }
    hapus = (id) => {
        const idbarang=id
        const url = `https://lava-store.herokuapp.com/api/product/${idbarang}`;
        console.log(idbarang);
        fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'aplication/json',
                Authorization: `Bearer ${this.state.token}`,
            },
        })
            .then((respon) => respon.json())
            .then((resJson) => {
                console.log(resJson);
                this.lihat();
            })
            .catch((error) => {
                console.log('error is' + error);
            });
    };

    componentDidMount() {
        AsyncStorage.getItem('token').then((token) => {
            if (token != null) {
                this.setState({ token: token }, () => {
                    this.lihat()
                })
            } else {
                console.log('tidak ada token');
            }
        })
    }

    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.modalAdd}
                    onRequestClose={() => this.setState({ modalAdd: false })}>

                    <LinearGradient
                        colors={['deepskyblue', 'blue']}
                        style={styles.modalGradasi}>

                        <LinearGradient
                            colors={['deepskyblue', 'blue']}
                            style={styles.modalHeader}>

                            <Text style={styles.textModalHeader}> Mulai Jual </Text>

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


                                <Text style={styles.judulInputModal}>Nama Barang</Text>

                                <TextInput
                                    placeholder='nama barang'
                                    value={this.state.name}
                                    onChangeText={(text) => this.setState({ name: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>kategori ID</Text>

                                <TextInput
                                    placeholder='kategori id'
                                    value={this.state.category_id}
                                    keyboardType='number-pad'
                                    onChangeText={(text) => this.setState({ category_id: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>Berat Barang</Text>

                                <TextInput
                                    placeholder='berat barang'
                                    value={this.state.weight}
                                    keyboardType='number-pad'
                                    onChangeText={(text) => this.setState({ weight: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>Harga Barang</Text>

                                <TextInput
                                    placeholder='harga barang'
                                    value={this.state.price}
                                    keyboardType='number-pad'
                                    onChangeText={(text) => this.setState({ price: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>Stock Barang</Text>

                                <TextInput
                                    placeholder='stock barang'
                                    value={this.state.status}
                                    keyboardType='number-pad'
                                    onChangeText={(text) => this.setState({ status: text })}
                                    style={styles.inputModal} />

                                <Text style={styles.judulInputModal}>Deskripsi Barang</Text>

                                <View style={{ backgroundColor: 'white', height: 150 }}>

                                    <TextInput
                                        value={this.state.description}
                                        multiline={true}
                                        placeholder='deskripsi barang'
                                        onChangeText={(text) => this.setState({ description: text })}
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

                                    <TouchableOpacity
                                        onPress={() => this.tambahBarang()}
                                    >
                                        <View style={styles.buttonModal}>

                                            {this.state.loading ? (
                                                <ActivityIndicator size={25} color="white" />
                                            ) : (
                                                    <Text style={{ color: 'white' }}>Posting</Text>

                                                )}

                                        </View>

                                    </TouchableOpacity>

                                </View>

                            </View>
                        </ScrollView>

                    </LinearGradient>
                </Modal>

                <ScrollView>

                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>

                        {this.state.data.map((value, key) => {
                            return (
                                <View key={key}>

                                    <View
                                        style={{ backgroundColor: 'white', width: 170, height: 270, margin: 5 }}>

                                        <View style={{ height: '50%', width: '100%', alignItems: 'center' }}>
                                            <Image
                                                source={{ uri: value.image }}
                                                style={{ height: '100%', width: '100%' }}
                                            />
                                        </View>

                                        <View style={{ padding: 5, height: '25%' }}>
                                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{value.name}</Text>
                                            <Text>{'Rp ' + value.price}</Text>
                                        </View>


                                        <View style={{ margin: 0.1 }}>

                                            <TouchableOpacity
                                            onPress={()=>this.hapus(value.id)}>

                                                <View
                                                    style={{ height: 35, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: 'white' }}>Hapus</Text>
                                                </View>

                                            </TouchableOpacity>

                                        </View>

                                        <View style={{ margin: 0.1 }}>

                                            <TouchableOpacity>

                                                <View
                                                    style={{ height: 35, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: 'white' }}>Lihat</Text>
                                                </View>

                                            </TouchableOpacity>

                                        </View>

                                    </View>
                                </View>
                            )
                        })}

                    </View>

                </ScrollView>

                <TouchableOpacity
                    onPress={() => this.setState({ modalAdd: true })}
                    style={{ alignItems: 'center', position: 'absolute', bottom: 20, right: 20 }}>

                    <LinearGradient
                        colors={['deepskyblue', 'blue']}
                        style={{ borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>

                        <Icon name='plus' size={40} color='white' />

                    </LinearGradient>

                    <Text style={{ fontWeight: 'bold' }}>Tambah</Text>

                </TouchableOpacity>

            </View >
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
