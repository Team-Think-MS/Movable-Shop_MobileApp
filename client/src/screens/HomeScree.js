import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    Pressable,
    Image,
    Dimensions,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
  } from "react-native";
  import React, { Component, useState } from "react";
  import { Icon, withTheme } from "react-native-elements";
  import HomeHeader from "../components/HomeHeader";
  import { colors, parameters } from "../global/styles";
  import { data } from "../global/data";
  import { productData, Stores2,Stores } from "../global/products";
  //import { Button } from "react-native-elements/dist/buttons/Button";
  import SearchComponent from "../components/SearchComponent";
  import Banner from "../components/Banner";
  import StoreCard from "../components/StoreCard";
  
  class Btn extends Component {
    render() {
      return (
        <TouchableHighlight
          onPress={() => Alert.alert("button clicked!")}
          underlayColor="white"
          activeOpacity={0.7}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </View>
        </TouchableHighlight>
      );
    }
  }
  
  const WIDTH = Dimensions.get("window").width;
  
  const HomeScree=({navigation})=> {
    const numColums = 2;
    const [indexCheck, setIndexCheck] = useState("0");
    const [idCheck, setIdCheck] = useState("0");
    return (
      <View style={styles.container}>
        <SearchComponent />
  
        <ScrollView  showsHorizontalScrollIndicator={true}>
          <View>
            <Banner />
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Categories</Text>
          </View>
         
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => item.id}
              extraData={indexCheck}
              renderItem={({ item, index }) => (
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.id);
                  }}
                >
                  <View
                    style={
                      indexCheck === item.id
                        ? { ...styles.smallCardSelected }
                        : { ...styles.smallCard }
                    }
                  >
                    <Image
                      style={{ height: 60, width: 60, borderRadius: 30 }}
                      source={item.image}
                    />
                    <View>
                      <Text
                        style={
                          indexCheck === item.id
                            ? { ...styles.smallCardTextSelected }
                            : { ...styles.smallCardText }
                        }
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Nearby Stores</Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              //numColumns={2}
              data={Stores}
              keyExtractor={(item,index) => index.toString()}
              showsHorizontalScrollIndicator = {false}
              //extraData={idCheck}
              renderItem={({ item,index}) => (
               <StoreCard
               screenWidth={WIDTH*0.5}
               images ={item.image}
               restaurantName ={item.name}
               averageReview ={item.rating}
               numberOfReview ={item.numReviews}
               OnPressFoodCard={()=>{navigation.navigate("ProductScreen",{item:item,id:index})}}
               />
              )}
            />
            <View style={styles.headerTextView}>
              <Text style={styles.headerText}>Most Popular Categories</Text>
            </View>
            <FlatList
              numColumns={2}
              data={productData}
              keyExtractor={(item) => item.id}
              extraData={idCheck}
              renderItem={({ item, index }) => (
                <Pressable
                  onPress={() => {
                    navigation.navigate("SingleProduct",{ item: item});
                  }}
                >
                  <View
                    style={
                      styles.productCardTwo
                    }
                  >
                    <View
                      style={{
                        alignItems: "center",
                        top: -2,
                        marginTop: 5,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <Image
                        style={{ height: 100, width: 150, borderRadius: 10 }}
                        source={item.image}
                      />
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                      <Text
                        style={
                          styles.productCardTextTwo
                        }
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={
                           { fontSize: 12, color: "#e2e1e1" }
                        }
                      >
                        {item.name}
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
                      <Text
                        style={
                          styles.productCardTextTwo
                        }
                      >
                        Rs.{item.price}
                      </Text>
                    </View>
  
                    <Btn />
                  </View>
                </Pressable>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
  export default HomeScree;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    headerText: {
      color: colors.gray01,
      fontSize: 15.5,
      fontWeight: "bold",
      paddingLeft: 10,
      fontFamily: "sans-serif-medium",
    },
    headerTextView: {
      backgroundColor: "white",
      paddingVertical: 3,
      marginBottom: -1,
      marginTop: 5,
    },
    smallCard: {
      borderRadius: 30,
      backgroundColor: "#f2f2f2",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      width: 80,
      margin: 10,
      height: 100,
    },
    smallCardSelected: {
      borderRadius: 30,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      width: 80,
      margin: 10,
      height: 100,
    },
    smallCardTextSelected: {
      //fontWeight: "bold",
      color: "white",
      fontFamily: "sans-serif-medium",
    },
    smallCardText: {
      //fontWeight: "bold",
      color: colors.gray01,
      fontFamily: "sans-serif-medium",
    },
    productCardSelected: {
      /*borderRadius:20,
      backgroundColor:colors.buttons,
      justifyContent:"center",
      alignItems:"center",
      padding:5,
      margin:5,
      width:(WIDTH-20)/2,
      height:300,
      paddingLeft:20,
      paddingRight:20,
      borderColor:colors.gray01,
      borderWidth:0.5*/
      //------------------------
      /* height:220,
     margin:5,
     width:(WIDTH-20)/2,
     marginHorizontal:10,
     marginBottom:20,
     marginTop:50,
     borderRadius:15,
     elevation:13,
     backgroundColor:colors.buttons*/
    },
    productCard: {
      /*borderRadius:20,
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center",
      padding:5,
      margin:5,
      width:(WIDTH-20)/2,
      height:300,
      paddingLeft:20,
      paddingRight:20,
      borderColor:colors.gray01,
     borderWidth:0.5*/
      height: (WIDTH - 40) / 2,
      margin: 5,
      width: (WIDTH - 40) / 2,
      marginHorizontal: 10,
      marginBottom: 20,
      marginTop: 10,
      borderRadius: 20,
      elevation: 5,
      backgroundColor: "white",
    },
    productCardTwo: {
      height: 240,
      margin: 5,
      width: (WIDTH - 40) / 2,
      marginHorizontal: 10,
      // marginBottom: 20,
      //marginTop: 50,
      borderRadius: 20,
      elevation: 13,
      backgroundColor: "white",
    },
    /* productCardSelectedText:{
      fontWeight:"bold",
      color:"white",
      fontSize:18,
      textAlign:"left",
  
    
    
    },*/
    productCardText: {
      /* fontWeight: "bold",
      color: colors.gray01,
      fontSize:18,
      textAlign:"left",*/
      fontSize: 15,
      //fontWeight: "bold",
      color: "black",
      marginTop: 15,
      fontFamily: "sans-serif-medium",
    },
    productCardTextTwo: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
      marginTop: 2,
    },
    btn: {
      backgroundColor: "black",
      borderWidth: 10,
      borderRadius: 10,
      borderColor: "black",
      padding: -1,
      justifyContent: "center",
      margin: 10,
  
      elevation: 3,
    },
    btnText: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  