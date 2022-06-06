import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constant/Styles";

function SellingDetails({ activeOrders, earnings }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.orderContainer}>
        <Text style={styles.text}>Active Orders</Text>
        <Text style={styles.ordersNumber}>{activeOrders}</Text>
      </View>
      <View style={styles.earningsContainer}>
        <Text style={styles.text}>30 days earnings</Text>
        <Text style={styles.earningNumber}>RS.{earnings}</Text>
      </View>
    </View>
  );
}

export default SellingDetails;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.gray200,
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 15
  
  },
  orderContainer: {
    flex: 1,
    alignItems: "center",
  },
  earningsContainer: {
    flex: 1, 
    alignItems: "center",
    borderLeftWidth: 1,
    borderColor: GlobalStyles.colors.gray200,
  },
  text: {
    marginBottom: 15,
  },
  ordersNumber: {
    fontSize: 40,
  },
  earningNumber: {
      fontSize: 26,
      marginTop: 8,
  },
});
