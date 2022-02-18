import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";


function SignIn() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitData = () => {
        fetch('http://10.0.2.2:3006/signin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
        .then(res=>res.json())    
        .then(data=>{
            console.log(data);
            console.log('data passed1');
        })   
        console.log('data passed2');
    }
  
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
                            Value={email}
                            onChangeText={text =>setEmail(text)}
                            style={{height: 40}}
                            placeholder="Type your email address!"
                        />
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput
                            Value={password}
                            onChangeText={text =>setPassword(text)}
                            style={{height: 40}}
                            placeholder="Type your passwordsi!"
                        />
                    </View>
                </View>
                <View style={styles.signinbutton}>
                    <Button
                        title="Sign In"
                        onPress={submitData()}
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