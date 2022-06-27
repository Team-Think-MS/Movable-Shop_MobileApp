import { useLayoutEffect, useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import StoreList from "../component/StoreList/StoreList";
//import { STORES, CATEGORIES } from "../data/dummy-data";
import { fetchStores } from "../util/http/store";

function StoreOverviewScreen({ route, navigation }) {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    async function getStores() {
      try {
        const str = await fetchStores();
        setStoreData(str);
      } catch (error) {
        console.log(error);
      }
    }
    getStores();
  }, [navigation]);
  const categoryName = route.params.categoryName;
  const categoryId = route.params.categoryId;

    const selectedStores = storeData.filter(
      (store) => store.categoryId === categoryId
    );


  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryName,
    });
  }, [navigation]);

  return <StoreList stores={selectedStores} />;
}

export default StoreOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {},
});
