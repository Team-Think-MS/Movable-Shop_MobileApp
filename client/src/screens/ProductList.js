import { Pressable, StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get("window").width;

const ProductList = ({navigation,route}) => {
    const [item,setItem] = useState(route.params.item);
    const [products,setProducts] = useState([]);

    const getProducts=()=>{
        axios.get(`http://192.168.8.123:3002/api/products/category/${item.categoryId}`).then((product)=>{
            setProducts(product.data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getProducts();
    },[]);

  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <View >
        <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(item)=>item.productId}
        renderItem={({item})=>(
            <Pressable onPress={()=>{navigation.navigate("SingleProduct",{ item: item,productTitle:item.productName})}}>
                <View style={styles.productCardTwo}>
                    <View style={{alignItems:'center', top: -2,
                        marginTop: 5,
                        marginLeft: 10,
                        marginRight: 10,}}>
                            <Image
                            style={{ height:  (WIDTH - 150) / 2, width: (WIDTH-40)/2,  borderTopLeftRadius:20,borderTopRightRadius:20 }}
                            source={{uri: item.picture}}
                            
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
                        marginTop: 10,
                        marginHorizontal: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                   
                    </View>

                </View>

            </Pressable>
        )}
        
        />
      </View>
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    productCardTwo: {
        height: (WIDTH - 40) / 2,
        margin: 10,
        width: (WIDTH - 40) / 2,
        marginHorizontal: 10,
        // marginBottom: 20,
        //marginTop: 50,
        borderRadius: 15,
        elevation: 5,
        backgroundColor: "white",
        
      },
      productCardTextTwo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginTop: 2,
      },
})