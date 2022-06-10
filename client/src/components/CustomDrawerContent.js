import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import {Avatar,Button} from 'react-native-elements'
const CustomDrawerContent = (props) => {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}
        contentContainerStyle={{backgroundColor:'white'}}
        >
      <View>
        {/**     <Avatar
          rounded
          avatarStyle={styles.avatar}
          source={{uri:'https://pin.it/Q80W7Wd'}}
        />*/}
    
      </View>
      
        <DrawerItemList {...props}/>

   
    <View>

    </View>
    </DrawerContentScrollView> 
    </View>
   
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
  avatar:{
    borderWidth:4,
    borderColor:'black',
    
  
  }
})