import React from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';


import {
  Icon
} from 'react-native-elements';


export default function StoreCard({
    OnPressFoodCard,
    restaurantName,
    numberOfReview ,
    averageReview ,
    images,
    screenWidth,
    
}){

    return(
        <TouchableOpacity  onPress={OnPressFoodCard}>
            <View style ={{...styles.cardView,width:screenWidth}}>
                <Image 
                    style ={{...styles.image, width:screenWidth}}
                    source = {(images)}
                />

<View>
                <View>
                    <Text style ={styles.restaurantName}>{restaurantName}</Text>
                </View>

                <View style ={{flex:1, flexDirection:"row"}}>

                 

                </View>
            </View>

            </View>

         


            <View style ={styles.review}>
                   <Text style ={styles.average}>{averageReview}</Text>   
                   <Text style ={styles.numberOfReview}>{numberOfReview} reviews</Text>  
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
        cardView:{
            marginHorizontal:9,
            borderTopRightRadius:5,
            borderTopLeftRadius:5,
            borderWidth:0.15,
            borderBottomLeftRadius:5,
            borderBottomRightRadius:5,
            marginTop:10
        },
         image:{
            borderTopLeftRadius:6,
            borderTopRightRadius:6,
            height:120,
         },

         restaurantName:{
            fontSize:17,
            fontWeight:'bold',
            color:'gray',  
            marginTop:15,
            marginLeft:10,
            marginBottom:10
         },

         Min:{
            fontSize:12,
            fontWeight:'bold',
            paddingTop:5,
            color:'gray'
         },

         address:{
            fontSize:12,
            paddingTop:5,
            color:'gray',
            paddingHorizontal:10
         },

         review :{
            position:"absolute",
            top:0,
            right:10,
            backgroundColor:'rgba(52, 52, 52,0.3)',
            padding:2,alignItems:"center",
            justifyContent:"center", 
            borderTopRightRadius:5,
            borderBottomLeftRadius:12 ,
            marginTop:10

         },

         average:{
            color:"white",
             fontSize:20,
              fontWeight:'bold',
               marginTop:-3  
         },
         numberOfReview :{
            color:"white", 
            fontSize:13,
            marginRight:0,
            marginLeft:0
         }
})