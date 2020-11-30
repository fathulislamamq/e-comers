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
            scrollEnabled:true,
            indicatorStyle:{backgroundColor:'grey'}
        }}>
            <Top.Screen name='Keranjang' component={CheckOut} />
            <Top.Screen name='Belum bayar' component={BelumDibayar} />
            <Top.Screen name='Dikemas' component={Dikemas} />
            <Top.Screen name='Dikirim' component={Dikirim} />
            <Top.Screen name='Selesai' component={PesananSelesai} />

        </Top.Navigator>
    )
}
export default TabTransaksi