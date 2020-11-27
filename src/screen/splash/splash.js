import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class Splash extends Component {
    render() {

        setTimeout(() => {
            this.props.navigation.replace('Tab')
        }, 4000);

        return (
            <LinearGradient
                colors={['pink', 'purple']}
                style={{ flex: 1 }}>
                <View style={{ height: '90%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/image/tas_belanja_3d.png')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        <Text style={{ color: '#0aff0a' }}>La</Text>
                        <Text style={{ color: '#1fa2ff' }}>va</Text>
                        <Text style={{ color: '#fff41a' }}> Sto</Text>
                        <Text style={{ color: '#ff1414' }}>re</Text>
                    </Text>
                </View>
            </LinearGradient>
        )
    }
}

// #707070