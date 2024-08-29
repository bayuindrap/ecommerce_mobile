// import React, { useState } from "react";
// import { View, StyleSheet, StatusBar } from "react-native";
// import { Header, Text, SearchBar, Icon, Button } from "react-native-elements";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';




// const HomePage = (props) => {

//     const [kategori, setKategori] = useState(["Office", "Kitchen Set", "Living Room"])
//     const [selectedKategori, setSelectedKategori] = useState(0)
//     const [promo, setPromo] = useState(["Offers", "What's New", "Inspirations"])
//     const [selectedPromo, setSelectPromo] = useState(0)


//     const printKategori = () => {
//         return kategori.map((value, index) => {
//             return <Button
//                 title={value}
//                 titleStyle={{ color: "white" }}
//                 buttonStyle={desain.kategori}
//                 key={index.toString()}

//             />

//         })
//     }

//     // const printKategori = () => {
//     //     return kategori.map((value, index) => {
//     //         return <Text style={selectedKategori == index ? desain.activeKategori : desain.Kategori} key={index.toString()}>
//     //         {value}
//     //     </Text>
//     //     })
//     // }

//     const printPromo = () => {
//         return promo.map((value, index) => {
//             return <Text style={selectedPromo == index ? desain.activePromo : desain.Promo} key={index.toString()}>
//                 {value}
//             </Text>
//             // return <Button
//             //     title={value}
//             //     buttonStyle={desain.btPromo}

//             // />
//         })
//     }



//     return (
//         <View style={{ flex: 1, backgroundColor: "white" }}>
//             <StatusBar barStyle="dark-content" />
//             <Header
//                 containerStyle={{ backgroundColor: "white" }}
//                 placement="left"
//                 centerComponent={
//                     <SearchBar placeholder="search" containerStyle={desain.searchBar} inputContainerStyle={desain.inputSearch} />
//                 }

//                 rightComponent={
//                     <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginRight: 10 }}>
//                         <Icon type="feather" size={16} name="maximize" />
//                     </View>
//                 }
//                 backgroundColor="white"

//             />
//             <View style={desain.barPromo}>
//                 {printPromo()}
//             </View>

//             <View style={desain.titleHeader}>
//                 <Text h2 style={{ color: "#341f97" }}>Best Offer</Text>
//                 <Text style={{color: "gray"}}>Get Our Products with best Price</Text>
//             </View>
//             <View style={desain.barKategori}>
//                 {printKategori()}
//             </View>

//         </View>
//     )
// }

// const desain = StyleSheet.create({
//     searchBar: {
//         width: wp(60),
//         backgroundColor: "transparent",
//         borderTopWidth: 0,
//         borderBottomWidth: 0,
//         padding: 0,
//         marginLeft: wp(-2)
//     },
//     inputSearch: {
//         backgroundColor: "white",
//         height: 40
//     },
//     barPromo: {
//         marginTop: -1.5,
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingHorizontal: wp(2),
//         backgroundColor: "white",
//         margin: hp(5)

//     },
//     activePromo: {
//         color: "#0984e3",
//         fontWeight: "800",
//         borderBottomWidth: 2,
//         borderBottomColor: "yellow",
//         paddingBottom: 5
//     },
//     Promo: {
//         color: "gray",
//         fontWeight: "400"
//     },
//     btPromo: {
//         width: wp(30),
//         borderRadius: 20,
//         marginTop: hp(5),
//     },
//     kategori: {
//         width: wp(30),
//         borderRadius: 20,
//         marginTop: hp(5),
//         color: "white",

//     },
//     activeKategori: {
//         width : wp(30),
//         borderRadius : 20,
//         marginTop : hp(5),
//         backgroundColor:'#4FA4F3'
//     },
//     offKategori: {
//         width : wp(30),
//         borderRadius : 20,
//         marginTop : hp(5),
//         backgroundColor:'white'
//     },
//     barKategori: {
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-around",
//         margin: wp(4)
//     },
//     titleHeader: {
//         paddingTop: hp(1),
//         paddingLeft: wp(5)
//     },
//     activeKategori: {
//         width : wp(30),
//         borderRadius : 20,
//         marginTop : hp(5),
//         backgroundColor:'#4FA4F3',
//     },
//     Kategori: {
//         width : wp(30),
//         borderRadius : 20,
//         marginTop : hp(5),
//         backgroundColor:'#F6F8FA',
//     },
// })

// export default HomePage;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Button, Card, Header, Icon, Image, SearchBar, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { API_URL } from "../../helper"



const HomePage = (props) => {

    const [category, setCategory] = useState(["Office", "Kitchen Set", "Living Room"])
    const [promo, setPromo] = useState(["Offers", "What's New", "Inspirations"])
    const [selectedKategori, setSelectKategori] = useState(0)
    const [selectedPromo, setSelectPromo] = useState(0)
    const [produk, setProduk] = useState([])

    useEffect(() => {
        getProduk()
    }, [])

    const getProduk = () => {
        axios.get(`${API_URL}/products`)
            .then((res) => {
                console.log("TEST GET PRODUCT", res.data)
                setProduk(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const printPromo = () => {
        return promo.map((value, index) => {
            return <Text
                style={selectedPromo == index ? desain.promoAktif : desain.promoOff}
                key={index.toString()}
            >
                {value}
            </Text>
        })
    }
    const printKategori = () => {
        return category.map((value, index) => {
            return <Button
                title={value}
                buttonStyle={selectedKategori == index ? desain.btKategoriActive : desain.btKategoriOff}
                titleStyle={selectedKategori == index ? desain.titleActive : desain.titleOff}
                key={index.toString()}
            />
        })
    }

    const printProduk = () => {
        return produk.map((value, index) => {
            return <TouchableWithoutFeedback key ={index.toString()} onPress={() => props.navigation.navigate("Detail", {detail: value})}>
                <View style={{ width: wp(45) }}>
                    <Card containerStyle={{ padding: 0, borderWidth: 0, shadowColor: "white" }}>
                        <Image source={{ uri: value.images[0] }} style={{ height: hp(20), width: wp(40) }} />
                        <Text h4 style={{ fontWeight: "bold" }}>{value.nama}</Text>
                        <Text>{value.kategori}</Text>
                        <Text h5 style={{ fontWeight: "bold" }}>Rp. {value.harga}</Text>

                    </Card>
                </View>
            </TouchableWithoutFeedback>
        })
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle='dark-content' />
            <Header
                backgroundColor='white'
                placement='left'
                centerComponent={
                    <SearchBar
                        placeholder='Search'
                        containerStyle={desain.searchBar}
                        inputContainerStyle={desain.inputSearch}
                    />
                }
                rightComponent={
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginRight: 10 }}>
                        <Icon type="feather" size={20} name="maximize" />
                    </View>
                }
            />
            <View style={{ flex: 1, paddingHorizontal: wp(4) }}>
                <View style={desain.promo}>
                    {printPromo()}
                </View>
                <View style={{ height: hp(76) }}>
                    <ScrollView>
                        <View>
                            <Text h2 style={{ marginTop: hp(2), marginLeft: wp(3), color: '#1B1464' }}>Best Offer</Text>
                            <Text style={{ marginLeft: wp(3), color: 'grey' }}>Get our products with best price</Text>
                            <View style={desain.kategori}>
                                {printKategori()}
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingTop: hp(2) }}>
                            {printProduk()}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
const desain = StyleSheet.create({
    searchBar: {
        width: wp(60),
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        padding: 0,
        marginLeft: wp(-2)
    },
    inputSearch: {
        backgroundColor: 'white',
        height: 40
    },
    promo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    promoAktif: {
        marginVertical: hp(2),
        textAlign: 'center',
        color: '#1264B1',
        fontWeight: '700',
        width: wp(35),
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: '#FDF0A3',
        borderBottomWidth: 2,
        paddingBottom: hp(1)

    },
    promoOff: {
        marginVertical: hp(2),
        width: wp(35),
        textAlign: 'center',
        color: 'grey',
        fontWeight: '400',
    },
    kategori: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btKategoriActive: {
        width: wp(30),
        borderRadius: 20,
        marginTop: hp(3),
        backgroundColor: '#1B1464',
        color: "yellow"
    },
    titleActive: {
        color: 'yellow'
    },
    titleOff: {
        color: 'grey'
    },
    btKategoriOff: {
        backgroundColor: '#F7FBFD',
        width: wp(30),
        borderRadius: 20,
        marginTop: hp(3)
    }
})
export default HomePage;
