import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'

export default class AlamatSaya extends Component {

    setAkun = () => {
        this.props.navigation.navigate('SetAkun')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <LinearGradient
                    colors={['pink', '#707070']}
                    style={{ flexDirection: 'row', height: 50, alignItems: 'center', backgroundColor: '#707070' }}>

                    <TouchableOpacity
                        onPress={() => this.setAkun()}
                        style={{ width: '15%' }}>
                        <Icon name='arrow-left' size={30} color='white' />
                    </TouchableOpacity>

                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Alamat Saya</Text>
                    </View>

                    <TouchableOpacity style={{ width: '10%' }}>
                        <Icon name='check' size={30} color='white' />
                    </TouchableOpacity>

                </LinearGradient>


                <View style={{ flex: 1, padding: 5 }}>

                    <ScrollView>

                        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'white', elevation: 5, marginVertical: 5, height: 40, alignItems: 'center', padding: 5 }}>

                            <View style={{ width: '93%' }}>
                                <Text>Tambah alamat baru</Text>
                            </View>

                            <View>
                                <Icon name='plus' size={20} />
                            </View>

                        </TouchableOpacity>

                    </ScrollView>
                </View>


            </View>
        )
    }
}