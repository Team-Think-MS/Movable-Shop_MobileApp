import React from "react";
import {View, Text, StyleSheet, TextInput, Button, Alert} from "react-native";


function SignIn() {
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{
                flex: 1,
                justifyContent: "flex-end",
                paddingBottom: 70,
            }}>
                <Text style={{ fontSize:25 }} >Sign in to your account</Text>
            </View>
            <View style={{flex: 2}}>
                <View style={{flex: 1, justifyContent: "flex-start"}}>
                    <View >
                        <Text>Email</Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Type your email address!"
                        />
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Type your password!"
                        />
                    </View>
                </View>
                <View style={styles.signinbutton}>
                    <Button
                        title="Sign In"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Text>Forgot the password?</Text>
                    <Text>or continue with</Text>
                    <View>
                        <Text>Don’t have an account? Sign In</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    signinbutton: {
        flex: 1,
    }
});


export default SignIn;