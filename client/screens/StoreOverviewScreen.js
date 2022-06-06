import { useLayoutEffect } from "react";
import { StyleSheet, Text } from "react-native";
import StoreList from "../component/StoreList/StoreList";
import { STORES, CATEGORIES } from "../data/dummy-data";

function StoreOverviewScreen({ route, navigation }) {
  const categoryid = route.params.categoryID;
  const selectedStores = STORES.filter(
    (store) => store.categoryId.indexOf(categoryid) >= 0
  );

  useLayoutEffect(() => {
    const categoryname = CATEGORIES.find(
      (category) => category.categoryId === categoryid
    ).categoryName;

    navigation.setOptions({
      title: categoryname,
    });
  }, [categoryid, navigation]);

  return <StoreList stores={selectedStores} />;
}

export default StoreOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {},
});
