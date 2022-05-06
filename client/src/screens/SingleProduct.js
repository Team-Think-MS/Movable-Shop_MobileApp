import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  Keyboard
} from "react-native";
import {Icon} from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import {connect} from 'react-redux';
import * as actions from '../Redux/Actions/cartActions';

const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 80, padding: 5 }}>
        <View >
        <Text style={styles.text1}>{item.name}</Text>
          <View style={styles.imageContainer}>
            <Image
            source={item.image}
            resizeMode="contain"
            style={styles.image}
          />

          </View>
        
         
         <View
          style={{
            borderBottomColor: '#C4C4C4',
            borderBottomWidth: 0.5,
            paddingHorizontal:20,
            paddingTop:20
          }}
        /> 
         
          <Text style={styles.text}>Rs.{item.price}.00</Text>
          <Text style={styles.text2}>{item.description}</Text>
        </View>


<View style={styles.view13}>
   <View style={styles.view14}>
          <View style={styles.view15}>
            <Icon
              name ="remove"
              type = "material"
              color ="#7393d1"
              size ={25}
              onPress ={()=>{}}
            />

          </View>
          <View style={styles.view12}>
             <Text style={styles.text9}>0</Text>
             <Text style={styles.text9}>Items</Text>
          </View>
         
          <View style={styles.view16}>
            <Icon
             name ="add"
             type = "material"
             color ="#7393d1"
             size ={25}
             onPress ={()=>{}}
            
            />

          </View>
          
        </View>
        <TouchableOpacity
           onPress={() => {
          props.addItemToCart(item),
         console.log(props)
          
          }}
        >
            <View style ={styles.view17}>
                    <View style ={styles.view18}>
                        <Text style ={styles.text10}>Add to Cart </Text>
                    </View>
            </View>
        </TouchableOpacity>
      
</View>
       
        
      </View>
    </View>
  );
};

const mapDispatchToProps =(dispatch)=>{
  return{
    addItemToCart: (product)=>{
       dispatch(actions.addToCart({quantity: 1, product}))
    }
     
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    backgroundColor:"white"
  },
  imageContainer: {
    backgroundColor: "white",
    padding: 0,
    margin: 0,
    height:250,
    width:"100%",
    borderColor:"#65686e",
    //sborderWidth:0.5
  },
  image: {
    width: "100%",
    height: 250,
  }, 
  text1:{
    color: "#65686e",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight:20,
    paddingTop:5,
    fontFamily: "sans-serif-medium", 
    textAlign:"center"
  },
  text:{
    color: "#65686e",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight:20,
    paddingTop:5,
    fontFamily: "sans-serif-medium", 
  },
  text2:{
    color: "#65686e",
    fontSize: 14,
    paddingLeft: 20,
    paddingRight:20,
    paddingTop:5,
    fontFamily: "sans-serif-medium", 
    textAlign:"justify"
  },
  view14:{
    flexDirection:"row",
  backgroundColor:"white",
  marginBottom:2, 
  justifyContent:"space-between",
  paddingHorizontal:10,
  paddingVertical:5,
  borderWidth:1,
  width:320,
  borderRadius:25,
  borderColor:"#7393d1",
  alignItems:"center",
  marginTop:-5,
  alignSelf:"center"

},
view12:{
  flexDirection:"column",
  alignItems:"center",
  
},
view15:{
  width:30,
  height:30,
  borderRadius:15,
  backgroundColor:"white",
  alignItems:"center",
  justifyContent:"center",
  borderColor:"gray"
},
text9:{
  fontWeight:"bold",
  fontSize:13,
  color:"#7393d1"
  },
  view16:{width:30,
    height:30,
    borderRadius:15,
    backgroundColor:"white", 
    alignItems:"center",
    justifyContent:"center"
  },

view17:{alignItems:"center",
    padding:10,
    backgroundColor:"white",

 
  },

view18:{backgroundColor:"#88aef7",
    alignItems:"center",
    paddingVertical:5,
    paddingHorizontal:5,
    marginBottom:0,
    width:320,
    borderRadius:25,
    height:45
    
  },

text10:{padding:8,
    fontWeight:"bold",
    fontSize:15,
    color:"white"
    },

view19:{flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
paddingRight:10
},
view13:{
position:'relative',
bottom:0,
left:0,
marginTop:100,
flexDirection:'column'
  
}

});

export default connect(null,mapDispatchToProps)(SingleProduct);

