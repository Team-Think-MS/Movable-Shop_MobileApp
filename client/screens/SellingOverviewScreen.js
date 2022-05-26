import { StyleSheet, Text, View } from "react-native";

function SellingOverviewScreen () {
    return( 
        <View style={styles.rootContainer}>
            <Text>This the Selling screen</Text>
        </View>
    );

}

export default SellingOverviewScreen;

const styles = StyleSheet.create ({
    rootContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})