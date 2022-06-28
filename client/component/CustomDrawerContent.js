import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import DrawerButton from "./UI/DrawerButton";
import { GlobalStyles } from "../constant/Styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { isAuthActions } from "../store/Redux/isAuth-slice";

function CustomDrawerContent(props) {
  const isAuthState = useSelector((state) => state.isAuth.authState);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isAuthUser = !(
    isAuthState &&
    Object.keys(isAuthState).length === 0 &&
    Object.getPrototypeOf(isAuthState) === Object.prototype
  );
  function signInPressedHandler() {
    if(!isAuthUser ) {
      navigation.navigate("SignInScreen");
    }
    return;
  }
  function logOutPressedHandler() {
      dispatch(isAuthActions.removeAuth())
      navigation.navigate("HomeScrenn");
  }
  return (
    <DrawerContentScrollView {...props} style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.signInButtonContainer,
          pressed ? styles.pressed : true,
        ]}
        onPress={signInPressedHandler}
      >
        <Feather name="user" size={45} color="black" />
        {!isAuthUser && <Text style={styles.userText}>Sign In</Text>}
        {isAuthUser && (
          <Text style={styles.userText}>{isAuthState.userName}</Text>
        )}
      </Pressable>
      <View style={styles.mainContainer}>
        <DrawerButton
          iconName={"home-outline"}
          title={"Home"}
          onPress={() => props.navigation.navigate("Home Screnn")}
        />
        <DrawerButton iconName={"ios-chatbubbles-outline"} title={"Messeges"} />
      </View>
      <View style={styles.myAccount}>
        <Text style={styles.myAccountText}>My Account</Text>
        <DrawerButton
          iconName={"heart-outline"}
          title={"Wish List"}
          onPress={() => props.navigation.navigate("Wish List")}
        />
        <DrawerButton iconName={"file-tray-full-outline"} title={"Purchases"} />
        <DrawerButton
          iconName={"pricetags-outline"}
          title={"Selling"}
          onPress={() => props.navigation.navigate("Selling Managment")}
        />
      </View>
      <View style={styles.footerContainer}>
        <DrawerButton
          iconName={"grid-outline"}
          title={"Categories"}
          onPress={() => props.navigation.navigate("Categories")}
        />
        <DrawerButton iconName={"settings-outline"} title={"Settings"} />
        <DrawerButton iconName={"help-circle-outline"} title={"Help"} />
        { isAuthUser && <Button title="Log Out" color={"red"} onPress={logOutPressedHandler}/>}
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 20,
  },
  signInButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  userText: {
    fontSize: 25,
    marginLeft: "15%",
  },
  mainContainer: {
    borderBottomColor: GlobalStyles.colors.gray200,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  myAccount: {
    borderBottomColor: GlobalStyles.colors.gray200,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  myAccountText: {
    fontSize: 15,
    color: GlobalStyles.colors.gray200,
    fontWeight: "700",
    marginVertical: 5,
  },
  footerContainer: {
    paddingVertical: 10,
  },
  pressed: {
    opacity: 0.45,
  },
});
