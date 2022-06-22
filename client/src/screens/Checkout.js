import { View, Text, ScrollView,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Body, Container, Left, ListItem } from 'native-base';

const Checkout = (props) => {
 
  return (
    <Container style={styles.container}>
      <View  style={{ flex: 1,marginBottom:10}}>
      
        {props.cartItems.map((data)=>{
          return(
            <View style={{flex:1,backgroundColor:'white'}}>
              
           
             
              
            </View>
          )
        })}

     
    </View>
    </Container>
    
  )
}
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
      cartItems: cartItems,
  }
}




const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingTop:25,
  },
  body:{
    margin:10,
    alignItems:'center',
    flexDirection:'row',
    height:20,
    backgroundColor:'white'
  },
  
 list:{
   alignItems:'center',
   backgroundColor:'white',
   justifyContent:'center',
   borderColor:'gray',
   borderWidth:0.5,
   marginBottom:10,
   borderRadius:10,
   marginHorizontal:15,
   height:50,
   flex:1,

 },
});

export default connect(mapStateToProps)(Checkout)