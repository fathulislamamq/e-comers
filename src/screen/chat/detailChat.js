import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'

export default class DetailChat extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['pink', 'purple']}
                    style={styles.header}>

                    <TouchableOpacity
                        style={{ width: '12%', padding: 7 }}
                        onPress={() => this.props.navigation.navigate('Tab')}>

                        <Icon name='arrow-left' size={30} color='white' />

                    </TouchableOpacity>

                    <View style={{ width: '14%', height: 50, borderRadius: 50, backgroundColor: 'white', margin: 2.5 }}>

                    </View>

                    <View>

                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> Nama Pengguna </Text>

                    </View>

                </LinearGradient>

                <ScrollView style={{ padding: 5 }}>


                    <View style={{ marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'purple' }}>

                                <Text style={{ color: 'white' }}> Guten Morgen </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ alignItems: 'flex-end', marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'pink' }}>

                                <Text> Guten Morgen </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'purple' }}>

                                <Text style={{ color: 'white' }}> holla </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ alignItems: 'flex-end', marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'pink' }}>

                                <Text> holla </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'purple' }}>

                                <Text style={{ color: 'white' }}> おはようございます </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ alignItems: 'flex-end', marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'pink' }}>

                                <Text> おはようございます </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'purple' }}>

                                <Text style={{ color: 'white' }}> Selamat Pagi </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ alignItems: 'flex-end', marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'pink' }}>

                                <Text> Selamat Pagi </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'purple' }}>

                                <Text style={{ color: 'white' }}> صباح الخير </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ alignItems: 'flex-end', marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'pink' }}>

                                <Text> صباح النور </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'purple' }}>

                                <Text style={{ color: 'white' }}> Good Morning </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ alignItems: 'flex-end', marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'pink' }}>

                                <Text> Good Morning </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ alignItems: 'flex-end', marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'pink' }}>

                                <Text> Доброе утро </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>

                            <View style={{ padding: 10, backgroundColor: 'purple' }}>

                                <Text style={{ color: 'white' }}> Доброе утро </Text>

                            </View>

                        </View>

                    </View>

                </ScrollView>

                    <View
                        style={styles.header}>

                        <TouchableOpacity
                            style={styles.seacrhBox}>

                            <TextInput
                                placeholder='ketik pesan'
                                multiline={true}
                                onChangeText={(text) => this.setState({ input: text })}
                                style={{ width: '100%' }} />


                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: '15%', padding: 5 }}>

                            <Icon name='send' size={30} color='white' />

                        </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#707070',
        elevation: 5
    },
    seacrhBox: {
        width: '85%',
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