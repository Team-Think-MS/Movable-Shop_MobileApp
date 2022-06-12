import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import { Body, Container, Left, ListItem, Right } from 'native-base'
import { Icon } from 'react-native-elements';
import * as actions from '../Redux/Actions/wishlistActions'

var {height}= Dimensions.get('window').width;

const WishList = (props) => {
  return (
    <>
    {props.wishlistItems.length ? (
      <Container>
        {props.wishlistItems.map(data=>{
          return(
            <ListItem
              style={styles.listItem}
              key={Math.random()}         
            >
              <Body style={styles.body}>
                 <Left>
                  <Text>{data.product.name}</Text>
                </Left>
                <Right>
                <Icon
                  name ="close"
                  type = "material"
                  color ="#7393d1"
                  size ={25}
                  onPress={()=> props.removeFromWishList(data)}

                  />
                </Right>
              </Body>
              

            </ListItem>
          )
        })}

      </Container>

    ):(
      <Container style={styles.emptyContainer}>
        <Text style={{fontWeight:'normal', fontSize:15, flex:1}}>Your Wishlist is empty.</Text>
      </Container>
    )}
    
    
    </>
  )
}

const mapStateToProps=(state)=>{
  const { wishlistItems}= state;
  return{
    wishlistItems: wishlistItems,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    clearWishList:() => dispatch(actions.clearWishList()),
    removeFromWishList:(item)=> dispatch(actions.removeFromWishList(item))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(WishList);

const styles = StyleSheet.create({
  emptyContainer:{
    height:height,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:50,
    flex:1
  },
  listItem:{
    alignItems:'center',
    backgroundColor:'white',
    justifyContent:'center',
    borderColor:'#7393d1',
    borderWidth:0.5,
    marginBottom:10,
    borderRadius:10,
    marginHorizontal:15,
    height:50,
    
   
  },
  body:{
    margin:10,
    alignItems:'center',
    flexDirection:'row',
    height:20,
    backgroundColor:"white"
  }
})