import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Rating from '../components/Rating'

const CustomerReviews = (props) => {
    const [item,setItem]=useState(props.route.params.item);
  return (
    <View  style={{backgroundColor:'white'}}>
        <View >
      <Text style={styles.Text}>{item.rating}</Text>
      <Text style={styles.smallText}>Out of 5</Text>
    </View>
   
    </View>
  
  )
}

export default CustomerReviews

const styles = StyleSheet.create({
  Text:{
    paddingLeft:30,
    paddingTop:30,
    fontSize:90,
    color:'#65686e',
    fontFamily: "sans-serif-medium",
  },
  smallText:{
    fontFamily: "sans-serif-medium",
    fontSize:25,
    paddingLeft:35,
    color:'#65686e'
  },
  
})