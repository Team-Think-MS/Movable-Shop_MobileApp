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
} from "react-native";
import React, { Component, useState } from "react";
import { Icon, withTheme } from "react-native-elements";
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { data } from "../global/data";
import { products } from "../global/products";
import { Button } from "react-native-elements/dist/buttons/Button";

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

export default function HomeScree() {
  const numColums = 2;
  const [indexCheck, setIndexCheck] = useState("0");
  const [idCheck, setIdCheck] = useState("0");
  return (
    <View style={styles.container}>
      <ScrollView ScrollView showsHorizontalScrollIndicator={true}>
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
          <Text style={styles.headerText}>Products</Text>
        </View>
        <View>
          <FlatList
            numColumns={2}
            data={products}
            keyExtractor={(item) => item.id}
            extraData={idCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIdCheck(item.id);
                }}
              >
                <View
                  style={
                    /*idCheck === item.id
                      ? { ...styles.productCardSelected }
                      : { ...styles.productCard }*/
                    styles.productCard
                  }
                >
                  <View style={{ alignItems: "center", top: -40 }}>
                    <Image
                      style={{ height: 100, width: 150, borderRadius: 10 }}
                      source={item.image}
                    />
                  </View>
                  <View style={{ marginHorizontal: 20 }}>
                    <Text
                      style={
                        /*idCheck=== item.id?{...styles.productCardSelectedText}:{...styles.productCardText}*/
                        styles.productCardText
                      }
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={
                        /*idCheck=== item.id?{...styles.productCardSelectedText}:{...styles.productCardText}*/
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
                        styles.productCardText
                        /* idCheck=== item.id?{...styles.productCardSelectedText}:{...styles.productCardText}*/
                      }
                    >
                      ${item.price}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    color: colors.gray01,
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  headerTextView: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 3,
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
    fontWeight: "bold",
    color: "white",
  },
  smallCardText: {
    fontWeight: "bold",
    color: colors.gray01,
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
    height: 240,
    margin: 5,
    width: (WIDTH - 40) / 2,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
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
