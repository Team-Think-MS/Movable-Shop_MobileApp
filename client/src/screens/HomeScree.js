import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Dimensions,
    
    
    
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { Icon } from "react-native-elements";
  import HomeHeader from "../components/HomeHeader";
  import { colors } from "../global/styles";
  //import { data } from "../global/data";
  //import { productData, Stores2,Stores } from "../global/products";
  import SearchComponent from "../components/SearchComponent";
  import Banner from "../components/Banner";
  import StoreCard from "../components/StoreCard";
  import Axios from 'axios';
  import {FlatList} from 'react-native-gesture-handler'
  import {Thumbnail} from 'native-base'
 {/**class Btn extends Component {
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
   */} 
  
  const WIDTH = Dimensions.get("window").width;
  
  const HomeScree=({navigation,props})=> {
    const numColums = 2;
    const [indexCheck, setIndexCheck] = useState("0");
    const [idCheck, setIdCheck] = useState("0");
    const [allProducts,setAllProducts]=useState([]);
    const [allStores,setAllStores]=useState([]);
    const [allcategories,setAllCategories]= useState([]);


    
    const getAllProducts=()=>{
      Axios.get('http://192.168.8.123:3002/api/products/').then((products) => {
        setAllProducts(products.data);
      }).catch((error)=>{
        console.log(error);
        
      })
    };

  
    
    
    useEffect(()=>{
      
      getAllProducts();
      getAllCategories();
      getAllStores();
   
    },[]);

     const getAllStores=()=>{
      Axios.get('http://192.168.8.123:3002/api/stores/').then((stores)=>{
        setAllStores(stores.data);
      }).catch((error)=>{
        console.log(error);
      })
    }
   

    const getAllCategories=()=>{
      Axios.get('http://192.168.8.123:3002/api/category/').then((categories)=>{
        setAllCategories(categories.data);
      }).catch((error)=>{
        console.log(error);

      })
    } 
  
    
    return (
      <View style={styles.container}>
      
        <HomeHeader navigation={navigation}/>  
        <SearchComponent />  

          <View style={{flex:1}}>
            <FlatList
            ListHeaderComponent={()=>(
              <View>
                <View>
                   <Banner />
              </View>
          
          
         <View
            style={{
              borderBottomColor: '#C4C4C4',
              borderBottomWidth: 0.5,
              paddingHorizontal:20,
              paddingTop:10
            }}
          /> 
          
         
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
             data={allcategories}
             //data={data}
              keyExtractor={(item) => item.categoryId}
              extraData={indexCheck}
              renderItem={({ item,index }) => (
                
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.categoryId);
        
                    navigation.navigate("Product List",{item:item,productTitle:item.categoryName})
                  }}
                >
                  
                  <View
                    style={
                      indexCheck === item.categoryId
                       ? { ...styles.smallCardSelected }
                        : { ...styles.smallCard }
                    }
                  >
                   
                    <View>
                      <Text
                        style={
                          indexCheck === item.categoryId
                            ? { ...styles.smallCardTextSelected }
                            : { ...styles.smallCardText }
                        }
                      >
                        {item.categoryName}
                   
                      </Text>
                    </View>
                  </View>
                </Pressable>
                
              )}
            />
          </View>
          
         <View
            style={{
              borderBottomColor: '#C4C4C4',
              borderBottomWidth: 0.5,
              paddingHorizontal:20,
              paddingTop:2,
              marginBottom:5
            }}
         /> 
          <View style={styles.headerTextView}>
            <View style={styles.area}>
               <Text style={styles.headerText}>Nearby Stores</Text>
               <Icon
                  name="arrow-right-circle-outline"
                  style={styles.arrowIcon}
                  type="material-community"
                  iconStyle={{ marginLeft: 5 }}
                  size={22}
                  color="#65686e"
            
                />
            </View>
          </View>
          
          
            <FlatList
              horizontal={true}
             // data={Stores}
              data={allStores}
              keyExtractor={(item,index) => item.storeId}
              showsHorizontalScrollIndicator = {false}
              renderItem={({ item,index}) => (
                
               <StoreCard
               screenWidth={WIDTH*0.45}
               images ={item.picture}
               restaurantName ={item.storeName}
               //averageReview ={item.rating}
               //numberOfReview ={item.numReviews}
               
               OnPressFoodCard={()=>{
              
                navigation.navigate("ProductScreen",{item:item,id:item.storeId,productTitle:item.storeName})}
              
              }
               />
              )}
            />
        
              </View>
              

            )}
            ListFooterComponent={()=>(
             
              <View>
                    <View style={styles.headerTextView}>
              <View style={styles.area}>
                <Text style={styles.headerText}>Most Popular Categories</Text>
                <Icon
                  name="arrow-right-circle-outline"
                  style={styles.arrowIcon}
                  type="material-community"
                  iconStyle={{ marginLeft: 5 }}
                  size={22}
                  color="#65686e"
            
                />
              </View>
            </View>
            <View>
              <FlatList
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              data={allcategories}
              keyExtractor={(item)=>item.categoryId}
              renderItem={({item})=>(
                <Pressable onPress={()=>{  navigation.navigate("Product List",{item:item,productTitle:item.categoryName})}}>
                  <View>
                    
                    <View style={styles.productCardTwo}>
                      <View style={{alignItems:'center',top:-2,marginTop:5,marginLeft:10,marginRight:10}}>
                        <Thumbnail
                          style={{height:(WIDTH-150)/2, width:(WIDTH-40)/2, borderTopLeftRadius:20,borderTopRightRadius:20}}
                          source={{uri:item.picture}}                        
                        />
                      </View>
                      <View style={{marginHorizontal:20}}>
                        <Text style={styles.productCardTextTwo}>
                          {item.categoryName}
                        </Text>

                      </View>
                      

                    </View>
                  </View>
                </Pressable>
              )}
              
              
              
              />



            </View>
                 
            
              </View>
            )}
                     
            />

            </View> 
         
        
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
      width: 100,
      margin: 10,
      height: 40,
    },
    smallCardSelected: {
      borderRadius: 30,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      width: 100,
      margin: 10,
      height: 40,
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
    
    productCard: {
     
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
      height: (WIDTH - 40) / 2,
      margin: 10,
      width: (WIDTH - 40) / 2,
      marginHorizontal: 10,
      // marginBottom: 20,
      //marginTop: 50,
      borderRadius: 20,
      elevation: 13,
      backgroundColor: "white",
      flex:1
    },
    arrowIcon: {
      paddingTop:2,
      
      color: "#65686e",
    },
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
      fontSize: 15,
      fontWeight: "bold",
      color: "gray",
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
    area:{
      marginTop:5,
      flexDirection:"row",
      alignItems:"center",
    },
  });
  