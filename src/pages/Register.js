import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from "../../helper"
import { View, StatusBar, KeyboardAvoidingView, Alert } from 'react-native';
import { Button, Icon, Image, Input, SocialIcon, Text } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux'
import { onRegister } from '../actions';
import { StackActions } from '@react-navigation/native';



const RegisterPage = (props) => {

    const [visible, setVisible] = useState(true)
    const [eye, setEye] = useState("eye-off")
    const [username, setInUsername] = useState('')
    const [email, setInEmail] = useState('')
    const [password, setInPassword] = useState ('')



    const onBtVisible = () => {
        if (visible == false) {
            setVisible(true)
            setEye("eye-off")
        } else if(visible == true) {
            setVisible(false)
            setEye("eye")
        }
    }

    const dispatch = useDispatch()

    const onBtRegister = async () => {

        // axios.post(`${API_URL}/dataUser`, {
        //     username: username,
        //     email: email,
        //     password: password,
        //     role: "user",
        //     cart: [],
        //     status: "Active"
        // }).then ((res) => {
        //     console.log("test register", res.data)
        // }).catch ((err) => {
        //     console.log(err)
        // })
        let res = await dispatch (onRegister(email, username, password))
        if (res.success > 0) {
            Alert.alert(null, `${username} , Registrasi Berhasil✔` ,
            [
                {
                    text: "to Login Page",
                    onPress: () => props.navigation.dispatch(StackActions.replace("Login"))
                }

            ])
        } else {
            Alert.alert("Registrasi Gagal, data Belum lengkap ❌")
        }
    
    }

    // if(respon.success>0){
    //     Alert.alert("Success", "Registration Successfully",
    //     [
    //         {
    //             text:"To Login Page",
    //             onPress:()=>props.navigation.dispatch(StackActions.replace("Login"))
    //         }
    //     ])
    // }else{
    //     Alert.alert("Belom Lengkap")
    // }


    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
            <StatusBar backgroundColor={"white"} barStyle='dark-content' />
            <KeyboardAvoidingView behavior='position'>
            <Icon
                name="arrow-left" 
                type="font-awesome" 
                containerStyle={{ position: "absolute", zIndex: 10 }}
                 color="#1B1464" 
                onPress={() => props.navigation.goBack()}
                />
            <Image source={require('../assets/register_asset.png')}
                style={{ height: hp(35) }} />
            <Text h2 style={{ color: "#1B1464" }}>Register</Text>

            <View style={{ marginVertical: hp(3) }}>
                <Input placeholder="Username"
                    onChangeText={(val) => setInUsername(val)}
                    leftIcon={
                        <Icon name="user" type="feather" color="#bdc3c7" />
                    }

                />
                <Input placeholder="Email"
                    onChangeText={(val) => setInEmail(val)}
                    leftIcon={
                        <Icon name="at-sign" type="feather" color="#bdc3c7" />
                    }
                />
                <Input placeholder="Password"
                    onChangeText={(val) => setInPassword(val)}
                    secureTextEntry={visible}
                    leftIcon={
                        <Icon name="lock" type="feather" color="#bdc3c7" />
                    }
                    rightIcon={
                        <Icon name={eye} type="feather" color="#bdc3c7" onPress={onBtVisible}/>

                    }
                />
                <View >
                    <Text style={{ textAlign: "center" }}>
                        By signing up, you're agree to our
                        <Text style={{ fontWeight: "bold", color: "#00a8ff" }}>Terms, Condition and Privacy Policy</Text>
                    </Text>
                </View>

                <Button
                onPress={onBtRegister}
                    title="Register"
                    containerStyle={{ borderRadius: 10 }}
                    buttonStyle={{ backgroundColor: "#00a8ff" }}
                />

                <Text style={{ textAlign: "center" }}>
                    Joined us Before?
                    <Text style={{ fontWeight: "bold", color: "#00a8ff" }}
                    onPress={() => props.navigation.navigate("Login")}
                    >Login</Text>
                </Text>
            </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default RegisterPage;