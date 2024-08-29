import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Text, Image, Badge } from "react-native-elements";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { API_URL } from "../../helper";
import { useSelector } from 'react-redux';
import { ScrollView } from "react-native";






const History = (props) => {

    const [status, setStatus] = useState(["Semua", "Menunggu Konfirmasi", "Terima Pesanan", "Pesanan Batal"])
    const [transaksi, setTransaksi] = useState([])
    const [statusIndex, setStatusIndex] = useState(0)

    const { iduser } = useSelector((state) => {
        return {
            iduser: state.userReducer.id
        }
    })


    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`${API_URL}/userTransactions?iduser=${iduser}`)
            .then((res) => {
                setTransaksi(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const printStatus = () => {
        return status.map((value, index) => {
            return <View
                style={statusIndex == index ? desain.filterAktif : desain.filterOff}
                key={index.toString()}
            >
                <Text style={{ textAlign: 'center', color: '#1264B1', fontWeight: '700', alignContent: 'center' }} onPress={() => getStatusFilter(value, index)}>{value}</Text>
            </View>
        })
    }

    const getStatusFilter = (status, statusActive) => {
        axios.get(`${API_URL}/userTransactions?${statusActive > 0 ? `status=${status}&iduser=${iduser}` : `iduser=${iduser}`}`).then((res) => {
            setTransaksi(res.data)
            setStatusIndex(statusActive)
        }).catch((err) => {
            console.log(err)
        })
    }


    const printHistory = () => {
        return transaksi.map((value, index) => {

            let badgeColor = value.status.includes("Batal") ? "error" : value.status.includes("Terima") ? "success" : "warning"
            return (
                <View key={index.toString()} style={{ borderWidth: 0.5, marginBottom: hp(3), borderColor: '#b2bec3', borderRadius: 15 }}>
                    <View style={{ backgroundColor: '#2f3640', padding: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{value.invoice}</Text>
                            <Badge value={value.status} textStyle={{ fontWeight: 'bold' }}
                                status={
                                    value.status.includes('Konfirmasi') ?
                                        "warning" : value.status.includes('Batal') ?
                                            "error" : "success"
                                }
                            />
                        </View >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: 'white' }}>{value.date}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: wp(2), paddingVertical: hp(2), justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: value.detail[0].images }} style={{ height: 50, width: 50 }} />
                            <View style={{ marginLeft: wp(2) }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{value.detail[0].nama}</Text>
                                <Text style={{ color: 'black' }}> {value.detail[0].qty} x Rp. {value.detail[0].harga} </Text>
                                {
                                    value.detail.length > 1 ?
                                        <Text style={{ color: 'black' }}> + {(value.detail.length) - 1} produk lainnya </Text>
                                        : null
                                }
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>Total</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Rp. {value.totalPayment}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: hp(1) }}>
                        <Button
                            title="Batalkan Pesanan"
                            disabled={badgeColor == "error" ? true : false}
                            buttonStyle={{ padding: 3, backgroundColor: "red" }}
                            titleStyle={{ fontSize: 10 }}
                            containerStyle={{ margin: 5 }}
                        />
                        <Button
                            title="Lihat Detail Produk"
                            type='outline'
                            buttonStyle={{ padding: 3 }}
                            titleStyle={{ fontSize: 10 }}
                            containerStyle={{ margin: 5 }}
                            onPress={() => props.navigation.navigate("Detail Transaction", {detail: value})}
                        />
                    </View>

                </View>
            )
        })
    }

    return (
        <View style={{height: hp(95)}}>
            <Text h4 style={{ textAlign: "center" }}>History Transaction</Text>
            <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
                {printStatus()}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {printHistory()}
                </View>
            </ScrollView>
        </View>

    )
}

const desain = StyleSheet.create({
    filterAktif: {
        width: wp(23),
        borderColor: '#1B1464',
        borderBottomWidth: 2,
        paddingBottom: hp(1),
        marginHorizontal: wp(2),
        justifyContent: "center"

    },
    filterOff: {
        width: wp(23),
        paddingBottom: hp(1),
        marginHorizontal: wp(2),
        justifyContent: "center"

    }
})


export default History;