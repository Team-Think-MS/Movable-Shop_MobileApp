import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions,
    Keyboard,
  } from "react-native";
  import React from "react";
  import SearchComponent from "../components/SearchComponent";
  //import HomeHeader from "../components/HomeHeader";
  import { productData } from "../global/products";
  import { useNavigation } from "@react-navigation/native";
  
  const SCREEN_WIDTH = Dimensions.get("window").width;
  
  export default function SearchScreen({navigation}) {
    // const navigation = useNavigation();
    return (
      <View style={{ backgroundColor: "white" ,paddingTop:25}}>
        <SearchComponent />
  
        <View>
          
          <FlatList
            style={{ marginBottom: 1 }}
            data={productData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
              onPress={()=>{
                navigation.navigate("SearchResultScreen",{ item: item.name,productTitle:item.name});
              }}
              
              >
                <View style={styles.imageView}>
                  <ImageBackground style={styles.image} source={item.image}>
                    <View style={styles.textView}>
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                        {item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListFooterComponent={<Footer />}
          />
        </View>
      </View>
    );
  }
  
  const Footer = () => {
      const navigation = useNavigation();
    return (
      <View style={{ flex: 1, marginBottom: 150 }}>
        <View style={{flex:1}}>
          <FlatList
            style={{ marginBottom: 10 }}
            data={productData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
              onPress={()=>{
                navigation.navigate("SearchResultScreen",{ item: item.name,productTitle:item.name});
              }}
              >
                <View style={styles.imageView}>
                  <ImageBackground style={styles.image} source={item.image}>
                    <View style={styles.textView}>
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                        {item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </View>
    );
  };
  //export default SearchScreen;
  
  const styles = StyleSheet.create({
    imageView: {
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      width: SCREEN_WIDTH * 0.4475,
      height: SCREEN_WIDTH * 0.4475,
      marginLeft: SCREEN_WIDTH * 0.035,
      marginBottom: SCREEN_WIDTH * 0.035,
      elevation: 10,
    },
    image: {
      width: SCREEN_WIDTH * 0.4475,
      height: SCREEN_WIDTH * 0.4475,
      borderRadius: 13,
    },
    textView: {
      width: SCREEN_WIDTH * 0.4475,
      height: SCREEN_WIDTH * 0.4475,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(52,52,52,0.3)",
    },
  });
  