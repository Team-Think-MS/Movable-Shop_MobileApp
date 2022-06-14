import { View, Text, Pressable, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { GlobalStyles } from "../constant/Styles";
import { useDispatch } from "react-redux";
import { cartListActions } from "../store/Redux/cartList-slice";

function CartCard({ productName, quantity, price, onPress, productId }) {
    const dispatch = useDispatch();
    function removeFromCartHandler() {
        dispatch(cartListActions.removeProductCart({id: productId }))
    }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.text}>{quantity}  x  </Text>
        <Text  style={styles.text}>{productName}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text  style={styles.text}>Rs.{price}   </Text>
        <Pressable style={({pressed}) => pressed ?  styles.pressed : true} onPress={removeFromCartHandler}>
        <Entypo name="cross" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

export default CartCard;
const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: GlobalStyles.colors.gray200,
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    },
    pressed:{
        opacity: 0.45
    }
})
