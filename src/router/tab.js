import * as React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screen/home/home'
import Transaksi from '../screen/transaksi/transaksi'
import Akun from '../screen/akun/akun'
import Chat from '../screen/chat/chat'


const Buttom = createMaterialBottomTabNavigator()

function Tab() {
    return (
        <Buttom.Navigator
            inactiveColor='black'
            barStyle={{ backgroundColor: '#707070' }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let sizeIcon;
                    let colorCustom;
                    let labelCustom;
                    if (route.name === 'Home') {
                        iconName = focused ? 'md-home' : 'md-home'
                        sizeIcon = size
                        colorCustom = focused?'#0aff0a':'black'
                    } else if (route.name === 'Chat') {
                        iconName = focused ? 'md-chatbubbles' : 'md-chatbubbles'
                        sizeIcon = size
                        colorCustom = focused?'#1fa2ff':'black'
                    } else if (route.name === 'Transaksi') {
                        iconName = focused ? 'md-card' : 'md-card'
                        sizeIcon = size
                        colorCustom = focused?'#fff41a':'black'
                    } else if (route.name === 'Akun') {
                        iconName = focused ? 'md-person' : 'md-person'
                        sizeIcon = size
                        colorCustom = focused?'#ff1414':'black'
                    }
                    return <Icon name={iconName} size={20} color={colorCustom} label={labelCustom} />
                }
            })}
            
        >
            <Buttom.Screen name='Home' component={Home} />
            <Buttom.Screen name='Chat' component={Chat} />
            <Buttom.Screen name='Transaksi' component={Transaksi} />
            <Buttom.Screen name='Akun' component={Akun} />
        </Buttom.Navigator>
    )
}

export default Tab