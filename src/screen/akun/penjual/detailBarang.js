import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'

export default class DetailBarang extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            jumlah: 0,
            token: '',
            modal: false,
            loading: false,
        };
        AsyncStorage.getItem('token').then((token) => {
            if (token != null) {
                this.setState({ token: token });
                // this.produk();
            } else {
                console.log('token tidak ada');
            }
        });
    }

    // produk = () => {
    //     const id = this.props.route.params.item;
    //     const url = `https://lava-store.herokuapp.com/api/product/watch/${id}`;
    //     this.setState({ loading: true });
    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'aplication/json',
    //             'Content-Type': 'aplication/json',
    //             Authorization: `Bearer ${this.state.token}`
    //         },
    //     })
    //         .then((respon) => respon.json())
    //         .then((resJson) => {
    //             console.log(this.id.id)
    //             this.setState({ data: resJson.data, loading: false });
    //         })
    //         .catch((error) => {
    //             console.log('error is' + error);
    //             this.setState({ loading: false });
    //         });
    // };

    keranjang = () => {
        const { jumlah } = this.state;
        const { item } = this.props.route.params;
        const url = `https://lava-store.herokuapp.com/api/order/${item.id}`;
        this.setState({ loading: true });
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ jumlah_barang: jumlah }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.state.token}`,
            },
        })
            .then((res) => res.json())
            .then((resjson) => {
                console.log(resjson);
                const { status } = resjson;
                if (status == 'Success') {
                    this.setState({ loading: false });
                    this.props.navigation.replace('Tab', { screen: 'Transaksi' });
                    alert('berhasil memesan')

                } else {
                    console.log('ini datanya', item);
                    console.log('ini error');
                    this.setState({ loading: false });
                }
            })
            .catch((err) => console.log('Ada kesalahan. ' + err));
    };

    kembali = () => {
        this.props.navigation.navigate('Tab')
    }
    jumlah = () => {
        this.setState({ jumlah: this.state.jumlah + 1 });
    };
    kurang = () => {
        this.setState({ jumlah: this.state.jumlah - 1 });
    };


    render() {

        const { item } = this.props.route.params;

        return (
            <View style={{ flex: 1 }}>

                <LinearGradient
                    colors={['deepskyblue', 'blue']}
                    style={styles.header}>

                    <TouchableOpacity
                        style={{ width: '12%', padding: 7 }}
                        onPress={() => this.kembali()}>

                        <Icon name='arrow-left' size={30} color='white' />

                    </TouchableOpacity>

                    <View>

                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> Detail Barang </Text>

                    </View>

                </LinearGradient>

                <ScrollView>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: item.image }}
                            style={{ height: 200, width: '100%', }}
                        />
                    </TouchableOpacity>

                    <View style={{ paddingBottom: 20, backgroundColor: 'white', elevation: 5, marginBottom: 5 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 20 }}>  {item.name}</Text>

                        <Text>  {"Rp." + item.price}</Text>

                        <TouchableOpacity
                            onPress={() => this.setState({ modal: true })}
                            style={{ position: 'absolute', right: 10, bottom: 10 }}>

                            <Icon name='heart' size={20} color='red' />

                        </TouchableOpacity>

                    </View>

                    <View style={{ padding: 5, backgroundColor: 'white', elevation: 5, marginBottom: 5 }}>

                        <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 20 }}>Stock</Text>

                        <Text>{item.status}</Text>

                    </View>

                    <View style={{ padding: 5, backgroundColor: 'white', elevation: 5, marginBottom: 5 }}>

                        <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 20 }}>Deskripsi</Text>

                        <Text>{item.description}</Text>

                    </View>

                </ScrollView>

                <Modal
                    ModalSlideFromBottomIOS={true}
                    animationType="none"
                    transparent={true}
                    visible={this.state.modal}
                    onRequestClose={() => this.setState({ modal: false })}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                        }}>
                        <View style={{
                            width: '100%',
                            backgroundColor: 'white',
                            borderRadius: 5,
                            padding: 5,
                        }}>

                            <TouchableOpacity
                                onPress={() => this.setState({ modal: false })}
                                style={{ alignItems: 'flex-end', marginBottom: 5 }}>

                                <Icon name='x-square' size={30} />
                            </TouchableOpacity>

                            <View>

                                <Text style={{ fontSize: 17, color: 'blue' }}>
                                    Atur jumlah
                                        </Text>

                                <View style={{ flexDirection: 'row', marginBottom: 50 }}>

                                    <View style={{ marginTop: 10, borderWidth: 1 }}>

                                        <Icon
                                            name="minus"
                                            size={25}
                                            onPress={() => this.kurang()}
                                        />
                                    </View>

                                    <View style={{ marginTop: 10, borderWidth: 1, width: '20%', justifyContent: 'center', alignItems: 'center' }}>

                                        <Text>{this.state.jumlah}</Text>

                                    </View>

                                    <View style={{ marginTop: 10, borderWidth: 1 }}>
                                        <Icon
                                            name="plus"
                                            size={25}
                                            onPress={() => this.jumlah()}
                                        />
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>

                                    <View style={{ alignItems: 'flex-end', width: '50%', padding: 5 }}>

                                        <Text>Total Harga</Text>

                                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                                            Rp. {this.props.route.params.item.price * this.state.jumlah}
                                        </Text>

                                    </View>


                                    <TouchableOpacity
                                        onPress={() => this.keranjang()}
                                        style={{ backgroundColor: 'blue', width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                                        {this.state.loading ? (
                                            <ActivityIndicator size={25} color="white" />
                                        ) : (
                                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
                                                    Beli Sekarang
                                                </Text>
                                            )}

                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>


                    </View>
                </Modal>

                <View>
                    <View>
                        <View
                            style={{
                                flexDirection: 'row', height: 50, alignItems: 'center', padding: 5, backgroundColor: 'deepskyblue'
                            }}
                        >

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('DetailChat', { item: item })}
                                style={{ width: '50%', alignItems: 'center' }}>
                                <Icon name="message-square" size={30} />
                                <Text>chat </Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ width: '50%', alignItems: 'center' }}
                                onPress={() => this.setState({ modal: true })}>
                                <Icon name="shopping-cart" size={30} />
                                <Text>Keranjang</Text>

                            </TouchableOpacity>



                        </View>
                    </View>
                </View>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        width: '100%',
        backgroundColor: '#707070',
        elevation: 5
    },
    seacrhBox: {
        flexDirection: 'row',
        width: '85%',
        height: 35,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        paddingHorizontal: 5
    },
    katagoriBox: {
        padding: 1,
        margin: 6,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 100,
        elevation: 5,
    },
    katagoriIcon: {
        width: 50,
        height: 50,
    }
})