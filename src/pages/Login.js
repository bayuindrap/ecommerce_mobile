import React, { useEffect, useState } from 'react';
import { View, StatusBar, KeyboardAvoidingView, Alert } from 'react-native';
import { Button, Icon, Image, Input, SocialIcon, Text } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { API_URL } from "../../helper"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { onLogin } from '../actions'
import { StackActions } from '@react-navigation/native';

const LoginPage = (props) => {
    //useDispatch buat ngejalanin fungsi dari action (buat di functional component), pengganti connect di class component 
    const dispatch = useDispatch()

    const { iduser, usernameReducer } = useSelector((state) => {
        return {
            iduser: state.userReducer.id,
            usernameReducer: state.userReducer.username
        }
    })

    const [splashLogin, setSplashLogin] = useState(false)


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(true)
    const [eye, setEye] = useState("eye-off")


    useEffect(() => {
        if (iduser) {
            props.navigation.dispatch(StackActions.replace("TabNav"))
        }
    })

    setTimeout(() => setSplashLogin(true), 5000)


    const onBtLogin = async () => {

        let respon = await dispatch(onLogin(username, password))
        console.log("test", respon.success)

        if (respon.success > 0) {
            props.navigation.dispatch(StackActions.replace("TabNav"))
        } else {
            Alert.alert("This account is not exist")
        }
    }

    

    const onBtVisible = () => {
        if (visible == false) {
            setVisible(true)
            setEye("eye-off")
        } else if (visible == true) {
            setVisible(false)
            setEye("eye")
        }
    }

    if(splashLogin) {
        
        return (
            <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
                <StatusBar backgroundColor={"white"} barStyle='dark-content' />
                <KeyboardAvoidingView behavior="position">
                    <Image source={require('../assets/login_asset.png')}
                        style={{ height: hp(35) }} />
    
                    <Text h2 style={{ color: "#1B1464" }}>Login</Text>
                    <View style={{ marginVertical: hp(3) }}>
                        <Input placeholder="username"
                            onChangeText={(val) => setUsername(val)}
                            leftIcon={
                                <Icon name="user" type="feather" color="#bdc3c7" />
                            }
                        />
                        <Input placeholder="password"
                            onChangeText={(val) => setPassword(val)}
                            secureTextEntry={visible}
                            leftIcon={
                                <Icon name="lock" type="feather" color="#bdc3c7" />
                            }
                            rightIcon={
                                <Icon name={eye} type="feather" color="#bdc3c7" onPress={onBtVisible} />
    
                            }
                        />
    
                    </View>
                    <Button
                        onPress={onBtLogin}
                        title="Login"
                        containerStyle={{ borderRadius: 10 }}
                        buttonStyle={{ backgroundColor: "#00a8ff" }}
                    />
    
                    <Text style={{ textAlign: "center", color: "gray", marginVertical: hp(3) }}>OR</Text>
                    <Button
                        title="Login with Google"
                        containerStyle={{ borderRadius: 10 }}
                        titleStyle={{ color: "black" }}
                        icon={<SocialIcon type="google" iconSize={10} raised={false} />}
                        buttonStyle={{ backgroundColor: "#ecf0f1" }}
                    />
    
                    <View style={{ marginTop: hp(2), marginBottom: hp(2) }}>
                        <Text style={{ textAlign: "center" }}>
                            No account?
                            <Text
                                style={{ fontWeight: "bold", color: "#00a8ff" }}
                                onPress={() => props.navigation.navigate("Register")}
                            >Register</Text>
                        </Text>
                    </View>
                </KeyboardAvoidingView>
    
            </View>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
            <StatusBar backgroundColor={"white"} barStyle='dark-content' />
            <Image 
            style={{width: wp(50), height: hp(20)}}
            source={require('../assets/e-commerce.png')}
            />

        </View>
    )



}
export default LoginPage;