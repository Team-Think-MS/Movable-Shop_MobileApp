import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
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
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { isAuthActions } from "../store/Redux/isAuth-slice";
import { GlobalStyles } from "../constant/Styles";

function SignInScreen() {
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const isAuthState = useSelector((state)=> state.isAuth.authState);
  const [isValidInput, setIsValidInput] = useState(true);

  function inputEmailChangeHandler(enteredValue) {
    setEmailInput(enteredValue);
  }
  function inputPasswordChangeHandler(enteredValue) {
    setPasswordInput(enteredValue);
  }

  function submitHandler() {
    const loginData = {
      email: emailInput,
      password: passwordInput,
    };
    Axios.post("http://localhost:3000/auth/login", {
      email: loginData.email,
      password: loginData.password,
    })
      .then((response) => {
        const data = response.data;
        setIsValidInput(true)
        dispatch(isAuthActions.setAuth({data: data}));
        navigation.navigate("HomeScrenn");
      })
      .catch((error) => {
        setIsValidInput(false)
        console.log(error);
      });  
  }

  function testHandler() {
  }
  const navigation = useNavigation();

  function createAnAccountPressedHandler() {
    navigation.navigate("SignUpAsaCustomerScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.rootContainer}>
        <Text style={styles.headerTitel}>Sign in your account!</Text>
        <View style={styles.inputContainer}>
          <SignInSignUpInput
            textInputConfig={{
              placeholder: "Email",
              onChangeText: inputEmailChangeHandler,
              value: emailInput,
            }}
          />
          <SignInSignUpInput
            textInputConfig={{
              placeholder: "Password",
              onChangeText: inputPasswordChangeHandler,
              value: passwordInput,
              secureTextEntry: true
            }}
          />
        </View>
        <View style={styles.signContainer}>
        {!isValidInput && <Text style={styles.errorText}>Invalid login details! Please re-enter.</Text>}
          <PrimaryButton children={"Sign In"} onPress={submitHandler} />
   
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
          <SecondaryButton
            children={"Create an account"}
            onPress={createAnAccountPressedHandler}
          />
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
  errorText: {
    color: GlobalStyles.colors.error400
  }
});
