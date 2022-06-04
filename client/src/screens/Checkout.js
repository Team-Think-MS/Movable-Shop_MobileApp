import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Checkout = () => {
 const item=useState();
  return (
    <View>
      <Text>Checkout</Text>
      <Text>{item}</Text>
    </View>
  )
}

export default Checkout