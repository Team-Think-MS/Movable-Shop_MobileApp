import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";

const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 80, padding: 5 }}>
        <View>
        <Text style={styles.text}>{item.name}</Text>
          <View style={styles.imageContainer}>
            <Image
            source={item.image}
            resizeMode="contain"
            style={styles.image}
          />

          </View>
        
         
         <View
          style={{
            borderBottomColor: '#65686e',
            borderBottomWidth: 0.5,
            paddingHorizontal:20,
            paddingTop:20
          }}
        /> 
         
          <Text style={styles.text}>Rs.{item.price}</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  imageContainer: {
    backgroundColor: "white",
    padding: 0,
    margin: 0,
    height:250,
    width:"100%",
    borderColor:"#65686e",
    borderWidth:0.5
  },
  image: {
    width: "100%",
    height: 250,
  }, 
  text:{
    color: "#65686e",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight:20,
    paddingTop:5,
    fontFamily: "sans-serif-medium", 
  },
});

export default SingleProduct;

