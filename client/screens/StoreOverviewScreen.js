import { StyleSheet, Text, View } from "react-native";

function StoreOverviewScreen () {
    return( 
        <View style={styles.rootContainer}>
            <Text>This the Selling screen</Text>
        </View>
    );

}

export default StoreOverviewScreen;

const styles = StyleSheet.create ({
    rootContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})