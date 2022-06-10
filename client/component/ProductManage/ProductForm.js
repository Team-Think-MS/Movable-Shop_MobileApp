import { View, Text, TextInput, StyleSheet } from 'react-native';
import Input from './Input';
 
function ProductForm ({defaultInputData}) {
    return(
    <View style={styles.rootContainer}>
        <Input label={'Title'}/>
        <Input label={'Description'} textInputConfig={{
            multiline: true
        }}/>
        <Input label={'Price'}/>       
    </View>
    );
}

export default ProductForm;

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 10
    },

})