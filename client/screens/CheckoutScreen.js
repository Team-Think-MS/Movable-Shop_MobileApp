import { View, Text, StyleSheet } from 'react-native';

function CheckoutScreen({navigation, route}) {
    const subTotal = route.params.subtot
return (<View>
    <Text>sub total {subTotal} </Text>
</View>);
}

export default CheckoutScreen;

const styles = StyleSheet.create({

})