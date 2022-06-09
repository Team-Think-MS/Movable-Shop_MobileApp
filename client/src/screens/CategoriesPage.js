import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const CategoriesPage = (props) => {
    const [item,setItem]=useState(props.route.params.item);
  return (
    <View style={{paddingTop:50,flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{item.name}</Text>
    </View>
  )
}

export default CategoriesPage

const styles = StyleSheet.create({})