import { View, StyleSheet, Text } from "react-native";
import StoreForm from "../component/StoreManage/StoreForm";
import { getStoreByUserId } from "../util/http/store";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

function StoreCreateScreen() {
  const isAuthState = useSelector((state) => state.isAuth.authState);

  const [storeData, setStoreData] = useState({});

  const isGotdata = !(
    storeData &&
    Object.keys(storeData).length === 0 &&
    Object.getPrototypeOf(storeData) === Object.prototype
  );

  useEffect(() => {
    async function getStores() {
      try {
        const headers = {
          Authorization: "Bearer " + isAuthState.token,
        };
        const str = await getStoreByUserId({headers});
        setStoreData(str);
      } catch (error) {
        console.log(error);
      }
    }
    getStores();
  }, []);
  console.log(storeData)

  return (
    <View style={styles.rootContainer}>
      { isGotdata && <StoreForm defaultInputData={storeData}/>}
      { !isGotdata && <StoreForm defaultInputData={{}}/>}
    </View>
  );
}

export default StoreCreateScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
