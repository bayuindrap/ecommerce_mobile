// import React from 'react';
// import { View, StyleSheet, FlatList } from 'react-native';
// import { Text, Icon, Image } from 'react-native-elements';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

// const DetailProduk = (props) => {

//     const { nama, kategori, deskripsi, harga, brand, images, stock } = props.route.params.detail

//     console.log(props.route.params)
//     return (
//         <View style={{ paddingTop: hp(10), flex: 1, backgroundColor: "white" }}>
//             <View style={{margin: 15}}>
//                 <View style={desain.boxIcon}>
//                     <Icon raised
//                         name="arrow-left"
//                         type="feather"
//                         containerStyle={{ width: 50}}
//                         color="#1B1464"

//                     />
//                     <Icon raised
//                         name="heart"
//                         type="feather"
//                         containerStyle={{ width: 50, marginLeft: "auto"}}
//                         color="#1B1464"

//                     />
//                    <FlatList
//                     data={images}
//                     renderItem={({ item }) => (
//                         <Image source={{ uri: item }}
//                             style={{
//                                 height: hp(40),
//                                 width: wp(92)
//                             }} />
//                     )}
//                     keyExtractor={(item, index) => index.toString()}
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                 />


//                 </View>
//                 {/* <Image source={{ uri: images[0] }} style={{ height: hp(50), width: hp(52) }} /> */}
//                 <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
//                     <Text h3>{nama}</Text>
//                     <Text h3>Rp. {harga}</Text>
//                 </View>
//                 <Text>{deskripsi}</Text>
//             </View>
//         </View>
//     )
// }

// const desain = StyleSheet.create ({
//     boxIcon :{
//         backgroundColor:'white',
//         display:'flex',
//         flexDirection:'row',
//         paddingHorizontal:wp(4),
//         paddingVertical :hp(3)
//     }
// })

// export default DetailProduk

// import React, { useState } from 'react';
// import { StatusBar, View, FlatList, ScrollView, Overlay } from 'react-native';
// import { Text, Icon, Image, Button, Input } from 'react-native-elements';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// const DetailProduct = (props) => {

//     const { nama, kategori, deskripsi, harga, brand, images, stock, qty } = props.route.params.detail


//     const [activeType, setActiveType] = React.useState(0)



//     const [visible, setVisible] = useState(false)



//     const toggleOverlay = () => {
//         setVisible(!visible)
//     }

//     const printType = () => {
//         return stock.map((value, index) => {
//             if (activeType == index) {
//                 return <Button
//                     title={value.type}
//                     type="clear"
//                     onPress={() => setActiveType(index)}
//                     containerStyle={{
//                         marginLeft: 5,
//                         backgroundColor: "#00a8ff",
//                         borderRadius: 25,
//                         paddingHorizontal: 25

//                     }}
//                     titleStyle={{
//                         color: "white"
//                     }}

//                 />
//             } else {
//                 return <Button
//                     title={value.type}
//                     type="clear"
//                     onPress={() => setActiveType(index)}
//                     containerStyle={{
//                         marginLeft: 5,
//                         borderRadius: 25,
//                         paddingHorizontal: 25,
//                         borderWidth: 1,
//                         borderColor: "gray"
//                     }}

//                 />
//             }
//         })
//     }


//     return (
//         <View style={{ flex: 1, backgroundColor: "#f1f2f6", paddingTop: hp(10), paddingHorizontal: wp(2) }}>
//             <StatusBar backgroundColor={"#f1f2f6"} />
//             <ScrollView showsVerticalScrollIndicator={false}>

//                 <View style={{ height: hp("50%"), backgroundColor: "white", borderRadius: 25, paddingHorizontal: wp(3), paddingVertical: hp(4) }}>
//                     <Icon
//                         raised
//                         name='arrow-left'
//                         type='font-awesome'
//                         color="#0058AB"
//                         size={15}
//                         onPress={() => props.navigation.goBack()}
//                         containerStyle={{ marginTop: hp(5), position: 'absolute', zIndex: 20, paddingLeft: -5 }}
//                     />
//                     <Icon
//                         raised
//                         name='heart'
//                         type='font-awesome'
//                         color="#ecf0f1"
//                         size={15}
//                         containerStyle={{ marginTop: hp(5), position: 'absolute', zIndex: 20, right: 10 }}
//                     />
//                     <FlatList
//                         data={images}
//                         renderItem={({ item }) => (
//                             <Image source={{ uri: item }}
//                                 style={{
//                                     height: hp(40),
//                                     width: wp(92)
//                                 }} />
//                         )}
//                         keyExtractor={(item, index) => index.toString()}
//                         horizontal
//                         showsHorizontalScrollIndicator={false}
//                     />
//                 </View>
//                 <View style={{ marginTop: 25, paddingHorizontal: 10 }}>

//                     <Text style={{ color: "gray" }}>{brand} | {kategori}</Text>

//                     <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//                         <Text h4 >{nama}</Text>
//                         <Text h3 >Rp. {harga}</Text>
//                     </View>
//                 </View>
//                 <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
//                     <Text style={{ fontWeight: "800" }}>
//                         Choose Type: <Text style={{ color: "gray" }}>{stock.length} type, {stock[activeType].qty} Stock</Text>
//                     </Text>
//                     <View style={{ flexDirection: 'row', marginTop: 16 }}>
//                         {printType()}
//                     </View>
//                     <Text style={{ fontWeight: "800", marginTop: 20 }}>
//                         Description
//                     </Text>
//                     <Text style={{ textAlign: "justify" }}>
//                         {deskripsi}
//                     </Text>
//                 </View>
//             </ScrollView>
//             <View>
//                 <Button
//                     title="Add to cart"
//                     type='clear'
//                     containerStyle={{
//                         marginBottom: 10,
//                         borderRadius: 25,
//                         backgroundColor: "yellow"
//                     }}
//                     titleStyle={{
//                         color: "#3867d6"
//                     }}
//                     onPress={toggleOverlay}
//                 />
//                 <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
//                     <Input containerStyle={{ width: wp(80) }} />
//                     <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
//                         <Icon
//                             name='plus'
//                             type='font-awesome'
//                             color="#f1c40f"
//                             size={15}
//                             style={{ marginTop: 3 }}
//                         />
//                         <Text style={{ color: "#f1c40f", fontWeight: "800" }}> Submit</Text>
//                     </View>
//                 </Overlay>
//             </View>
//         </View>
//     )
// }

// export default DetailProduct;

import React, { useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { Text, Icon, Image, Button, Overlay } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const DetailProduk = (props) => {

    const { nama, kategori, deskripsi, harga, brand, images, stock } = props.route.params.detail
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => { 
        setVisible(!visible); 
    };
    const [activeType, setActiveType] = useState(null)
    const[qty, setQty] = useState ("") 

    const printType = () => {
        return stock.map((value, index) => {
            if (activeType == index) {
                return <Button
                    title={value.type}
                    type="clear"
                    containerStyle={{
                        marginLeft: 10,
                        backgroundColor: "#00a8ff",
                        borderRadius: 25,
                        paddingHorizontal: 25
                    }}
                    titleStyle={{
                        color: "white"
                    }}
                    onPress={() => btType(index)}
                />
            } else {
                return <Button
                    title={value.type}
                    type="clear"
                    containerStyle={{
                        marginLeft: 5,
                        borderRadius: 25,
                        paddingHorizontal: 25,
                        borderWidth: 1,
                        borderColor: "grey"
                    }}
                    onPress={() => btType(index)}
                />
            }
        })
    }

    // const toggleOverlay = () => {
    //     setVisible(!visible)
    // }

    const btType = (index) => {
        setActiveType(index)
        setQty(stock[index].qty)
    }

    return (
        <View style={{ paddingTop: hp(10), flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ display: "flex" }}>
                    <Icon
                        raised
                        name='arrow-left'
                        type='font-awesome'
                        color="#0058AB"
                        size={15}
                        onPress={() => props.navigation.goBack()}
                        containerStyle={{ marginTop: hp(5), position: 'absolute', zIndex: 20, paddingLeft: -5 }}
                    />
                    <Icon
                        raised
                        name='heart'
                        type='font-awesome'
                        color="#ecf0f1"
                        size={15}
                        containerStyle={{ marginTop: hp(5), position: 'absolute', zIndex: 20, right: 10 }}
                    />
                    <FlatList
                        data={images}
                        renderItem={({ item }) => (
                            <Image source={{ uri: item }} style={{ height: hp(50), width: wp(100), borderRadius: 25 }} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ margin: wp(5) }}>
                    <Text style={{ color: "gray" }}>{brand} | {kategori}</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Text h4 style={{ color: "#474787" }}>{nama}</Text>
                        <Text h3 style={{ color: "#3c40c6" }}>Rp. {harga}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                    <Text style={{ color: "#3c40c6", fontWeight: "800" }}>Choose Type : <Text style={{ color: "gray" }}>{stock.length} type</Text>
                        <Text style={{ color: "#3c40c6", fontWeight: "800" }}> {qty} stock</Text>
                    </Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 16 }}>
                    {printType()}
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ color: "#3c40c6", fontWeight: "800", marginTop: 20 }}>
                        Description
                    </Text>
                    <Text>
                        {deskripsi}
                    </Text>
                </View>

            </ScrollView>
            <Button
                title="Add to Cart"
                type="clear"
                containerStyle={{
                    marginBottom: 10,
                    borderRadius: 25,
                    backgroundColor: "yellow"
                }}
                titleStyle={{
                    color: "black"
                }}
                onPress={toggleOverlay}
            />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Input containerStyle={{ width: wp(80) }} />
                <View style={{ display: "flex", flexDirection: "row", justifyContent:"center" }}>
                    <Icon
                        name='plus'
                        type='font-awesome'
                        color="#f1c40f"
                        size={15}
                        style={{marginTop:3}}
                    />
                    <Text style={{color:"#f1c40f", fontWeight:"800" }}> Submit</Text>
                </View>
            </Overlay>
        </View >
    )
}

export default DetailProduk