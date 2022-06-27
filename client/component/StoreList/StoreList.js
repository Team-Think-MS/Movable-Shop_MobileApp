import { View, FlatList, StyleSheet } from "react-native";

import StoreCard from "./StoreCard";

function StoreList({ stores }) {
  function renderStoreList(itemData) {
    return (
      <StoreCard
        storeName={itemData.item.storeName}
        picture={itemData.item.picture}
        storeid={itemData.item.storeId}
        description={itemData.item.description}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={stores}
        renderItem={renderStoreList}
        keyExtractor={(item) => item.storeId}
      
      />
    </View>
  );
}

export default StoreList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
