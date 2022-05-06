import React from 'react';
import {StyleSheet} from 'react-native';
import {Badge,Text} from 'native-base'
import { connect} from 'react-redux'

const CartIcon = (props)=>{
    return(
         <>
        {/**Check if the cart items are empty */}
        {props.cartItems.length ? (
            <Badge style={styles.badge}>
                <Text style={styles.text}>
                    {props.cartItems.length}

                </Text>
            </Badge>
        ):null}


    </>  
    )
 
};

const mapStateToProps = (state)=>{
    const {cartItems} = state;
    return{
      cartItems: cartItems,
    }
  }

  const styles =StyleSheet.create({
      badge:{
          width:25,
          position:'absolute',
          flex:1,
          alignItems:'center',
          alignContent:'center',
          top:-4,
          right:-15,
          justifyContent:'center',

      },
      text:{
          fontSize:12,
          width:100,
          fontWeight:'bold'
      }
  });

  export default connect(mapStateToProps)(CartIcon);
