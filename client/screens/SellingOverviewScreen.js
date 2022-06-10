import { StyleSheet, Text, View } from "react-native";
import SellingDetails from "../component/SellingDetails";
import PrimaryButton from "../component/UI/PrimaryButton";
import SecondaryButton from "../component/UI/SecondaryButton";

import { useNavigation } from "@react-navigation/native";

function SellingOverviewScreen() {
  const navigation = useNavigation();

  function listAnItemHandler() {
    navigation.navigate('ProductManageScreen')
  }
  function myProductsHandler() {
    navigation.navigate('MyProducts')
  }

  return (
    <View style={styles.rootContainer}>
      <View >
        <PrimaryButton onPress={listAnItemHandler} children={"List an item"} />
        <SecondaryButton children={"My Products"} onPress={myProductsHandler} />
        <SellingDetails activeOrders={3} earnings={8000} />
      </View>
      <View>
        <SecondaryButton children={"All orders"} />
        <SecondaryButton children={"Edit my store"} />
      </View>
    </View>
  );
}

export default SellingOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 80,
    marginTop: 10
  },
  bottomContainer: {
      
  }
});
