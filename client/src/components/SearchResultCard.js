import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  //import { Icon } from "react-native-elements";
  import React from "react";
  import { colors } from "../global/styles";
  import { productData } from "../global/products";
  import ProductCard from "./ProductCard";
  import { useNavigation } from "@react-navigation/native";
  
  const SearchResultCard = ({
    OnPressStoreCard,
    storeName,
    numberOfReview,
    averageReview,
    images,
    
  }) => {
    const navigation = useNavigation();
    return (
      <View>
     <TouchableOpacity onPress={OnPressStoreCard}>
        <View style={styles.view1}>
          <View style={{ height: 150 }}>
          <ImageBackground
              style={{ height: 160 }}
              source = {(images)}
              imageStyle={styles.imageStyle}
            />
            <View style={styles.image}>
              <Text style={styles.text1}>{averageReview}</Text>
              <Text style={styles.text2}> {numberOfReview} reviews</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <View style={{ paddingTop: 5 }}>
              <Text style={styles.text5}>{storeName}</Text>
            </View>
          </View>
        </View>
     </TouchableOpacity>
  
        <View style={{ marginTop: 0.5, paddingBottom: 20 }}>
          <FlatList
            horizontal={true}
            style={{ backgroundColor: "white" }}
            data={productData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <ProductCard
                image={item.image}
                productName={item.name}
                price={item.price}
                OnPressProductCard={()=>{navigation.navigate("SingleProduct",{ item: item})}}
              />
            )}
          />
        </View>
      </View>
    );
  };
  
  export default SearchResultCard;
  
  const styles = StyleSheet.create({
    view1: {
      marginHorizontal: 9,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
    },
  
    image: {
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: "rgba(52, 52, 52,0.4)",
      padding: 2,
      alignItems: "center",
      justifyContent: "center",
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 12,
    },
  
    imageStyle: { borderTopLeftRadius: 5, borderTopRightRadius: 5 },
  
    text1: { color: "white", fontSize: 20, fontWeight: "bold", marginTop: -3 },
  
    text2: { color: "white", fontSize: 13, marginRight: 0, marginLeft: 0 },
  
    view2: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: -5,
    },
    text3: {
      fontSize: 10,
      fontWeight: "bold",
      color: colors.gray01,
    },
  
    text4: {
      fontSize: 10,
      fontWeight: "bold",
      color: colors.gray01,
    },
    view3: {
      flexDirection: "column",
      marginHorizontal: 5,
      marginBottom: 0.5,
      marginLeft: 0,
      marginTop: 10,
    },
  
    text5: {
      fontSize: 17,
      fontWeight: "bold",
      color: colors.gray01,
      paddingBottom:0.5
    },
  
    view4: {
      flex: 4,
      flexDirection: "row",
      borderRightWidth: 1,
      color: colors.gray01,
      paddingHorizontal: 5,
    },
  
    view5: {
      fontSize: 12,
      fontWeight: "bold",
      paddingTop: 5,
      color: colors.gray01,
    },
  
    text6: {
      fontSize: 12,
      paddingTop: 5,
      color: colors.gray01,
      paddingHorizontal: 10,
    },
  });
  