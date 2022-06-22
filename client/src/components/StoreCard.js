import React from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';
import Rating from './Rating';
import {Thumbnail} from 'native-base';


export default function StoreCard({
    OnPressFoodCard,
    restaurantName,
   // numberOfReview ,
    //averageReview ,
    images,
    screenWidth,
    
}){

    return(
        <TouchableOpacity  onPress={OnPressFoodCard}>
            
              
            <View style ={{...styles.cardView,width:screenWidth}}>
           
            <Thumbnail 
                    style ={{...styles.image, width:screenWidth}}
                    //source = {{uri:images}}
                    source={({uri:images})}
                />
                 <Text style ={styles.restaurantName}>{restaurantName}</Text>
               
               

            <View>
                <View>
                   
                    <View style={{marginBottom:2, marginTop:-14}} >
                        {/** <Rating
                        rating={averageReview}
                        numReviews={numberOfReview}
                    />  */}
                    </View>
                  
                </View>

            </View>

            </View>

<View>
    
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
            marginTop:10,
            marginBottom:5
        },
         image:{
            borderTopLeftRadius:6,
            borderTopRightRadius:6,
            height:90,
         },

         restaurantName:{
            fontSize:15,
            fontWeight:'bold',
            color:'gray',  
            marginTop:15,
            marginLeft:10,
            marginBottom:10,
            paddingBottom:2,
            paddingHorizontal:8
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