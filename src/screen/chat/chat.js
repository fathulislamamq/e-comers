import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Chat extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            token: '',
            loading: false,
        };
        AsyncStorage.getItem('token').then((token) => {
            if (token != null) {
                this.setState({ token: token });
                console.log('token ada');
                this.tambahKontak();
            } else {
                console.log('token tidak ada');
            }
        });
    }
    tambahKontak = () => {
        const url = 'https://lava-store.herokuapp.com/api/contact';
        this.setState({ loading: true });
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
                console.log(resJson);
                this.setState({ data: resJson.contact, loading: false });
            })
            .catch((error) => {
                console.log('error is' + error);
                this.setState({ loading: false });
            });
    };
    masuk = () => {
        this.props.navigation.navigate('Login')
    }
    daftar = () => {
        this.props.navigation.navigate('Signup')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['deepskyblue', 'blue']}
                    style={{ height: 50, backgroundColor: '#bdbdbdd4', justifyContent: 'center', padding: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}> Chat </Text>
                </LinearGradient>
                {this.state.token == '' ? (

                    <LinearGradient
                        colors={['deepskyblue', 'blue']}
                        style={{ height: 110, elevation: 5, alignItems: 'center', padding: 5, position: 'absolute' }}>

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
                        <>
                            {this.state.data == null ? (

                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <ActivityIndicator color="blue" size={30} />
                                </View>
                            ) : (
                                    <>
                                        {this.state.data.map((value, key) => {
                                            return (

                                                <View key={key}>
                                                    <ScrollView>
                                                        <TouchableOpacity
                                                            style={{ flexDirection: 'row', height: 100, backgroundColor: 'white', marginBottom: 5, elevation: 5 }}
                                                            onPress={() =>
                                                                this.props.navigation.navigate('DetailChat', {
                                                                    item: value.id,
                                                                })
                                                            }>
                                                            <>

                                                                {value.foto !== '' ? (
                                                                    <View style={{ backgroundColor: 'deepskyblue', width: '25%', borderRadius: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                                                                        <Image
                                                                            source={{ uri: value.image }}
                                                                            style={{ height: '100%', width: '100%', borderRadius: 50 }}
                                                                        />
                                                                    </View>
                                                                ) : (
                                                                        <View style={{ backgroundColor: 'deepskyblue', width: '25%', borderRadius: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}>

                                                                            //                             <Text> gambar </Text>

                                                                    //                         </View>
                                                                    )}

                                                            </>
                                                            <View style={{ fontWeight: 'bold', marginBottom: 15, fontSize: 20 }}>
                                                                <Text>{value.name}</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </ScrollView>
                                                </View>
                                            );
                                        })}
                                    </>
                                )}
                        </>
                    )}
            </View>
        );
    }
    // render() {
    //     return (
    //         <View style={{ flex: 1 }}>
    //             <LinearGradient
    //                 colors={['deepskyblue', 'blue']}
    //                 style={{ height: 50, backgroundColor: '#bdbdbdd4', justifyContent: 'center', padding: 5 }}>
    //                 <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}> Chat </Text>
    //             </LinearGradient>

    //             <ScrollView>

    //                 <View>

    //                     <TouchableOpacity 
    //                     onPress={()=>this.props.navigation.navigate('DetailChat')}
    //                     style={{ flexDirection: 'row', height: 100, backgroundColor: 'white', marginBottom: 5, elevation: 5 }}>

    //                         <View style={{ backgroundColor: 'deepskyblue', width: '25%', borderRadius: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}>

    //                             <Text> gambar </Text>

    //                         </View>

    //                         <View style={{ width: '80%', padding: 5, backgroundColor: 'white' }}>

    //                             <Text style={{ fontWeight: 'bold', marginBottom: 15,fontSize:20 }}> Nama Pengguna </Text>

    //                             <Text> pesan terakhir </Text>

    //                         </View>

    //                     </TouchableOpacity>

    //                     <TouchableOpacity 
    //                     onPress={()=>this.props.navigation.navigate('DetailChat')}
    //                     style={{ flexDirection: 'row', height: 100, backgroundColor: 'white', marginBottom: 5, elevation: 5 }}>

    //                         <View style={{ backgroundColor: 'deepskyblue', width: '25%', borderRadius: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}>

    //                             <Text> gambar </Text>

    //                         </View>

    //                         <View style={{ width: '80%', padding: 5, backgroundColor: 'white' }}>

    //                             <Text style={{ fontWeight: 'bold', marginBottom: 15,fontSize:20 }}> Nama Pengguna </Text>

    //                             <Text> pesan terakhir </Text>

    //                         </View>

    //                     </TouchableOpacity>

    //                 </View>

    //             </ScrollView>
    //         </View>


    //     )
    // }
}
