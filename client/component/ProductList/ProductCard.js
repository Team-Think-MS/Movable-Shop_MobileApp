import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

function ProductCard({ picture, title, price, productid }) {
    const navigation = useNavigation();

    function productPressedHandler() {
        navigation.navigate('ProductDetaislScreen', {
            productID : productid
        })
    }

  return (
    <Pressable 
    style={({ pressed }) => [
        styles.rootContainer,
        pressed ? styles.pressed : null,
      ]}
    onPress={productPressedHandler}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: picture }} style={styles.image} />
      </View>
      <View style={styles.textConatiner}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.priceText}>Rs.{price}</Text>
      </View>
    </Pressable>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 20,
    flex: 1,
    borderRadius: 10,
  },
  imageContainer: {},
  image: {
    width: "100%",
    height: 150,
    borderRadius: 20,
  },
  textConatiner: {
    marginLeft: 5,
  },
  titleText: {
    fontSize: 16,
    marginTop:2
  },
  priceText: {
    paddingTop: 3,
  },
  pressed: {
      opacity: 0.75
  }
});
