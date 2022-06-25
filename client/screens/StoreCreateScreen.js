import { View, StyleSheet, Text } from "react-native";
import StoreForm from "../component/StoreManage/StoreForm";
import PrimaryButton from "../component/UI/PrimaryButton";

function StoreCreateScreen() {
  return (
    <View style={styles.rootContainer}>
      <StoreForm />
    </View>
  );
}

export default StoreCreateScreen;

const styles = StyleSheet.create({
  rootContainer: {
        flex: 1,
  },

});
