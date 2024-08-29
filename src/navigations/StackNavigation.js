import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onKeepLogin } from "../actions";
import Account from "../pages/Account";
import DetailProduct from "../pages/Detail";
import DetailTransaction from "../pages/DetailTransaction";
import History from "../pages/History";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import TabNavigation from "./TabNavigation";




const Stack = createNativeStackNavigator()

const StackNavigation = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(onKeepLogin())
    }, [])

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="TabNav" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailProduct} options={{ headerShown: false }} />
            <Stack.Screen name="History" component={History}  />
            <Stack.Screen name="Detail Transaction" component={DetailTransaction}  />
            <Stack.Screen name="Account Detail" component={Account}  />
        </Stack.Navigator>

    )
}

export default StackNavigation;