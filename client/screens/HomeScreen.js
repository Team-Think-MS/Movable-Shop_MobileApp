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
import { GlobalStyles } from "../constant/Styles";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { fetchCategory } from "../util/http/category";
import { fetchStores } from "../util/http/store";

function HomeScreen() {
  const [categoryData, setCategoryData] = useState([]);
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const cat = await fetchCategory();
        setCategoryData(cat);
      } catch (error) {
        console.log(error);
      }
    }
    async function getStores() {
      try {
        const str = await fetchStores();
        setStoreData(str);
      } catch (error) {
        console.log(error);
      }
    }
    getStores();
    getCategories();
  }, [navigation]);

  const navigation = useNavigation();
  function renderCategorieHandler(itemData) {
    function popularCategoryPressHandler() {
      navigation.navigate("StoreOverviewScreen", {
        categoryName: itemData.item.categoryName,
        categoryId: itemData.item.categoryId,
      });
    }
    return (
      <CategoryGridTile
        picture={itemData.item.picture}
        categoryName={itemData.item.categoryName}
        onPress={popularCategoryPressHandler}
      />
    );
  }
  function renderStoresHandler(itemData) {
    return (
      <StoreCardHome
        picture={itemData.item.picture}
        storeName={itemData.item.storeName}
        storeid={itemData.item.storeId}
        description={itemData.item.description}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Image
              style={styles.image}
              source={{
                uri: "https://lh3.googleusercontent.com/iXSbg0LQjhgnG0h5HJLpGk49Nhg6MUz16XOgoyfmHkMcD478blh0N7pmbV6aiBLCSTkygDAv5TPj2F1mSCesyR_JsaNDf9Nqs9b5XQQ0_IKqBqbDR2Z4dQzZKmglFMYhCjIRBqsBYybIj3va5A",
              }}
            />
            <View style={styles.allCategories}>
              <FlatList
                data={categoryData}
                keyExtractor={(item) => item.categoryId}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(itemData) => {
                  function categoryPressHandler() {
                    navigation.navigate("StoreOverviewScreen", {
                      categoryName: itemData.item.categoryName,
                      categoryId: itemData.item.categoryId,
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
              data={storeData}
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
        data={categoryData}
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
    height: 200,
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
