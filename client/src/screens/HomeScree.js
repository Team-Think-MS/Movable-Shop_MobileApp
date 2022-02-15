import { StyleSheet, Text, View, ScrollView ,FlatList,Pressable,Image} from 'react-native'
import React, { useState } from 'react'
import {Icon} from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import {colors,parameters} from '../global/styles'
import {data} from '../global/data'


export default function HomeScree() {

  const[indexCheck,setIndexCheck]=useState("0");
  return (
    <View style={styles.container}>
 
    <HomeHeader/>
 <ScrollView  ScrollView
  showsHorizontalScrollIndicator={true}
 >
  <View style={styles.headerTextView}>
   <Text style={styles.headerText}>Categories</Text>
 </View>
 <View>
<FlatList

    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={data}
    keyExtractor={(item)=>item.id}
    extraData={indexCheck}
    renderItem={({item,index})=>(
      <Pressable
        onPress={()=>{setIndexCheck(item.id)}}
      >
        <View style={indexCheck===item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>

          <Image
          
          style={{height:60,width:60,borderRadius:30}}
          source={item.image}
          />
          <View>
            <Text style={indexCheck===item.id?{...styles.smallCardTextSelected}:{...styles.smallCardText}}>{item.name}</Text>
          </View>
        </View>
      </Pressable>

    )}

/>

 </View>
 <View style={styles.headerTextView}>
   <Text style={styles.headerText}>Products</Text>
 </View>
 </ScrollView>
 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

       
    },
    headerText:{
        color:colors.gray01,
        fontSize:24,
        fontWeight:'bold',
        paddingLeft:10
    },
    headerTextView:{
      backgroundColor:'#f2f2f2',
      paddingVertical:3
      
    },
    smallCard:{
      borderRadius:30,
      backgroundColor:'#f2f2f2',
      justifyContent:'center',
      alignItems:'center',
      padding:5,
      width:80,
      margin:10,
      height:100


    },
    smallCardSelected:{
      borderRadius:30,
      backgroundColor:colors.buttons,
      justifyContent:'center',
      alignItems:'center',
      padding:5,
      width:80,
      margin:10,
      height:100

    },
    smallCardTextSelected:{
      fontWeight:'bold',
      color:'white',

    },
    smallCardText:{
      fontWeight:'bold',
      color:colors.gray01,
      
    }
})