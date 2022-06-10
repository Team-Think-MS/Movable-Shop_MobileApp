import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Checkout = () => {
 const item=useState();
  return (
    <View  style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{paddingTop:25, alignSelf:'center',justifyContent:'center'}}>Checkout</Text>
     
    </View>
  )
}

export default Checkout