import { StyleSheet, Text, View, Pressable } from "react-native";
import SellingDetails from "../component/SellingDetails";
import PrimaryButton from "../component/UI/PrimaryButton";
import SecondaryButton from "../component/UI/SecondaryButton";
import { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { getOrderByUserId } from "../util/http/order";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../constant/Styles";

function SellingOverviewScreen() {
  const [oredrData, setOredrData] = useState([]);
  const isAuthState = useSelector((state) => state.isAuth.authState);
  const navigation = useNavigation();
  const isAuthUser = !(
    isAuthState &&
    Object.keys(isAuthState).length === 0 &&
    Object.getPrototypeOf(isAuthState) === Object.prototype
  );
  useEffect(() => {
    async function getStores() {
      try {
        const headers = {
          Authorization: "Bearer " + isAuthState.token,
        };
        const odr = await getOrderByUserId({ headers });
        setOredrData(odr);
      } catch (error) {
        console.log(error);
      }
    }
    getStores();
  }, []);

  const subTotalPrice = oredrData
    .map((item) => item.totalPrice)
    .reduce((a, b) => a + b, 0);

  const totalOrders = oredrData.length;

  function listAnItemHandler() {
    navigation.navigate("ProductManageScreen");
  }
  function myProductsHandler() {
    navigation.navigate("MyProducts");
  }

  function editStoreHandler() {
    navigation.navigate("StoreCreateScreen");
  }

  return (
    <View style={styles.rootContainer}>
      {!isAuthUser && (
        <View style={styles.nrootContainer}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              margin: 10,
              fontSize: 30,
            }}
          >
            Hello!
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => {
                navigation.navigate("SignInScreen");
              }}
              style={({ pressed }) => (pressed ? styles.pressed : true)}
            >
              <Text
                style={{
                  color: GlobalStyles.colors.primary500,
                  fontSize: 14,
                }}
              >
                Sign In
              </Text>
            </Pressable>

            <Text
              style={{
                fontSize: 14,
              }}
            >
              {" "}
              to your account or{" "}
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("SignUpAsaSellerScreen");
              }}
              style={({ pressed }) => (pressed ? styles.pressed : true)}
            >
              <Text
                style={{
                  color: GlobalStyles.colors.primary500,
                  fontStyle: "italic",
                  fontSize: 14,
                }}
              >
                Create an account
              </Text>
            </Pressable>
          </View>
        </View>
      )}
      {isAuthUser && isAuthState.role === "s" && (
        <View style={styles.srootContainer}>
          <View>
            <PrimaryButton
              onPress={listAnItemHandler}
              children={"List an item"}
            />
            <SecondaryButton
              children={"My Products"}
              onPress={myProductsHandler}
            />
            <SellingDetails
              activeOrders={totalOrders}
              earnings={subTotalPrice}
            />
          </View>
          <View>
            <SecondaryButton
              children={"Edit my store"}
              onPress={editStoreHandler}
            />
          </View>
        </View>
      )}
      {isAuthUser && isAuthState.role === "c" && (
        <View>
          <Text style={styles.titeletext}>Hey! Don't wait more time!</Text>
          <Text style={styles.decText}>
            Become a our partner, Creating business account.
          </Text>
          <SecondaryButton children={"Become a seller!"} />
        </View>
      )}
    </View>
  );
}

export default SellingOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  nrootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
    marginTop: 10,
  },
  crootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
    marginTop: 10,
  },
  srootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between',
    marginBottom: 80,
    marginTop: 10,
  },
  bottomContainer: {},
  titeletext: {
    color: GlobalStyles.colors.primary500,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  decText: {
    textAlign: "center",
    marginBottom: 40,
  },
  pressed: {
    opacity: 0.45,
  },
});
