import { FlatList, StyleSheet, View } from "react-native";
import CategoryGridTile from "../component/CategoryGridTile";
//import { CATEGORIES } from "../data/dummy-data";
import { fetchCategory } from "../util/http/category";
import { useEffect } from "react";
import { useState } from "react";

function CategoryScreen({ navigation }) {

  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {
    async function getCategories() {
      try {
        const cat = await fetchCategory();
        setCategoryData(cat)
      } catch (error) {
        console.log(error)
      }
    }
    getCategories();
  }, [navigation]);

  function renderCategoryItem(itemData) {
    function categoryPressHandler() {
      navigation.navigate("StoreOverviewScreen", {
        categoryName: itemData.item.categoryName,
        categoryId: itemData.item.categoryId
      });
    }

    return (
      <CategoryGridTile
        picture={itemData.item.picture}
        categoryName={itemData.item.categoryName}
        onPress={categoryPressHandler}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={categoryData}
        keyExtractor={(item) => item.categoryId}
        renderItem={renderCategoryItem}
        numColumns={3}
      />
    </View>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {},
});
