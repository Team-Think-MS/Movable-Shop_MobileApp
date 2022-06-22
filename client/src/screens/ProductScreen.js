import { StyleSheet, Text, View,Image,ScrollView ,FlatList,Pressable,Dimensions} from "react-native";
import React,{useEffect, useState} from "react";
import Banner from "../components/Banner";


import { Icon } from "react-native-elements";
import Rating from "../components/Rating";
import axios from "axios";
import { Thumbnail } from "native-base";
const WIDTH = Dimensions.get("window").width;

const ProductScreen = ({navigation,route}) => {
  const [item, setItem] = useState(route.params.item);
  const [allproducts,setAllProducts]=useState([]);


const getProducts=()=>{
  axios.get(`http://192.168.8.123:3002/api/products/store/${item.storeId}`
  ).then((products)=>{
    setAllProducts(products.data);
    console.log(item.storeId)
  }).catch((error)=>{
    console.log(error);
  })
}
useEffect(()=>{
  getProducts();
},[]);


  
  return (
    <View style={styles.container} >
       {/** <ScrollView  showsVerticalScrollIndicator={true}> */} 
      
   
    <View style ={{marginTop:5}}>

<FlatList
ListHeaderComponent={
  <>
  <View>
        <Banner/>
      </View>
      
   <View
  style={{
    borderBottomColor: '#65686e',
    borderBottomWidth: 0.5,
    paddingHorizontal:5,
  }}
/> 

    
    <Text style={styles.text}>{item.descrption}</Text>

   
    <Pressable onPress={()=>{navigation.navigate("Customer Reviews",{item: item})}}>
     
      {/** */}
      <Rating
        rating={item.rating}
        numReviews={item.numReviews}
      />
    
    </Pressable>
   
    
    <View style={styles.area}>
     <Text style={styles.header}>Our Products
     
     
     </Text>
     <Icon
            name="arrow-right-circle-outline"
            style={styles.arrowIcon}
            type="material-community"
            iconStyle={{ marginLeft: 5 }}
            size={25}
            color="#65686e"
            
          />
   
    </View>
  
  </>
}

  numColumns={2}
    style ={{backgroundColor:'white'}}
   // data = {item.productData}
   data={allproducts}
    //keyExtractor ={(item,index)=>index.toString()}
    keyExtractor={(item)=>item.productId}
    renderItem ={({item,index})=> (

      <Pressable onPress={()=>{
        navigation.navigate("SingleProduct",{ item: item,productTitle:item.productName});
      }}>
      <View
        style={styles.productCardTwo}>
        <View
          style={{
            alignItems: "center",
            top: -2,
            marginTop: 5,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Thumbnail
            style={{ height: 90, width: 100, borderRadius: 10 }}
            //source={{uri: item.image}}
            source={{uri:item.picture}}
          />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text
            style={
             styles.productCardTextTwo
            }
          >
            {item.productName}
          </Text>   
        </View>
        <View
          style={{
            marginTop: 2,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={
              styles.productCardTextTwo
            }
          >
            Rs.{item.price}
          </Text>
        </View>

  
      </View>
    </Pressable>


    )
  }
    horizontal ={false}
    showsHorizontalScrollIndicator={false}
/>
   
  </View>
 
    
    </View>
  );
}
export default ProductScreen;
const styles = StyleSheet.create({
  container:{
    position:'relative',
    height:'100%',
    backgroundColor:"white",
    paddingTop:0
  },
  imageContainer:{
    backgroundColor:'white',
    padding:0,
    margin:0
  },
  image:{
        width: '100%',
        height: 250
  },
  text:{
    color: "#65686e",
    fontSize: 14,
    paddingLeft: 20,
    paddingRight:20,
    paddingTop:5,
    fontFamily: "sans-serif-medium", 
    textAlign:"justify",
    paddingBottom:10
  },
  header:{
    color: "#65686e" ,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    fontFamily: "sans-serif-medium",
    paddingTop:8,
  },
  arrowIcon: {
    paddingTop:8,
    paddingTop:10,
    color: "#65686e",
  },
  area:{
    marginTop:10,
    flexDirection:"row",
    alignItems:"center",
  },
  productCardTwo: {
    height: (WIDTH - 40) / 2,
    margin: 5,
    width: (WIDTH - 40) / 2,
    marginHorizontal: 10,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "white",
    borderColor:"#65686e",
    borderWidth:0.5
  },
  productCardTextTwo: {
    fontSize: 13,
    color: "#65686e",
    marginTop: 10,
    fontFamily: "sans-serif-medium",
  },
});
