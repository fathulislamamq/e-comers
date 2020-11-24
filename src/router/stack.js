import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screen/splash/splash'
import Login from '../auth/login'
import Signup from '../auth/signup'
import Tab from './tab'
import TabAkun from './tabAkun'
import SetAkun from '../screen/akun/pengaturan/setAkun'
import UbahProfil from '../screen/akun/pengaturan/ubahProfil'
import AlamatSaya from '../screen/akun/pengaturan/alamatSaya'


const Stack = createStackNavigator()

Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                animationEnabled:false,
                headerShown:false}}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Tab' component={Tab} />
                {/* untuk pengaturan akun */}
                <Stack.Screen name='TabAkun' component={TabAkun} />
                <Stack.Screen name='SetAkun' component={SetAkun} />
                <Stack.Screen name='UbahProfil' component={UbahProfil} />
                <Stack.Screen name='AlamatSaya' component={AlamatSaya} />
                {/* untuk pengaturan auth */}
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation