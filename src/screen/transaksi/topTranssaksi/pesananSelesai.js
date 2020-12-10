import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity,Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class PesananSelesai extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            token: '',
            loading: false
        };
    }

    history = () => {
        const url = 'https://lava-store.herokuapp.com/api/history';
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
                console.log('ini resjson',resJson);
                this.setState({ data: resJson.data });
                console.log(this.state.data.id);
            })
            .catch((error) => {
                console.log('error is' + error);
            });
    };

    componentDidMount() {
        AsyncStorage.getItem('token').then((token) => {
            if (token != null) {
                this.setState({ token: token }, () => {
                    this.history();
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

                                                <Text style={{ fontWeight: 'bold', marginBottom: 15, fontSize: 20 }}> {value.name} </Text>

                                                <Text>Jumlah : {value.jumlah_barang}</Text>
                                                <Text>harga : {value.harga}</Text>
                                                

                                            </View>

                                            <View style={{ width: '25%', padding: 5, backgroundColor: 'white' }}>

                                            <Text style={{marginBottom:5}}>{value.tanggal}</Text>
                                            <Text>Kode Pesanan : </Text>
                                            <Text>{value.kode}</Text>

                                            </View>

                                        </View>
                                    );
                                })}
                            </View>
                        )}

                </ScrollView>

            </View>

            // <View style={{ flex: 1, padding: 5 }}>

            //     <ScrollView>

            //         <View>

            //             <TouchableOpacity style={{ flexDirection: 'row', height: 80, marginBottom: 5, elevation: 5 }}>

            //                 <View style={{ backgroundColor: 'pink', width: '20%' }}>

            //                     <Text> gambar </Text>

            //                 </View>

            //                 <View style={{ width: '80%', padding: 5, backgroundColor: 'white' }}>

            //                     <Text style={{ fontWeight: 'bold', marginBottom: 5 }}> Nama Barang </Text>

            //                     <Text> harga </Text>

            //                     <Text style={{ fontWeight: 'bold' }}> Detail </Text>

            //                 </View>

            //             </TouchableOpacity>

            //             <TouchableOpacity style={{ flexDirection: 'row', height: 80, marginBottom: 5, elevation: 5 }}>

            //                 <View style={{ backgroundColor: 'pink', width: '20%' }}>

            //                     <Text> gambar </Text>

            //                 </View>

            //                 <View style={{ width: '80%', padding: 5, backgroundColor: 'white' }}>

            //                     <Text style={{ fontWeight: 'bold', marginBottom: 5 }}> Nama Barang </Text>

            //                     <Text> harga </Text>

            //                     <Text style={{ fontWeight: 'bold' }}> Detail </Text>

            //                 </View>

            //             </TouchableOpacity>

            //         </View>

            //     </ScrollView>

            // </View>
        )
    }
}
