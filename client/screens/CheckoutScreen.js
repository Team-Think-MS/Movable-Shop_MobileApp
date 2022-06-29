import { View, Text, StyleSheet, Button } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { useState, useEffect } from "react";
import PrimaryButton from "../component/UI/PrimaryButton";
import { GlobalStyles } from "../constant/Styles";

function CheckoutScreen({ navigation, route }) {
  const { confirmPayment } = useStripe();

  const [key, setKey] = useState("");

  const handleConfirmation = async () => {
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("intent", res);
        setKey(res.clientSecret);
      })
      .catch((e) => Alert.alert(e.message));
    if (key) {
      const { paymentIntent, error } = await confirmPayment(key, {
        type: "Card",
        billingDetails: {
          email: "John@email.com",
        },
      });

      if (!error) {
        Alert.alert("Received payment", `Billed for ${paymentIntent?.amount}`);
      } else {
        Alert.alert("Error", error.message);
      }
    }
  };

  const subTotal = route.params.subtot;
  return (
    <View style={styles.rootContainer}>
      
      <View>
        <Text style={styles.tittle}>Add your card details!</Text>
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          style={{
            width: "100%",
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            console.log("cardDetails", cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log("focusField", focusedField);
          }}
        />
       
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sub Total :</Text>
        <Text style={styles.text}>Rs.{subTotal}.00</Text>
      </View>
      <View style={styles.button}>
             <PrimaryButton children={"Complete payment"} />
        </View>
    </View>
  );
}

export default CheckoutScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 150,
    marginTop: 200
  },
  textContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: GlobalStyles.colors.gray200,
    borderBottomWidth: 1
  },
  text: {
    fontSize: 18
  },
  button: {
    alignItems: 'center'
  },
  tittle: {
    marginLeft: 20,
    fontSize: 18,
    color: GlobalStyles.colors.primary500
  }
});
