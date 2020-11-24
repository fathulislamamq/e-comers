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
            <Top.Screen name='Pembeli' component={Pembeli} />
            <Top.Screen name='Penjual' component={Penjual} />
        </Top.Navigator>
    )
}
export default TabAkun