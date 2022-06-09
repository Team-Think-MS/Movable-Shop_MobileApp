import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingleProduct from "../screens/SingleProduct";
import ProductScreen from "../screens/ProductScreen";


const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='ProductScreen'
                component={ProductScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='SingleProduct'
                component={SingleProduct}
                options={{
                    headerShown: true,
                }}
            />

        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />;
}