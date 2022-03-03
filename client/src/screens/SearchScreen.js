import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import SearchComponent from "../components/SearchComponent";
import HomeHeader from "../components/HomeHeader";
import { products } from "../global/products";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SearchScreen = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <SearchComponent />

      <View>
        <FlatList
          style={{ marginBottom: 1 }}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
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
};

const Footer = () => {
  return (
    <View style={{ flex: 1, marginBottom: 150 }}>
      <View style={{}}>
        <FlatList
          style={{ marginBottom: 10 }}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
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

export default SearchScreen;

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
