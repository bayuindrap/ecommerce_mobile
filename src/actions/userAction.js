import axios from "axios"
import { API_URL } from "../../helper"
import AsyncStorageLib from "@react-native-async-storage/async-storage"


export const onLogin = (username, password) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}/users?username=${username}&password=${password}`)
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
                let res = await axios.get(`${API_URL}/users?id=${dataUser.id}`)

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
            let res = await axios.post(`${API_URL}/users`, {
                username: username,
                email: email,
                password: password,
                role: "user",
                cart: [],
                status: "Active",
                photo: "https://w7.pngwing.com/pngs/150/362/png-transparent-kakashi-illustration-kakashi-hatake-naruto-uzumaki-sasuke-uchiha-sakura-haruno-minato-namikaze-kakashi-cartoons-cartoon-fictional-character.png",
            })
            dispatch({
                type: "REGISTER_SUCCESS",
                payload: res.data[0]
            })
            return { success: true }


        } catch (error) {
            console.log(error)
        }
    }
}

export const logoutAction = () => {
    return async (dispatch) => {
        await AsyncStorageLib.removeItem("dataUser")
        dispatch({ type: "LOGOUT" })
    }
}


export const updateUserCart = (data, iduser) => {
    return async (dispatch) => {
        try {
            let res = await axios.patch(`${API_URL}/users/${iduser}`, {
                cart: data
            })

            console.log("res.data dalam updateUserCart", res.data)

            dispatch({
                type: "UPDATE_CART",
                payload: res.data.cart
            })

            return { success: true }
        } catch (error) {
            console.type(error)
        }
    }
}




export const updateUserPhoto = (image, iduser) => {
    return async (dispatch) => {
        try {
            let res = await axios.patch(`${API_URL}/users/${iduser}`, {
                photo: image
            })

            dispatch({
                type: "UPDATE_PHOTO",
                payload: res.data.photo
            })

            return { success: true };

        } catch (err) {
            console.log(err)
        }
    }
}

export const updateUserProfile = (editUsername, editEmail, editPassword, iduser) => {
    return async (dispatch) => {
        try {
            let data = {
                username: editUsername,
                email: editEmail,
                password: editPassword
            }
            let res = await axios.patch(`${API_URL}/users/${iduser}`, data)
            dispatch({
                type: "UPDATE_USER",
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}