import axios from "axios"
import { API_URL } from "../../helper"
import AsyncStorageLib from "@react-native-async-storage/async-storage"


export const onLogin = (username, password) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}/dataUser?username=${username}&password=${password}`)
            if (res.data.length > 0) {
                let data = JSON.stringify(res.data[0])
                AsyncStorageLib.setItem("dataUser", data)
                dispatch({
                    // MENYIMPAN DATA KE REDUCER
                    type: "LOGIN_SUCCESS",
                    payload: res.data[0]
                })
                return { success: true }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const onKeepLogin = () => {
    return async (dispatch) => {
        try {
            let dataUser = await AsyncStorageLib.getItem("dataUser")
            dataUser = JSON.parse(dataUser)
            console.log("membaca data asyncstorage", dataUser)

            if (dataUser.id) {
                let res = await axios.get(`${API_URL}/dataUser?id=${dataUser.id}`)

                if (res.data.length > 0) {
                    dispatch({
                        // MENYIMPAN DATA KE REDUCER
                        type: "LOGIN_SUCCESS",
                        payload: res.data[0]
                    })

                    AsyncStorageLib.setItem("dataUser", JSON.stringify(res.data[0]))
                    return { success: true }

                }
            }

        } catch (error) {
            console.log(error)
        }
    }
}



export const onRegister = (username, email, password) => {
    return async (dispatch) => {
        try {
            let res = await axios.post(`${API_URL}/dataUser`, {
                username: username,
                email: email,
                password: password,
                role: "user",
                cart: [],
                status: "Active"
            })
            dispatch({
                type: "REGISTER_SUCCESS",
                payload: res.data
            })
            return { success: true }


        } catch (error) {
            console.log(error)
        }
    }
}