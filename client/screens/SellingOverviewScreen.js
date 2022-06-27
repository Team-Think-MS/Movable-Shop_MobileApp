import { StyleSheet, Text, View } from "react-native";
import SellingDetails from "../component/SellingDetails";
import PrimaryButton from "../component/UI/PrimaryButton";
import SecondaryButton from "../component/UI/SecondaryButton";
import { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { getOrderByUserId } from "../util/http/order";

function SellingOverviewScreen() {
  const [oredrData, setOredrData] = useState([]);

  useEffect(() => {
    async function getStores() {
      try {
        const odr = await getOrderByUserId();
        setOredrData(odr);
      } catch (error) {
        console.log(error);
      }
    }
    getStores();
  }, [navigation]);

  const navigation = useNavigation();

  const subTotalPrice = oredrData
  .map((item) => item.totalPrice)
  .reduce((a, b) => a + b, 0);

  const totalOrders = oredrData.length
  

  function listAnItemHandler() {
    navigation.navigate("ProductManageScreen");
  }
  function myProductsHandler() {
    navigation.navigate("MyProducts");
  }

  function editStoreHandler() {
    navigation.navigate("StoreCreateScreen", {id : oredrData[1].userId});
  }

  return (
    <View style={styles.rootContainer}>
      <View>
        <PrimaryButton onPress={listAnItemHandler} children={"List an item"} />
        <SecondaryButton children={"My Products"} onPress={myProductsHandler} />
        <SellingDetails activeOrders={totalOrders} earnings={subTotalPrice} />
      </View>
      <View>
        <SecondaryButton children={"Edit my store"} onPress={editStoreHandler} />
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
    marginTop: 10,
  },
  bottomContainer: {},
});
