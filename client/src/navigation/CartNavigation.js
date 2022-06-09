import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen';
import Checkout from '../screens/Checkout'

const Stack=createNativeStackNavigator();

const CartNavigation = () => {
  return (
      <Stack.Navigator  >
          <Stack.Screen
          name='CartScreen'
          component={CartScreen}
          options={{
            headerShown: false,
        }}
           />
           <Stack.Screen
           name='Checkout'
           component={Checkout}
           options={{
            headerShown: true,
        }}
           
           />
      </Stack.Navigator>
  
  )
}

export default CartNavigation;