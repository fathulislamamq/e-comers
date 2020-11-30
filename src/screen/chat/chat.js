import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Chat extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['pink', 'purple']}
                    style={{ height: 50, backgroundColor: '#bdbdbdd4', justifyContent: 'center', padding: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}> Chat </Text>
                </LinearGradient>

                <ScrollView>

                    <View>

                        <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('DetailChat')}
                        style={{ flexDirection: 'row', height: 100, backgroundColor: 'white', marginBottom: 5, elevation: 5 }}>

                            <View style={{ backgroundColor: 'pink', width: '25%', borderRadius: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}>

                                <Text> gambar </Text>

                            </View>

                            <View style={{ width: '80%', padding: 5, backgroundColor: 'white' }}>

                                <Text style={{ fontWeight: 'bold', marginBottom: 15,fontSize:20 }}> Nama Pengguna </Text>

                                <Text> pesan terakhir </Text>

                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('DetailChat')}
                        style={{ flexDirection: 'row', height: 100, backgroundColor: 'white', marginBottom: 5, elevation: 5 }}>

                            <View style={{ backgroundColor: 'pink', width: '25%', borderRadius: 50, justifyContent: 'center', alignItems: 'center', margin: 5 }}>

                                <Text> gambar </Text>

                            </View>

                            <View style={{ width: '80%', padding: 5, backgroundColor: 'white' }}>

                                <Text style={{ fontWeight: 'bold', marginBottom: 15,fontSize:20 }}> Nama Pengguna </Text>

                                <Text> pesan terakhir </Text>

                            </View>

                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </View>


        )
    }
}
