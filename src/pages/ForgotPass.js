import React, { useState } from "react";
import axios from "axios";
import { Image, Icon, Text, Input, Button } from "react-native-elements";
import { View, StatusBar } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const ForgotPass = (props) => {

    return (

        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
            <StatusBar backgroundColor={"white"} barStyle='dark-content' />
            <Icon raised
                name="arrow-left" type="feather" containerStyle={{ position: "absolute" }} size={20} color="black" />
            <Image source={require('../assets/forgot_asset.png')}
                style={{ height: hp(35) }} />
            <Text h1>Forgot Password?</Text>

            <View style={{ marginVertical: 5 }}>
                <Text>
                    Don't Worry! it happens. Please enter the address associated with your account.
                </Text>
            </View>

            <View style={{paddingVertical: 50}}>
                <Input
                    placeholder="Email id / Phone number"
                    leftIcon={<Icon name="at-sign" type="feather" />}
                />
            </View>

            <Button
                    title="Submit"
                    containerStyle={{ borderRadius: 10 }}
                    buttonStyle={{ backgroundColor: "#00a8ff" }}
                />




        </View>

    )

}


export default ForgotPass;