import * as React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import CheckOut from '../screen/transaksi/topTranssaksi/checkOut'
import BelumDibayar from '../screen/transaksi/topTranssaksi/belumDibayar'
import Dikemas from '../screen/transaksi/topTranssaksi/dikemas'
import Dikirim from '../screen/transaksi/topTranssaksi/dikirim'
import PesananSelesai from '../screen/transaksi/topTranssaksi/pesananSelesai'

const Top = createMaterialTopTabNavigator()

function TabTransaksi(){
    return(
        <Top.Navigator
        tabBarOptions={{
            indicatorStyle:{backgroundColor:'blue'}
        }}>
            <Top.Screen name='Diproses' component={CheckOut} />
            <Top.Screen name='Selesai' component={PesananSelesai} />

        </Top.Navigator>
    )
}
export default TabTransaksi