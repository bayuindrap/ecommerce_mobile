// import AsyncStorageLib from "@react-native-async-storage/async-storage";
// import React, { useEffect, useState } from "react";
// import { StatusBar, View } from "react-native";
// import { Text, Avatar, Badge, Icon, ButtonGroup, ListItem } from "react-native-elements";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { useSelector, useDispatch } from "react-redux";
// import { logoutAction, logOutAction } from "../actions";


// const Profile = (props) => {

//     const dispatch = useDispatch()

//     // const logOut = (index) => {
//     //     dispatch(logOutAction())
//     // } 


//     const { username, email, status, photo, cart } = useSelector((state) => {
//         return {
//             username: state.userReducer.username,
//             email: state.userReducer.email,
//             status: state.userReducer.status,
//             photo: state.userReducer.photo,
//             cart: state.userReducer.cart,


//         }
//     })

//     // useEffect(() => {
//     //     console.log("data dari reducer : ", iduser)
//     //     if (!iduser) {
//     //         props.navigation.reset({
//     //             index: 0,
//     //             routes: [{ name: "Login" }]
//     //         })
//     //     }
//     // })


//     const [saldo, setSaldo] = useState([
//         {
//             nameIcon: "credit-card",
//             title: "Promo",
//             qty: 7
//         },
//         {
//             nameIcon: "award",
//             title: "Reward",
//             qty: 7
//         },
//         {
//             nameIcon: "dollar-sign",
//             title: "Saldo",
//             qty: 500
//         }




//     ])

//     const [menuAccount, setMenuAccount] = useState([
//         {
//             title: "Transactions",
//             icon: "cart",
//             press: () => props.navigation.navigate("History")
//         },
//         {
//             title: "My Promo",
//             icon: "card-bulleted-outline",
//             press: () => { }
//         },
//         {
//             title: "Address List",
//             icon: "map",
//             press: () => { }
//         }

//     ])

//     const [menuSettings, setMenuSettings] = useState([
//         {
//             title: "Settings",
//             icon: "cog-outline",
//             press: () => { }
//         },
//         {
//             title: "Privacy and Policy",
//             icon: "shield-account",
//             press: () => { }
//         },
//         {
//             title: "Logout",
//             icon: "logout",
//             press: () => {AsyncStorageLib.removeItem("data"); dispatch(logOutAction()); props.navigation.navigate("Login")}
//         }
//     ])


//     const printMenuAccount = () => {
//         return menuAccount.map((value, index) => {
//             return <ListItem key={index.toString()} onPress={value.press}>
//                 <Icon name={value.icon} type="material-community" color="#1B1464" />
//                 <ListItem.Content>
//                     <ListItem.Title>{value.title}</ListItem.Title>
//                 </ListItem.Content>
//                 <ListItem.Chevron />
//             </ListItem>
//         })
//     }

//     const printMenuSettings = () => {
//         return menuSettings.map((value, index) => {
//             return <ListItem key={index.toString()} onPress={value.press}>
//                 <Icon name={value.icon} size={25} type='material-community' color="#1B1464" />
//                 <ListItem.Content>
//                     <ListItem.Title>{value.title}</ListItem.Title>
//                 </ListItem.Content>
//                 <ListItem.Chevron />
//             </ListItem>
//         })
//     }

//     const printSaldo = () => {
//         return saldo.map((value, index) => {
//             return <View style={{ flex: 1, borderWidth: 0.7, borderColor: "gray", padding: 10, borderRadius: 10, backgroundColor: "white", marginBottom: hp(2.5) }}>
//                 <Icon
//                     size={32}
//                     type="feather"
//                     name={value.nameIcon}
//                 />
//                 <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}>{value.title}</Text>
//                 <Text style={{ textAlign: "center" }}>{value.title == "Saldo" && "$"} {value.qty}</Text>
//             </View>
//         })
//     }

//     // return (
//     //     <View style={{ flex: 1, backgroundColor: "white", paddingTop: hp(7) }}>
//     //         <View style={{backgroundColor: "#1B1464", paddingHorizontal: wp(3), paddingVertical: hp(4)}}>
//     //             <View style={{ backgroundColor: "#1B1464", flexDirection: "row", paddingHorizontal: wp(3), paddingVertical: hp(3) }}>
//     //                 <Avatar
//     //                     rounded
//     //                     size="large"
//     //                     source={{ uri: "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png" }}

//     //                 />
//     //                 <View style={{ marginLeft: wp(5) }}>
//     //                     <Text style={{ color: "yellow" }} h4>Your Username <Badge value="Active" status="success" /></Text>
//     //                     <Text style={{ color: "white" }} >yourEmail@mail.com</Text>
//     //                 </View>
//     //             </View>

//     //         </View>
//     //         {/* <StatusBar backgroundColor="#1B1464"/> */}
//     //         <View style={{ flexDirection: "row", marginTop: hp(3) }}>
//     //             {printSaldo()}
//     //         </View>
//     //     </View>
//     // )
//     return (
//         <View style={{ flex: 1, backgroundColor: "white", paddingTop: hp(7) }}>
//             <View style={{
//                 backgroundColor: "#1B1464",
//                 paddingHorizontal: wp(3),
//                 paddingVertical: hp(4)
//             }}>
//                 <View style={{ flexDirection: "row" }}>
//                     <Avatar
//                         rounded
//                         size="large"
//                         source={{ uri: photo }}
//                     />
//                     <View style={{ marginLeft: wp(5) }}>
//                         <Text style={{ color: "yellow" }} h4>{username} <Badge value={status} status="success" /></Text>
//                         <Text style={{ color: "white" }} >{email}</Text>
//                     </View>
//                     <Icon size={28} type="material-community" name="account-edit" color="white"
//                     onPress={() => props.navigation.navigate("Account Detail")}
//                     />
//                 </View>
//                 <View style={{ flexDirection: "row", marginTop: hp(5) }}>
//                     {printSaldo()}
//                 </View>
//             </View>
//             <View style={{
//                 paddingHorizontal: wp(3),
//                 backgroundColor: "white",
//                 paddingTop: hp(4),
//                 marginTop: hp(-3)
//             }}>
//                 <View>
//                     <Text h4 style={{ color: "#1B1464" }}>Account</Text>
//                     {printMenuAccount()}
//                 </View>
//                 <View>
//                     <Text h4 style={{ color: "#1B1464" }}>Setting</Text>
//                     {printMenuSettings()}
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default Profile;

import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { Avatar, Badge, ButtonGroup, Icon, ListItem, Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { logoutAction } from '../actions/userAction';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

const Profile = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (!iduser) {
            props.navigation.reset({
                index: 0,
                routes: [{ name: "Login" }]
            })
        }
    })

    const { username, email, role, status, iduser, photo } = useSelector((state) => {
        return {
            username: state.userReducer.username,
            email: state.userReducer.email,
            role: state.userReducer.role,
            status: state.userReducer.status,
            iduser: state.userReducer.id,
            photo: state.userReducer.photo
        }
    })

    const [saldo, setSaldo] = useState([
        {
            nama: 'credit-card',
            title: 'Promo',
            qty: 7
        },
        {
            nama: 'award',
            title: 'Reward',
            qty: 7
        },
        {
            nama: 'dollar-sign',
            title: 'Saldo',
            qty: 400
        }
    ])

    const [listMenu, setListMenu] = useState([
        {
            title: 'Transactions',
            icon: 'cart',
            press: () => props.navigation.navigate('History')
        },
        {
            title: 'My Promo',
            icon: 'card-bulleted-outline',
            press: () => { }
        },
        {
            title: 'Address List',
            icon: 'map',
            press: () => { }
        }
    ])

    const [menuSettings, setMenuSettings] = useState([
        {
            title: "Settings",
            icon: "cog-outline",
            press: () => { }
        },
        {
            title: "Privacy and Police",
            icon: "shield-account",
            press: () => { }
        },
        {
            title: "Logout",
            icon: "logout",
            press: () => {
                dispatch(logoutAction())
            }
        }
    ])

    const printListAccount = () => {
        return listMenu.map((value, index) => {
            return <ListItem key={index.toString()} onPress={value.press}>
                <Icon name={value.icon} size={25} type='material-community' color='#1B1464' />
                <ListItem.Content>
                    <ListItem.Title>{value.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        })
    }

    const printListSetting = () => {
        return menuSettings.map((value, index) => {
            return <ListItem key={index.toString()} onPress={value.press} >
                <Icon name={value.icon} size={25} type='material-community' color='#1B1464' />
                <ListItem.Content>
                    <ListItem.Title>{value.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        })
    }

    const printSaldo = () => {
        return saldo.map((value, index) => {
            return <View style={{ flex: 1, borderWidth: 0.5, borderColor: 'gray', padding: 10, backgroundColor: 'white', borderRadius: 10, marginBottom: hp(3), }}>
                <Icon
                    size={32}
                    type='feather'
                    name={value.nama}

                />
                <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>{value.title}</Text>
                <Text style={{ textAlign: 'center' }}>{value.title == "Saldo" && "$"} {value.qty}</Text>
            </View>
        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: hp(7) }}>
            <View style={{ backgroundColor: "#1B1464", paddingHorizontal: wp(3), paddingVertical: hp(4) }}>
                <View style={{ flexDirection: "row" }}>
                    <Avatar
                        rounded
                        size="large"
                        source={{ uri: photo }}
                    />
                    <View style={{ marginLeft: wp(5) }}>
                        <Text style={{ color: 'yellow' }} h4 >{username} <Badge value={status} status='success' /></Text>
                        <Text style={{ color: 'white' }} >{email}</Text>
                    </View>
                    <Icon
                        size={28}
                        type='material-community'
                        name='account-edit'
                        color='white'
                        onPress={() => props.navigation.navigate('Account Detail')}
                    />
                </View>
                <View style={{ paddingHorizontal: wp(3), flexDirection: 'row', marginTop: hp(3) }}>
                    {printSaldo()}
                </View>
            </View>
            <View style={{ paddingHorizontal: wp(3), backgroundColor: 'white', paddingTop: hp(2), borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: hp(-3), paddingBottom: hp(5) }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ height: hp(100) }}>
                        <View>
                            <Text h4>Account</Text>
                            {printListAccount()}
                        </View>
                        <View>
                            <Text h4>Settings</Text>
                            {printListSetting()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Profile;