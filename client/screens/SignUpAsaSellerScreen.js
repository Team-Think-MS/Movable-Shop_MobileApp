import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import SignInSignUpInput from "../component/SignInSignUpInput";
import PrimaryButton from "../component/UI/PrimaryButton";


function SignUpAsaSellerScreen() {
  const navigation = useNavigation();

  function signInPressedHandler() {
    navigation.navigate("SignInScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.rootContainer}>
        <Text style={styles.headerTitel}>Sign in your account!</Text>
        <View style={styles.inputContainer}>
          <SignInSignUpInput
            textInputConfig={{
              placeholder: "Email",
            }}
          />
          <SignInSignUpInput
            textInputConfig={{
              placeholder: "First name",
            }}
          />
          <SignInSignUpInput
            textInputConfig={{
              placeholder: "Last Name",
            }}
          />
          <SignInSignUpInput
            textInputConfig={{
              placeholder: "Phone Number",
            }}
          />
          <SignInSignUpInput
            textInputConfig={{
              placeholder: "Chose a new Password",
            }}
          />
          <SignInSignUpInput
            textInputConfig={{
              placeholder: "Confirm the password",
            }}
          />
        </View>
        <View style={styles.signContainer}>
          <PrimaryButton children={"Sign Up"} />
          <View style={styles.signUpContainer}>
            <Text>Already have an account? </Text>
            <Button title="Sign In" onPress={signInPressedHandler} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignUpAsaSellerScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginBottom: 60,
  },
  headerTitel: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
  },
  inputContainer: {},
  signContainer: {
    alignItems: "center",
  },
  footerCOntainer: {
    alignItems: "center",
  },
  otherSignInCOntainer: {
    flexDirection: "row",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
