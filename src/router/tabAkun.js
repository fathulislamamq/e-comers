import * as React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Pembeli from '../screen/akun/pembeli'
import Penjual from '../screen/akun/penjual'

const Top = createMaterialTopTabNavigator()

function TabAkun(){
    return(
        <Top.Navigator
        tabBarOptions={{
            indicatorStyle:{backgroundColor:'grey'}
        }}>
            <Top.Screen name='Profil' component={Pembeli} />
            <Top.Screen name='Toko' component={Penjual} />
        </Top.Navigator>
    )
}
export default TabAkun