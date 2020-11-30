import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

export default class PesananSelesai extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 5 }}>

                <ScrollView>

                    <View>

                        <TouchableOpacity style={{ flexDirection: 'row', height: 80, marginBottom: 5, elevation: 5 }}>

                            <View style={{ backgroundColor: 'pink', width: '20%' }}>

                                <Text> gambar </Text>

                            </View>

                            <View style={{ width: '80%', padding: 5, backgroundColor: 'white' }}>

                                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}> Nama Barang </Text>

                                <Text> harga </Text>

                                <Text style={{ fontWeight: 'bold' }}> Detail </Text>

                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', height: 80, marginBottom: 5, elevation: 5 }}>

                            <View style={{ backgroundColor: 'pink', width: '20%' }}>

                                <Text> gambar </Text>

                            </View>

                            <View style={{ width: '80%', padding: 5, backgroundColor: 'white' }}>

                                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}> Nama Barang </Text>

                                <Text> harga </Text>

                                <Text style={{ fontWeight: 'bold' }}> Detail </Text>

                            </View>

                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>
        )
    }
}
