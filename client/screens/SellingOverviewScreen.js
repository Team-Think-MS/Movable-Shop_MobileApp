import { StyleSheet, Text, View } from "react-native";
import SellingDetails from "../component/SellingDetails";
import PrimaryButton from "../component/UI/PrimaryButton";
import SecondaryButton from "../component/UI/SecondaryButton";

function SellingOverviewScreen() {
  function listAnItemHandler() {}
  function editStoreHandler() {}

  return (
    <View style={styles.rootContainer}>
      <View >
        <PrimaryButton onPress={listAnItemHandler} children={"List An Item"} />
        <SecondaryButton children={"Edit Store"} onPress={editStoreHandler} />
        <SellingDetails activeOrders={3} earnings={8000} />
      </View>
      <View>
        <SecondaryButton children={"All orders"} />
        <SecondaryButton children={"View store"} />
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
