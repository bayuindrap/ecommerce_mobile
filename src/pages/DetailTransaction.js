import React from "react";
import { ScrollView, View } from "react-native";
import { Card, Image, Text } from "react-native-elements";


const DetailTransaction = (props) => {

    let { iduser, invoice, username, date, note, totalPayment, ongkir, status, id, detail } = props.route.params.detail

    const printProduct = () => {

        return detail.map((value, index) => {
            return <Card containerStyle={{ padding: 10, margin: 0 }}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={{ uri: value.images }} style={{ width: 50, height: 50 }} />
                    <View>
                        <Text style={{ fontWeight: "bold" }}>{value.nama}</Text>
                        <Text style={{ fontSize: 12 }}>{value.qty} x {value.harga}</Text>
                    </View>
                </View>
                <Card.Divider />
                <View>
                    <Text style={{ fontSize: 12 }}>Total Price</Text>
                    <Text style={{ fontWeight: "bold" }}>Rp. {value.qty * value.harga}</Text>
                </View>
            </Card>
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Card containerStyle={{ padding: 10, margin: 0 }}>
                    <Text style={{ color: "black", fontWeight: "bold" }}>{status}</Text>
                    <Text style={{ color: "gray", marginVertical: 5 }}>{invoice}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Tanggal Pembelian</Text>
                        <Text style={{ color: "gray" }}>{date}</Text>
                    </View>
                </Card>
                <Card containerStyle={{ padding: 10, margin: 0, marginTop: 20 }}>
                    <Card.Title>Detail Product</Card.Title>
                    {printProduct()}
                </Card>
                <Card>
                    <Card.Title style={{ textAlign: "left" }}>Payment Detail</Card.Title>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Total Price</Text>
                        <Text>Rp. {(totalPayment - ongkir)}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Tax</Text>
                        <Text>Rp. {(totalPayment - ongkir) * 10 / 100}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Shipping</Text>
                        <Text>Rp. {ongkir}</Text>
                    </View>
                    <Card.Divider />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "bold" }}>Total Payment</Text>
                        <Text style={{ fontWeight: "bold" }}>Rp. {totalPayment + ((totalPayment - ongkir) * 10 / 100)}</Text>
                    </View>
                </Card>
            </ScrollView>
        </View>
    )
}

export default DetailTransaction;