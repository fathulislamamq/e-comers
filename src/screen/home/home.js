import React, { Component } from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default class HalamanB extends Component {

    constructor() {
        super()
        this.state = {
            token: '',
            data: [],
            input: '',
            loading: false
        }
    }


    lihat = () => {
        const url = 'http://lava-store.herokuapp.com/api/product'
        this.setState({ loading: true });

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
                console.log(resJson[0].data);
                this.setState({ data: resJson[0].data, loading: false })
            })
            .catch((error) => {
                console.log('errornya adalah: ' + error);
                this.setState({ loading: false })
            })
    }

    componentDidMount() {
        AsyncStorage.getItem('token').then((token) => {
            if (token != null) {
                this.setState({ token: token }, () => {
                    this.lihat()

                })
            } else {
                console.log('gak ada token');
            }
        })
    }



    render() {
        return (
            <View style={{ flex: 1 }}>

                <LinearGradient
                    colors={['pink', 'purple']}
                    style={styles.header}>

                    <TouchableOpacity
                        style={styles.seacrhBox}>

                        <View style={{ width: '15%' }}>
                            <Icon name='ios-search' size={20} />
                        </View>

                        <TextInput
                            placeholder='cari barang'
                            value={this.state.input}
                            onChangeText={(text) => this.setState({ input: text })}
                            style={{ width: '85%' }} />


                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '15%', padding: 5 }}>

                        <Icon name='md-cart' size={30} color='white' />

                    </TouchableOpacity>

                </LinearGradient>

                <View style={{ flex: 1, paddingHorizontal: 5 }}>

                    <ScrollView>

                        <Swiper
                            autoplay={true}
                            loop={true}
                            height={200}>

                            <Image
                                style={styles.swapImage}
                                source={{ uri: 'https://c1.neweggimages.com/ProductImageCompressAll1280/34-235-471-V19.jpg' }}
                            />

                            <Image
                                style={styles.swapImage}
                                source={{ uri: 'https://images.pushsquare.com/a85845c28ceb8/ps5-console.original.jpg' }}
                            />

                            <Image
                                style={styles.swapImage}
                                source={{ uri: 'https://i.ytimg.com/vi/aVhHYmdRVPo/maxresdefault.jpg' }}
                            />

                            <Image
                                style={styles.swapImage}
                                source={{ uri: 'https://i2.wp.com/www.blessthisstuff.com/imagens/stuff/jyrobike.jpg' }}
                            />

                        </Swiper>

                        <View style={{ elevation: 5, borderRadius: 5, backgroundColor: '#ffffffdb', marginTop: 5 }}
                        >
                            <View
                                colors={['#1aaac7', '#c71ac4']}
                                style={{ height: 30, justifyContent: 'center', backgroundColor: 'grey', borderTopStartRadius: 5, borderTopRightRadius: 5, padding: 5 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Produk Populer</Text>

                            </View>

                            <ScrollView horizontal={true}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{
                                        padding: 1,
                                        margin: 6,
                                        padding: 6,
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        width: 150,
                                        height: 230,
                                        elevation: 5,
                                    }}>
                                        <View style={{ height: '85%' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    style={{ width: 125, height: 100, marginBottom: 20 }}
                                                    source={{ uri: ('http://i.ytimg.com/vi/vpUWSLxqg6g/maxresdefault.jpg') }} />
                                            </View>
                                            <Text style={{ fontWeight: 'bold' }}>Samsung Galaxy S4 16 GB</Text>
                                            <Text>Rp 450.000</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={{ backgroundColor: 'black', borderRadius: 5, width: 100, height: 30, padding: 5, }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>selengkapnya</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{
                                        padding: 1,
                                        margin: 6,
                                        padding: 6,
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        width: 150,
                                        height: 230,
                                        elevation: 5,
                                    }}>
                                        <View style={{ height: '85%' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                <Image
                                                    style={{ width: 125, height: 100, marginBottom: 20, resizeMode: 'cover' }}
                                                    source={{ uri: ('https://www.pcmacs.co.uk/wp-content/uploads/2016/08/s-l1600-1.jpg') }} />
                                            </View>
                                            <Text style={{ fontWeight: 'bold' }}>Samsung Galaxy J5
                                         8 GB</Text>
                                            <Text>Rp 640.000</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={{ backgroundColor: 'black', borderRadius: 5, width: 100, height: 30, padding: 5, }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>selengkapnya</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{
                                        padding: 1,
                                        margin: 6,
                                        padding: 6,
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        width: 150,
                                        height: 230,
                                        elevation: 5,
                                    }}>
                                        <View style={{ height: '85%' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    style={{ width: 125, height: 100, marginBottom: 20 }}
                                                    source={{ uri: ('http://i.ytimg.com/vi/vpUWSLxqg6g/maxresdefault.jpg') }} />
                                            </View>
                                            <Text style={{ fontWeight: 'bold' }}>Oppo F1s 16 GB</Text>
                                            <Text>Rp 980.000</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={{ backgroundColor: 'black', borderRadius: 5, width: 100, height: 30, padding: 5, }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>selengkapnya</Text>
                                        </TouchableOpacity>
                                    </View>


                                    <View style={{
                                        padding: 1,
                                        margin: 6,
                                        padding: 6,
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        width: 150,
                                        height: 230,
                                        elevation: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>

                                        <Icon name='md-arrow-forward' size={30} />

                                        <Text>selengkapnya</Text>
                                    </View>

                                </View>
                            </ScrollView>
                        </View>
                        <Text style={{ margin: 6, }}>Bingung mau cari produk apa? Gak usah khawatir, kita kasih produk paling populer kita,ya</Text>

                        <View style={{ elevation: 5, borderRadius: 5, backgroundColor: '#ffffffdb', marginTop: 5 }}
                        >

                            <View
                                colors={['#1aaac7', '#c71ac4']}
                                style={{ height: 30, justifyContent: 'center', backgroundColor: 'grey', borderTopStartRadius: 5, borderTopRightRadius: 5, padding: 5 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Brand Terlaris</Text>


                            </View>


                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity style={styles.katagoriBox}>
                                    <Image
                                        style={styles.katagoriIcon}
                                        source={require('../../assets/icon/Iphone.png')} />
                                    <Text>Semua</Text>
                                    <Text>Handphone</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.katagoriBox}>
                                    <Image
                                        style={styles.katagoriIcon}
                                        source={require('../../assets/icon/samsung.png')} />
                                    <Text>Samsung</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.katagoriBox}>
                                    <Image
                                        style={styles.katagoriIcon}
                                        source={require('../../assets/icon/apple.png')} />
                                    <Text>Apple</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity style={styles.katagoriBox}>
                                    <Image
                                        style={styles.katagoriIcon}
                                        source={require('../../assets/icon/oppo.png')} />
                                    <Text>Oppo</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.katagoriBox}>
                                    <Image
                                        style={styles.katagoriIcon}
                                        source={require('../../assets/icon/vivo.png')} />
                                    <Text>Vivo</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.katagoriBox}>
                                    <Image
                                        style={styles.katagoriIcon}
                                        source={require('../../assets/icon/mi.png')} />
                                    <Text>Xiomi</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={{ margin: 6, }}>Temukan kumpulan produk menarik dari berbagai brand yang ada di Lava store.</Text>

                        <View style={{ elevation: 5, borderRadius: 5, backgroundColor: '#ffffffdb', marginTop: 5 }}
                        >
                            <View
                                colors={['#1aaac7', '#c71ac4']}
                                style={{ height: 30, justifyContent: 'center', backgroundColor: 'grey', borderTopStartRadius: 5, borderTopRightRadius: 5, padding: 5 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Produk Terbaru</Text>

                            </View>

                            <ScrollView horizontal={true}>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{
                                        padding: 1,
                                        margin: 6,
                                        padding: 6,
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        width: 150,
                                        height: 230,
                                        elevation: 5,
                                    }}>
                                        <View style={{ height: '85%' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    style={{ width: 125, height: 100, marginBottom: 20 }}
                                                    source={{ uri: ('https://androidgreek.com/wp-content/uploads/2019/07/Vivo-S1-Phone.jpg') }} />
                                            </View>
                                            <Text style={{ fontWeight: 'bold' }}>Vivo S1 128 GB</Text>
                                            <Text>Rp 2.410.000</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={{ backgroundColor: 'black', borderRadius: 5, width: 100, height: 30, padding: 5, }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>selengkapnya</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{
                                        padding: 1,
                                        margin: 6,
                                        padding: 6,
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        width: 150,
                                        height: 230,
                                        elevation: 5,
                                    }}>
                                        <View style={{ height: '85%' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    style={{ width: 125, height: 100, marginBottom: 20 }}
                                                    source={{ uri: ('https://wooki.com/wp-content/uploads/2014/09/iphone-6-silver1.jpg') }} />
                                            </View>
                                            <Text style={{ fontWeight: 'bold' }}>Iphone 6+ 128 GB</Text>
                                            <Text>Rp 3.290.000</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={{ backgroundColor: 'black', borderRadius: 5, width: 100, height: 30, padding: 5, }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>selengkapnya</Text>
                                        </TouchableOpacity>
                                    </View>


                                    <TouchableOpacity style={{
                                        padding: 1,
                                        margin: 6,
                                        padding: 6,
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        width: 150,
                                        height: 230,
                                        elevation: 5,
                                    }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 125, height: 100, marginBottom: 20, resizeMode: 'cover' }}
                                                source={{ uri: ('https://www.techoffside.com/wp-content/uploads/2019/04/Beat-Saber-All-In-One-Pack-750x375.jpg') }} />
                                        </View>
                                        <Text style={{ fontWeight: 'bold' }}>Playstation Vr Beat Saber All In Pack</Text>
                                        <Text>Rp15.943.000</Text>
                                    </TouchableOpacity>

                                </View>
                            </ScrollView>
                        </View>
                        <Text style={{ margin: 6, }}>Produk-produk yang baru masuk di Lava store, siapa tau kamu suka</Text>

                        <View style={{ flexWrap: 'wrap', flexDirection: 'row', }}>

                            {this.state.data.map((value, key) => {
                                return (
                                    <View key={key}>

                                        <View
                                            style={{ backgroundColor: 'white', width: 165, height: 270, margin: 5 }}>

                                            <View style={{ height: '50%', width: '100%', backgroundColor: 'pink', alignItems: 'center' }}>
                                                <Image
                                                    source={{ uri: value.image }}
                                                    style={{ height: '100%', width: '100%' }}
                                                />
                                            </View>

                                            <View style={{ padding: 5, height: '25%' }}>
                                                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{value.name}</Text>
                                                <Text>{'Rp ' + value.price}</Text>
                                            </View>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.props.navigation.navigate('DetailBarang', { item: value })
                                                }}
                                                style={{ backgroundColor: 'black', borderRadius: 5, width: 100, height: 30, padding: 5, margin: 5 }}>
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>selengkapnya</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ position: 'absolute', right: 5, bottom: 5 }}>

                                                <Icon name='heart' size={20} color='red' />

                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    swapImage: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
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