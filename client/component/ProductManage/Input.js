import { TextInput, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constant/Styles';

function Input ({label, textInputConfig, style, invalid}) {
return(
    <View style={styles.inputContainer}>
        <TextInput {...textInputConfig} style={styles.textInput}/>
        <Text style={styles.label}>{label}</Text>
    </View>
)
}

export default Input;

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal: 10,
    },
    textInput: {
        margin: 5,
        padding: 5,
        borderBottomWidth: 1,
        fontSize: 18,
        borderColor: GlobalStyles.colors.gray200
    },
    label: {
        margin: 5,
        fontSize: 16,
    } 
})
