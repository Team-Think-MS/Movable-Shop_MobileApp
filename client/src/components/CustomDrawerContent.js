import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import {Avatar} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
const CustomDrawerContent = (props) => {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}
        contentContainerStyle={{backgroundColor:'white'}}
        >
      <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20,paddingBottom:50,paddingTop:20}}>
            <Avatar
          //rounded
          avatarStyle={styles.avatar}
          source={require('../products/person.png')}
          size={75}
        />
        <View>
          <Text style={styles.text}>
            Sign In
          </Text>
        </View>
    
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
   
    
  
  },
  text:{
        fontFamily: 'sans-serif-medium',
        fontSize: 30,
        color:'#65686e',
        paddingLeft:20,
        marginLeft:15
  }
})