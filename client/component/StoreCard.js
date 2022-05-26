import { Image, Pressable, StyleSheet, View, Text } from "react-native";

function StoreCard({productname, onPress}) {
  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.imageContainer} onPress={onPress}>
        <Image source={require("../assets/photos/s1.png")} style={styles.image}/>
      </Pressable>
      <Text style={styles.textContainer}>{productname}</Text> 
    </View>
  );
}

export default StoreCard;

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        width: 200,
        height: '20%',
        padding: 10,
        alignItems: 'center'
    },
    imageContainer:{
        borderRadius: 10,
        overflow: "hidden"
    },
    textContainer: {
        textAlign: 'center',
        padding: 19
    },
    image: {
        width: 150,
        height: 150
    }
});
