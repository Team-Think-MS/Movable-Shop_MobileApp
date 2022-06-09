import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const Rating = ({rating,numReviews}) => {
   
  return (
    <View style={{flexDirection:'row',width:'100%',position:'relative',paddingHorizontal:15}}>
      <View >
         {rating >= 1
                  ? <Icon name="star" type='material-community'color="#65686e"size ={17}/>
                  : rating >= 0.5
                  ? <Icon name="star-half-full" type='material-community'color="#65686e"size ={17}/>
                  :  <Icon name="star-outline" type='material-community' color="#65686e" size ={17}/>
                  }
  
      </View>
      <View>
       {
            rating >= 2
              ?  <Icon name="star" type='material-community'color="#65686e"size ={17}/>
              : rating >= 1.5
              ? <Icon name="star-half-full" type='material-community'color="#65686e"size ={17}/>
              :  <Icon name="star-outline" type='material-community' color="#65686e" size ={17}/>
          }
       
      </View>
      <View>
  {
  rating >= 3
              ?  <Icon name="star" type='material-community'color="#65686e"size ={17}/>
              : rating >= 2.5
              ? <Icon name="star-half-full" type='material-community'color="#65686e"size ={17}/>
              : <Icon name="star-outline" type='material-community' color="#65686e" size ={17}/>
          }

      </View>
      <View>
 {
            rating >= 4
              ?  <Icon name="star" type='material-community'color="#65686e"size ={17}/>
              : rating >= 3.5
              ?<Icon name="star-half-full" type='material-community'color="#65686e"size ={17}/>
              : <Icon name="star-outline" type='material-community' color="#65686e" size ={17}/>
          }
     
      </View>
      <View>
 {
            rating >= 5
              ? <Icon name="star" type='material-community'color="#65686e"size ={17}/>
              : rating >= 4.5
              ?<Icon name="star-half-full" type='material-community'color="#65686e"size ={17}/>
              : <Icon name="star-outline" type='material-community' color="#65686e" size ={17}/>
          }

      </View>
      <View style={{flexDirection:'row',width:'100%',position:'relative',paddingHorizontal:5}}>
      <Text style={{fontSize:13, color:"#65686e"}}>({numReviews})</Text>
      </View>
    </View>

  )
}

export default Rating

const styles = StyleSheet.create({})