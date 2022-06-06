import { FlatList, StyleSheet, View } from "react-native";
import CategoryGridTile from "../component/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function categoryPressHandler() {
      navigation.navigate("StoreOverviewScreen", {
        categoryID: itemData.item.categoryId,
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
        data={CATEGORIES}
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
