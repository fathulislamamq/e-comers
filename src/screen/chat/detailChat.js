import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, TextInput, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Pusher from 'pusher-js/react-native';

export default class DetailChat extends Component {

  // state = {
  //   data: [],
  //   input: '',
  //   saveButton: false,
  // };
  // componentDidMount() {
  //   AsyncStorage.getItem('data')
  //     .then((value) => {
  //       if (value != null) {
  //         this.setState({ data: JSON.parse(value) });
  //       }
  //     })
  //     .catch((er) => console.log(er));
  // }

  // send = () => {
  //   const data = this.state.input;
  //   this.state.data.push(data);
  //   this.setState({ data: this.state.data, input: ''});
  // };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      input: '',
      token: '',
      id: '',
      token: '',
      loading: false,
    };
  }

  message = () => {
    const { input } = this.state;
    const url = `https://lava-store.herokuapp.com/api/message/${this.props.route.params.item}`;
    this.setState({ loading: true });
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ message: input }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((res) => res.json())
      .then((resjson) => {
        console.log(resjson);
        const { status } = resjson;
        if (status == 'success') {
          this.setState({ loading: false });
        } else {
          console.log('error');
          this.setState({ loading: false });
        }
      })
      .catch((err) => console.log('Terjadi kesalahan. ' + err));
  };

  add = () => {
    const url = `https://lava-store.herokuapp.com/api/message/${this.props.route.params.item}`;
    this.setState({ loading: true });
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((respon) => respon.json())
      .then((resJson) => {
        this.setState({
          data: resJson.message,
          id: resJson.user.id,
          loading: false,
        });
        console.log(this.state.data[0].from);
      })
      .catch((error) => {
        console.log('error is ' + error);
        this.setState({ loading: false });
      });
  };
  componentDidMount() {
    AsyncStorage.getItem('token').then((token) => {
      if (token != null) {
        this.setState({ token: token });
        console.log('token ada');
        this.add();
      } else {
        console.log('token tidak ada');
      }
    });
    Pusher.logToConsole = true;

    var pusher = new Pusher('c01e3f5990542d7306ec', {
      cluster: 'ap1',
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      console.log('ini dari pusher.');
      // this.setState({data: data.data});
      // alert(JSON.stringify(data));
      this.add();
    });
  }

  render() {
    return (
      // 
      <View style={{ flex: 1 }}>

        <LinearGradient
          colors={['deepskyblue', 'blue']}
          style={styles.header}>

          <TouchableOpacity
            style={{ width: '12%', padding: 7 }}
            onPress={() => this.props.navigation.navigate('DetailBarang')}>

            <Icon name='arrow-left' size={30} color='white' />

          </TouchableOpacity>

            <View style={{ backgroundColor: 'white',height:45,width:45,borderRadius:50 }}>

            </View>

          <View>

            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> Nama Pengguna </Text>

          </View>

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
            <View style={{ flex: 1 }}>
              <ScrollView>
                <View>
                  {this.state.data.length == 0 ? (
                    <View>
                      <ActivityIndicator color="red" size={30} />
                    </View>
                  ) : (
                      <>
                        {this.state.data.map((value, key) => {
                          return (
                            <View key={key}>
                              {value.from == this.props.route.params.item ? (
                                <View style={styles.getText}>
                                  <Text>{value.message}</Text>
                                </View>
                              ) : (
                                  <View style={styles.textSend}>
                                    <Text>{value.message}</Text>
                                  </View>
                                )}
                            </View>
                          );
                        })}
                      </>
                    )}
                </View>
              </ScrollView>
              <View style={{
                flexDirection: 'row', height: 50, alignItems: 'center', padding: 5, backgroundColor: 'deepskyblue'
              }}>
                <View style={styles.textMasuk}>
                  <TextInput
                    style={{ width: '85%' }}
                    placeholder=" Pesan "
                    value={this.state.input}
                    onChangeText={(text) => this.setState({ input: text })}
                  />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', margin: 5 }}>
                  <Icon name="send" size={30} onPress={() => this.message()} />
                </View>
              </View>
            </View>
          )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Box: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: '100%',
    backgroundColor: '#707070',
    elevation: 5,
  },
  Tittel: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  textSend: {
    backgroundColor: '#4CC417',
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
    margin: 5,
    alignSelf: 'flex-end',
    maxWidth: '85%',
  },
  boxSend: {
    width: '100%',
    flexDirection: 'row',
    elevation: 5,
    backgroundColor: '#82CAFA',
    justifyContent: 'center',
  },
  textMasuk: {
    width: '85%',
    margin: 1,
    backgroundColor: 'white',
  },
  getText: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    margin: 5,
    alignSelf: 'flex-start',
    maxWidth: '85%',
  },
  right: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  loginRegister: {
    width: '90%',
    height: 190,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 90,
    marginLeft: 18,
    elevation: 10,
  },
  BoxImage: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    top: 50,
    borderWidth: 7,
    borderColor: '#3462f9',
    marginTop: -95,
    borderWidth: 7,
    margin: 5,
  },
  posisenLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  boxLoginRegister: {
    width: '40%',
    height: 50,
    margin: 5,
    borderRadius: 20,
  },
});