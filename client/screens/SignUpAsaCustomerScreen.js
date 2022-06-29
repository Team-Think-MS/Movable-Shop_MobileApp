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
import { useState } from "react";
import { GlobalStyles } from "../constant/Styles";
import { isAuthActions } from "../store/Redux/isAuth-slice";
import { useDispatch } from "react-redux";
import Axios from "axios";


function SignUpAsaCustomerScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: {
      value: "",
      isValid: true,
    },
    userName: {
      value: "",
      isValid: true,
    },
    fName: {
      value: "",
      isValid: true,
    },
    lName: {
      value: "",
      isValid: true,
    },
    phoneNumber: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
      isPasswordMatch: true,
    },
    cPassword: {
      value: "",
      isValid: true,
      isPasswordMatch: true,
    },
  });

  function inputChangeHandler(identifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [identifier]: {
          value: enteredValue,
          isValid: true,
          isPasswordMatch: true,
        },
      };
    });
  }

  function signUpPressedHandler() {
    const userData = {
      email: inputs.email.value,
      userName: inputs.userName.value,
      fName: inputs.fName.value,
      lName: inputs.lName.value,
      phoneNumber: inputs.phoneNumber.value,
      password: inputs.password.value,
      cPassword: inputs.cPassword.value,
    };

    const isEmailValid = userData.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    const isUserNameValid = userData.userName.trim().length > 0;
    const isfNameValid = userData.fName.trim().length > 0;
    const islNameValid = userData.lName.trim().length > 0;
    const isPhoneNumberValid =
      !isNaN(userData.phoneNumber) &&
      userData.phoneNumber.length === 10 &&
      userData.phoneNumber > 0;
    const isPasswordValid =
      userData.password.match(/[a-z]/g) &&
      userData.password.match(/[A-Z]/g) &&
      userData.password.match(/[0-9]/g) &&
      userData.password.match(/[^a-zA-Z\d]/g) &&
      userData.password.length >= 8 > 0;
    const iscPasswordValid =
      userData.cPassword.match(/[a-z]/g) &&
      userData.cPassword.match(/[A-Z]/g) &&
      userData.cPassword.match(/[0-9]/g) &&
      userData.cPassword.match(/[^a-zA-Z\d]/g) &&
      userData.cPassword.length >= 8 > 0;
    const isPasswordSameValid = userData.password === userData.cPassword;

    if (
      !isEmailValid ||
      !isUserNameValid ||
      !isfNameValid ||
      !islNameValid ||
      !isPasswordValid ||
      !iscPasswordValid ||
      !isPhoneNumberValid ||
      !isPasswordSameValid
    ) {
      setInputs((curInputs) => {
        return {
          email: {
            value: curInputs.email.value,
            isValid: isEmailValid,
          },
          userName: {
            value: curInputs.userName.value,
            isValid: isUserNameValid,
          },
          fName: {
            value: curInputs.fName.value,
            isValid: isfNameValid,
          },
          lName: {
            value: curInputs.lName.value,
            isValid: islNameValid,
          },
          phoneNumber: {
            value: curInputs.phoneNumber.value,
            isValid: isPhoneNumberValid,
          },
          password: {
            value: curInputs.password.value,
            isValid: isPasswordValid,
            isPasswordMatch: isPasswordSameValid,
          },
          cPassword: {
            value: curInputs.cPassword.value,
            isValid: iscPasswordValid,
            isPasswordMatch: isPasswordSameValid,
          },
        };
      });
      return;
    }

    Axios.put("http://localhost:3000/auth/signup", {
      email: userData.email,
      userName: userData.userName,
      fName: userData.fName,
      lName: userData.lName,
      password: userData.password,
      phoneNumber: userData.phoneNumber,
      role: "c",
      location: "test",
      address: "test",
    })
      .then((response) => {
        const data = response.data;
        dispatch(isAuthActions.setAuth({ data: data }));
        navigation.navigate("HomeScrenn");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const formIsInvalid =
    !inputs.email.isValid ||
    !inputs.fName.isValid ||
    !inputs.lName.isValid ||
    !inputs.password.isValid ||
    !inputs.cPassword.isValid ||
    !inputs.phoneNumber.isValid ||
    !inputs.userName.isValid;

  const passwordIsNotMatched =
    !inputs.password.isPasswordMatch && !inputs.cPassword.isPasswordMatch;

  function signInPressedHandler() {
    navigation.navigate("SignInScreen");
  }
  function createAnBusinessPressedHandler() {
    navigation.navigate("SignUpAsaSellerScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.rootContainer}>
        <Text style={styles.headerTitel}>Create an account!</Text>
        <View style={styles.inputContainer}>
          <SignInSignUpInput
            invalid={!inputs.email.isValid}
            textInputConfig={{
              placeholder: "Email",
              onChangeText: inputChangeHandler.bind(this, "email"),
              value: inputs.email.value,
            }}
          />
          <SignInSignUpInput
            invalid={!inputs.userName.isValid}
            textInputConfig={{
              placeholder: "User Name",
              onChangeText: inputChangeHandler.bind(this, "userName"),
              value: inputs.userName.value,
            }}
          />
          <SignInSignUpInput
            invalid={!inputs.fName.isValid}
            textInputConfig={{
              placeholder: "First name",
              onChangeText: inputChangeHandler.bind(this, "fName"),
              value: inputs.fName.value,
            }}
          />
          <SignInSignUpInput
            invalid={!inputs.lName.isValid}
            textInputConfig={{
              placeholder: "Last Name",
              onChangeText: inputChangeHandler.bind(this, "lName"),
              value: inputs.lName.value,
            }}
          />
          <SignInSignUpInput
            invalid={!inputs.phoneNumber.isValid}
            textInputConfig={{
              placeholder: "Phone Number",
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "phoneNumber"),
              value: inputs.phoneNumber.value,
            }}
          />
          <SignInSignUpInput
            invalid={!inputs.password.isValid}
            textInputConfig={{
              placeholder: "Chose a new Password",
              secureTextEntry: true,
              onChangeText: inputChangeHandler.bind(this, "password"),
              value: inputs.password.value,
            }}
          />
          <SignInSignUpInput
            invalid={!inputs.cPassword.isValid}
            textInputConfig={{
              placeholder: "Confirm the password",
              secureTextEntry: true,
              onChangeText: inputChangeHandler.bind(this, "cPassword"),
              value: inputs.cPassword.value,
            }}
          />
        </View>
        <View style={styles.signUpContainer}>
          {passwordIsNotMatched && (
            <Text style={styles.errorText}>
              You entered passwords are not same!
            </Text>
          )}
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values - please check your entered data!
            </Text>
          )}
          <PrimaryButton children={"Sign Up"} onPress={signUpPressedHandler} />
          <Button
            title="Create a business account"
            onPress={createAnBusinessPressedHandler}
          />
          <View style={styles.signInContainer}>
            <Text>Already have an account? </Text>
            <Button title="Sign In" onPress={signInPressedHandler} />
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
    marginTop: 6,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error400,
    margin: 8,
  },
});
