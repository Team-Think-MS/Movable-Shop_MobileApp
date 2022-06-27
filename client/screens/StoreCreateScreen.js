import { View, StyleSheet, Text } from "react-native";
import StoreForm from "../component/StoreManage/StoreForm";
import { getStoreByUserId } from "../util/http/store";
import { useState, useEffect } from 'react';

function StoreCreateScreen({route}) {
  const editedStoreUserId = route.params?.id;

  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    async function getStores() {
      try {
        const str = await getStoreByUserId();
        setStoreData(str);
      } catch (error) {
        console.log(error);
      }
    }
    getStores();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <StoreForm defaultInputData={storeData}/>
    </View>
  );
}

export default StoreCreateScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
