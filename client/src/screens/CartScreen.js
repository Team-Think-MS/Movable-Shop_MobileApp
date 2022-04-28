import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {connect} from "react-redux"

const CartScreen = (props) => {
  const [item,setItem]=useState(props.route.params);
  return (
    <View style={{flex:1}}>
      {props.cartItems.map( x =>{
        return(
          <Text>{x.product.name}</Text>
          
        )
      })}
    </View>
  );
};

const mapStateToProps = (state)=>{
  const {cartItems} = state;
  return{
    cartItems:cartItems,
  }
}

export default connect(mapStateToProps,null)(CartScreen);

const styles = StyleSheet.create({});
