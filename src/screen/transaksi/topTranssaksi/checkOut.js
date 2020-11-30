import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

export default class CheckOut extends Component {
    render() {
        return (
            <View style={{ flex: 1,padding:5 }}>

                <ScrollView>

                    <View>

                        <TouchableOpacity style={{ flexDirection: 'row', height: 80,marginBottom:5,elevation:5 }}>

                            <View style={{ backgroundColor: 'pink', width: '20%' }}>

                                <Text> gambar </Text>

                            </View>

                            <View style={{ width: '55%', padding: 5, backgroundColor: 'white' }}>

                                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}> Nama Barang </Text>

                                <Text> harga </Text>

                                <Text style={{ fontWeight: 'bold' }}> Detail </Text>

                            </View>

                            <View style={{ width: '25%' }}>

                                <TouchableOpacity style={{ backgroundColor: 'red', height: 40, justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style={{ color: 'white', fontWeight: 'bold' }}> hapus </Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={{ backgroundColor: 'purple', height: 40,justifyContent: 'center', alignItems: 'center', }}>

                                    <Text style={{ color: 'white', fontWeight: 'bold' }}> check out </Text>

                                </TouchableOpacity>


                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', height: 80,marginBottom:5,elevation:5 }}>

                            <View style={{ backgroundColor: 'pink', width: '20%' }}>

                                <Text> gambar </Text>

                            </View>

                            <View style={{ width: '55%', padding: 5, backgroundColor: 'white' }}>

                                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}> Nama Barang </Text>

                                <Text> harga </Text>

                                <Text style={{ fontWeight: 'bold' }}> Detail </Text>

                            </View>

                            <View style={{ width: '25%' }}>

                                <TouchableOpacity style={{ backgroundColor: 'red', height: 40, justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style={{ color: 'white', fontWeight: 'bold' }}> hapus </Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={{ backgroundColor: 'purple', height: 40,justifyContent: 'center', alignItems: 'center', }}>

                                    <Text style={{ color: 'white', fontWeight: 'bold' }}> check out </Text>

                                </TouchableOpacity>


                            </View>

                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>
        )
    }
}
