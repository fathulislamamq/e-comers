import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Feather'
import { set } from 'react-native-reanimated';

export default class CheckOut extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            token: '',
            loading: false
        };
    }

    bayar = () => {

        const url = 'https://lava-store.herokuapp.com/api/konfirmasi';
        this.setState({ loading: true })

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'aplication/json',
                Authorization: `Bearer ${this.state.token}`,
            },

        })

            .then((respon) => respon.json())
            .then((resJson) => {
                this.setState({ loading: false });
                this.setState({ data: resJson.data.order_detail })
                this.props.navigation.navigate('Selesai')
                alert('Pesanan Anda selesai diboking, silahkan ambil ditoko kami ')
            })
            .catch((error) => {
                console.log('error is' + error);
            });
    };

    keranjang = () => {
        const url = 'https://lava-store.herokuapp.com/api/checkout';
        this.setState({ loading: true })

        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'aplication/json',
                Authorization: `Bearer ${this.state.token}`,
            },
        })

            .then((respon) => respon.json())
            .then((resJson) => {
                console.log(resJson.data.order_detail);
                this.setState({ data: resJson.data.order_detail });
                console.log('keranjang',this.state.data[0].id);
            })
            .catch((error) => {
                console.log('error is ' + error);
            });
    };

    delete = (id) => {
        const idku=id
        const url = `https://lava-store.herokuapp.com/api/checkout/${idku}`;
        console.log('id dalate',idku);
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
                console.log('hasil delet',resJson);
                this.keranjang();
                this.setState({ data: resJson.data[0].id })
                alert('berhasil hapus barang')
            })
            .catch((error) => {
                console.log('error delete' + error);
            });
    };

    componentDidMount() {
        AsyncStorage.getItem('token').then((token) => {
            if (token != null) {
                this.setState({ token: token }, () => {
                    this.keranjang();
                });
            } else {
                console.log('token tidak ada');
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 5 }}>

                <ScrollView>

                    {this.state.data == null ? (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text> Data Tidak Ditemukan </Text>
                        </View>
                    ) : (
                            <View>
                                {this.state.data.map((value, key) => {
                                    return (


                                        <View
                                            key={key}
                                            style={{ flexDirection: 'row', height: 100, backgroundColor: 'white', marginBottom: 5, elevation: 5 }}>

                                            <View style={{ backgroundColor: 'deepskyblue', width: '25%', borderRadius: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}>

                                                <Image
                                                    source={{ uri: value.image }}
                                                    style={{ width: '100%', height: '100%' }}
                                                />

                                            </View>

                                            <View style={{ width: '50%', padding: 5, backgroundColor: 'white' }}>

                                                <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 20 }}> {value.product.name} </Text>

                                                <Text>Jumlah : {value.jumlah_barang}</Text>
                                                <Text>harga : {value.harga}</Text>

                                            </View>

                                            <View style={{ width: '25%', padding: 5, backgroundColor: 'white' }}>

                                                <TouchableOpacity
                                                    onPress={() => this.delete(value.id)}
                                                    style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', height: '50%', margin: 1 }}>

                                                    <Icon name='trash-2' size={20} color='white' />

                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    onPress={() => this.bayar()}
                                                    style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: '50%', margin: 1 }}>

                                                    <Text style={{ color: 'white' }}>bayar</Text>

                                                </TouchableOpacity>


                                            </View>

                                        </View>
                                    );
                                })}
                            </View>
                        )}

                </ScrollView>

            </View>
        )
    }
}
