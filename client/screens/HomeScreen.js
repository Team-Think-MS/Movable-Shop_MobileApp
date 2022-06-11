import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Pressable,
} from "react-native";
import CategoryGridTile from "../component/CategoryGridTile";
import StoreCardHome from "../component/StoreList/StoreCardHome";
import { Ionicons } from "@expo/vector-icons";
import { STORES, CATEGORIES } from "../data/dummy-data";
import { GlobalStyles } from "../constant/Styles";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();
  function renderCategorieHandler(itemData) {
    return (
      <CategoryGridTile
        picture={itemData.item.picture}
        categoryName={itemData.item.categoryName}
      />
    );
  }
  function renderStoresHandler(itemData) {
    return (
      <StoreCardHome
        picture={itemData.item.picture}
        storeName={itemData.item.storeName}
        storeid={itemData.item.storeId}
      />
    );
  }

  function popularCategoryPressHandler() {
    navigation.navigate("StoreOverviewScreen", {
      categoryID: itemData.item.categoryId,
    })
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Image
              style={styles.image}
              source={{
                uri: "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?w=2000",
              }}
            />
            <View style={styles.allCategories}>
              <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.categoryId}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(itemData) => {
                  function categoryPressHandler() {
                    navigation.navigate("StoreOverviewScreen", {
                      categoryID: itemData.item.categoryId,
                    });
                  }
                  return (
                    <Pressable
                      style={({ pressed }) => [
                        styles.allCategoriresButton,
                        pressed ? styles.pressed : null,
                      ]}
                      onPress={categoryPressHandler}
                    >
                      <Text style={styles.allCategoriresButtonText}>
                        {itemData.item.categoryName}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>
            <View style={styles.menueContainer}>
              <Text style={styles.menueText}>Nearby Stors</Text>
              <Ionicons
                name="arrow-forward-circle-outline"
                size={24}
                color="black"
              />
            </View>
            <FlatList
              data={STORES}
              keyExtractor={(item) => item.storeId}
              renderItem={renderStoresHandler}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.menueContainer}>
              <Text style={styles.menueText}>Most Popular Categories</Text>
              <Ionicons
                name="arrow-forward-circle-outline"
                size={24}
                color="black"
              />
            </View>
          </View>
        )}
        data={CATEGORIES}
        keyExtractor={(item) => item.categoryId}
        renderItem={renderCategorieHandler}
        numColumns={3}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 250,
    marginVertical: 10,
  },
  menueContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  menueText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 15,
  },
  allCategories: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: GlobalStyles.colors.gray200,
  },
  allCategoriresButton: {
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: GlobalStyles.colors.gray150,
    paddingHorizontal: 18,
    paddingVertical: 5,
    borderRadius: 15,
  },
  allCategoriresButtonText: {
    fontSize: 14,
  },
  pressed: {
    opacity: 0.75,
  },
});
