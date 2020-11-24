import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Transaksi extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                colors={['pink','#707070']}
                style={{ height: 50,backgroundColor:'#bdbdbdd4',justifyContent:'center',padding:5 }}>
                    <Text style={{ fontWeight:'bold',fontSize:18,color:'white' }}> Transaksi </Text>
                </LinearGradient>
            </View>
        )
    }
}
