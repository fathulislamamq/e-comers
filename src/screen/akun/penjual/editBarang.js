import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class EditBarang extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            token: '',
            jumlah: 0,
            modal: false,
        };

        AsyncStorage.getItem('token').then((value) => {
            if (value != '') {
                this.setState({ token: value, data: this.props.route.params.item });
                console.log(this.state.data);
            } else {
                console.log('token tidak ada');
            }
        });
    }
    jumlah = () => {
        this.setState({ jumlah: this.state.jumlah + 1 });
    };
    kurang = () => {
        this.setState({ jumlah: this.state.jumlah - 1 });
    };
    render() {
        return (
            <View style={{ flex: 1 }}>

                <LinearGradient
                    colors={['pink', 'purple']}
                    style={styles.header}>

                    <TouchableOpacity style={{ width: '15%', padding: 5 }}>

                        <Icon name='arrow-left' size={30} color='white' />

                    </TouchableOpacity>

                    <View>

                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Pengaturan Barang </Text>

                    </View>

                </LinearGradient>

                <ScrollView>

                    <View>
                        <Image
                            source={{ uri: this.props.route.params.item.image }}
                            style={{ height: 200, width: '100%', }}
                        />
                    </View>

                    <View style={{ padding: 5, backgroundColor: 'white', elevation: 5, marginBottom: 5 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 20 }}>  {this.props.route.params.item.name}</Text>
                        <Text>  {"Rp." + this.props.route.params.item.price}</Text>

                        <TouchableOpacity style={{ position: 'absolute', right: 5, bottom: 5 }}>

                            <Icon name='heart' size={20} color='red' />

                        </TouchableOpacity>

                    </View>
                    <View style={{ padding: 5, backgroundColor: 'white', elevation: 5 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 20 }}>Deskripsi</Text>
                        <Text>{this.props.route.params.item.description}</Text>
                    </View>
                </ScrollView>


            </View>
        )
    }
}
