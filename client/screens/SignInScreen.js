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
import OtherSignInButton from "../component/UI/OtherSignInButton";
import PrimaryButton from "../component/UI/PrimaryButton";
import SecondaryButton from "../component/UI/SecondaryButton";

function SignInScreen() {
  const navigation = useNavigation();

  function createAnAccountPressedHandler() {
    navigation.navigate('SignUpAsaCustomerScreen')
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
              placeholder: "Password",
            }}
          />
        </View>
        <View style={styles.signContainer}>
          <PrimaryButton children={"Sign In"} />
          <Button title="Frogot the password?" />
        </View>
        <View style={styles.footerCOntainer}>
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
          <SecondaryButton children={"Create an account"} onPress={createAnAccountPressedHandler} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignInScreen;

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
});
