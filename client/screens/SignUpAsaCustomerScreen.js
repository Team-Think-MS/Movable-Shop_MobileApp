import {
  StyleSheet,
  View,
  Text,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignInSignUpInput from "../component/SignInSignUpInput";
import OtherSignInButton from "../component/UI/OtherSignInButton";
import PrimaryButton from "../component/UI/PrimaryButton";

function SignUpAsaCustomerScreen() {
    const navigation = useNavigation();

    function signInPressedHandler() {
      navigation.navigate("SignInScreen");
    }
    function createAnBusinessPressedHandler(){
        navigation.navigate('SignUpAsaSellerScreen')
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.rootContainer}>
        <Text style={styles.headerTitel}>Create an account!</Text>
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
              placeholder: "Chose a new Password",
            }}
          />
          <SignInSignUpInput
            textInputConfig={{
              placeholder: "Confirm the password",
            }}
          />
        </View>
        <View style={styles.signUpContainer}>
          <PrimaryButton children={"Sign Up"} />
          <Button title="Create a business account"  onPress={createAnBusinessPressedHandler}/>
          <View style={styles.signInContainer}>
            <Text>Already have an account? </Text>
            <Button title="Sign In" onPress={signInPressedHandler}/>
          </View>
        </View>

        <View style={styles.otherSignInCOntainer}>
          <OtherSignInButton
            children={"Sign in with Google"}
            icon={"logo-google"}
          />
          <OtherSignInButton
            children={"Sign in with Facebook"}
            icon={"logo-facebook"}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignUpAsaCustomerScreen;

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
  signUpContainer: {
    alignItems: "center",
  },
  otherSignInCOntainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
