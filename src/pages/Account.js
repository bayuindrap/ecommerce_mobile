// import React, { useState } from "react";
// import { View } from "react-native";
// import { Avatar, Icon, ListItem, Overlay, Text } from "react-native-elements";
// import { useDispatch, useSelector } from "react-redux";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import ImageCropPicker from "react-native-image-crop-picker";
// import { updateUserPhoto } from "../actions";


// const Account = (props) => {

//     const dispatch = useDispatch()
//     const [visible, setVisible] = useState(false)
//     // const [gambar, setGambar] = useState("https://w7.pngwing.com/pngs/150/362/png-transparent-kakashi-illustration-kakashi-hatake-naruto-uzumaki-sasuke-uchiha-sakura-haruno-minato-namikaze-kakashi-cartoons-cartoon-fictional-character.png")

//     const { iduser, username, email, password, role, status, photo } = useSelector((state) => {
//         return {
//             iduser: state.userReducer.id,
//             username: state.userReducer.username,
//             email: state.userReducer.email,
//             password: state.userReducer.password,
//             role: state.userReducer.role,
//             status: state.userReducer.status,
//             photo: state.userReducer.photo

//         }
//     })

//     const onBtImage = async () => {
//         try {
//             let image = await ImageCropPicker.openPicker({
//                 width: wp(50),
//                 height: wp(50),
//                 cropping: true,
//                 mediaType: "photo"
//             })

//             if (image.path) {
//                 let res = await dispatch(updateUserPhoto(image.path, iduser))
//                 if (res.success) {
//                     setVisible(!visible)
//                 }
//             }
//         } catch (err) {
//             console.log(err)
//         }
//         ImageCropPicker.openPicker({
//             width: wp(50),
//             height: wp(50),
//             cropping: true,
//             mediaType: "photo"
//         }).then((image) => {
//             console.log("Image from Storage", image)
//             dispatch(updateUserPhoto(image.path, iduser))
//             setVisible(!visible)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }

//     return (
//         <View style={{ flex: 1, backgroundColor: "white" }}>
//             <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
//                 <ListItem containerStyle={{ width: wp(65) }} onPress={onBtImage}>
//                     <Icon name="folder" type="feather" />
//                     <ListItem.Content>
//                         <ListItem.Title>Select From Gallery</ListItem.Title>
//                         <ListItem.Chevron />
//                     </ListItem.Content>
//                 </ListItem>
//                 <ListItem containerStyle={{ width: wp(65) }}>
//                     <Icon name="camera" type="feather" />
//                     <ListItem.Content>
//                         <ListItem.Title>Open Camera</ListItem.Title>
//                         <ListItem.Chevron />
//                     </ListItem.Content>
//                 </ListItem>
//             </Overlay>
//             <Avatar
//                 containerStyle={{ alignSelf: "center", marginTop: 16 }}
//                 rounded
//                 size="xlarge"
//                 source={{ uri: photo }}

//             >

//                 <Avatar.Accessory
//                     name="edit"
//                     type="feather"
//                     size={40}
//                     iconStyle={{ fontSize: 20 }}
//                     onPress={() => setVisible(!visible)}
//                 />

//             </Avatar>
//         </View>
//     )
// }

// export default Account;

// import React, { useState } from 'react';
// import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
// import { Avatar, Icon, Input, ListItem, Overlay, Text, Button, Card } from 'react-native-elements';
// import { useSelector, useDispatch } from 'react-redux';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import { updateUserCart, updateUserPhoto, updateUserProfile } from "../actions"


// const Account = (props) => {

//     // const [gambar, setGambar] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdD1rK4ZtCJVizS00LaWifgJnY-wzSVBoHw&usqp=CAU")

//     const dispatch = useDispatch()

//     const [edit, setEdit] = useState(true)
//     const [visible, setVisible] = useState(false)

//     const { iduser, email, username, password, role, status, photo } = useSelector((state) => {
//         return {
//             iduser: state.userReducer.id,
//             username: state.userReducer.username,
//             email: state.userReducer.email,
//             password: state.userReducer.password,
//             role: state.userReducer.role,
//             status: state.userReducer.status,
//             photo: state.userReducer.photo
//         }
//     })

//     const [editUsername, setEditUsername] = useState(username)
//     const [editEmail, setEditEmail] = useState(email)
//     const [editPassword, setEditPassword] = useState(password)

//     const onBtImage = async (type) => {
//         try {
//             let image
//             if (type == "gallery") {
//                 image = await ImageCropPicker.openPicker({
//                     width: wp(40),
//                     height: wp(40),
//                     cropping: true,
//                     mediaType: 'photo'
//                 })
//             } else if (type == "camera") {
//                 image = await ImageCropPicker.openCamera({
//                     width: wp(40),
//                     height: wp(40),
//                     cropping: true,
//                     mediaType: 'photo'
//                 })
//             }

//             if (image.path) {
//                 let res = await dispatch(updateUserPhoto(image.path, iduser))
//                 if (res.success) {
//                     setVisible(!visible)
//                 }
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const onBtEdit = () => {
//         setEdit(!edit)
//         // if (edit == true) {
//         //     setEdit(false)
//         // } else if (edit == false) {
//         //     setEdit(true)
//         // }
//     }

//     const onBtSave = () => {

//     }



//     const printEditProfile = () => {
//         return (
//             <View style={{ paddingHorizontal: 20, marginTop: hp(5) }}>
//                 <Card>
//                     <Input
//                         defaultValue={edit ? username : editUsername}
//                         // value={username} 
//                         onChangeText={(value) => setEditUsername(value)}
//                         style={{ color: "#636e72" }}
//                         disabled={edit}
//                         leftIcon={<Icon name="user" type="feather" color="#bdc3c7" />} />
//                 </Card>
//                 <Card>
//                     <Input
//                         defaultValue={edit ? email : editEmail}
//                         onChangeText={(value) => setEditEmail(value)}
//                         disabled={edit}
//                         leftIcon={<Icon name="mail" type="feather" color="#bdc3c7" />} />
//                 </Card>
//                 <Card>
//                     <Input
//                         defaultValue={edit ? password : editPassword}
//                         onChangeText={(value) => setEditPassword(value)}
//                         disabled={edit}
//                         secureTextEntry={!visible}
//                         leftIcon={<Icon name="key" type="feather" color="#bdc3c7" />} />
//                 </Card>
//                 <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                     <Button
//                         title={edit ? "Edit" : "Cancel"}
//                         onPress={onBtEdit}
//                         containerStyle={{ borderRadius: 10, width: 150 }}
//                         buttonStyle={{ backgroundColor: "#0984e3" }}
//                     />
//                     <Button
//                         title="Save"
//                         containerStyle={{ borderRadius: 10, width: 150 }}
//                         buttonStyle={{ backgroundColor: "#0984e3" }}
//                         onPress={() => {
//                             dispatch(updateUserProfile(editUsername, editEmail, editPassword, iduser))
//                             setVisible(!visible)
//                         }}
//                     />

//                 </View>

//             </View>
//         )
//     }

//     return (
//         <View style={{ flex: 1, backgroundColor: "white" }}>
//             <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
//                 <ListItem containerStyle={{ width: wp(65) }} onPress={() => onBtImage("gallery")}>
//                     <Icon
//                         name="folder"
//                         type="feather"
//                     />
//                     <ListItem.Content>
//                         <ListItem.Title>Select from Gallery</ListItem.Title>
//                     </ListItem.Content>
//                     <ListItem.Chevron />
//                 </ListItem>
//                 <ListItem containerStyle={{ width: wp(65) }} onPress={() => onBtImage("camera")}>
//                     <Icon
//                         name="camera"
//                         type="feather"
//                     />
//                     <ListItem.Content>
//                         <ListItem.Title>Open Camera</ListItem.Title>
//                     </ListItem.Content>
//                     <ListItem.Chevron />
//                 </ListItem>
//             </Overlay>
//             <ScrollView>

//             <KeyboardAvoidingView behavior='position'>

//                     <Avatar
//                         containerStyle={{ alignSelf: "center", marginTop: 16 }}
//                         rounded
//                         size="xlarge"
//                         source={{ uri: photo }}
//                     >
//                         <Avatar.Accessory
//                             name="edit"
//                             type="feather"
//                             size={40}
//                             iconStyle={{ fontSize: 20 }}
//                             onPress={() => setVisible(!visible)}
//                         />
//                     </Avatar>

//                     <View>
//                         {printEditProfile()}

//                     </View>




//             </KeyboardAvoidingView>
//             </ScrollView>
//         </View>
//     )
// }

// export default Account;

import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Avatar, Icon, Overlay, Text, ListItem, Card, Input, Button } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import ImageCropPicker from 'react-native-image-crop-picker';
import { updateUser, updateUserPhoto, updateUserProfile } from '../actions';

const Account = (props) => {

    // const [gambar,setGambar] = useState('https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png')

    const [visible, setVisible] = useState(false)

    const dispatch = useDispatch();

    const [passwordVisible, setPasswordVisible] = useState(true)


    const { iduser, username, email, password, role, status, photo } = useSelector((state) => {
        return {
            iduser: state.userReducer.id,
            username: state.userReducer.username,
            email: state.userReducer.email,
            password: state.userReducer.password,
            role: state.userReducer.role,
            status: state.userReducer.status,
            photo: state.userReducer.photo,
        }
    })

    const [editUsername, setEditUsername] = useState(username)
    const [editEmail, setEditEmail] = useState(email)
    const [editPassword, setEditPassword] = useState(password)
    const [inputVisible, setInputVisible] = useState(true)

    const onBtImage = async (type) => {
        try {
            let image
            if (type == 'gallery') {
                image = await ImageCropPicker.openPicker({
                    width: wp(40),
                    height: wp(40),
                    cropping: true,
                    mediaType: 'photo'
                })
            } else if (type == 'camera') {
                image = await ImageCropPicker.openCamera({
                    width: wp(40),
                    height: wp(40),
                    cropping: true,
                    mediaType: 'photo'
                })
            }

            if (image.path) {
                let res = await dispatch(updateUserPhoto(image.path, iduser))
                if (res.success) {
                    setVisible(!visible)
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const btEdit = () => {
        setInputVisible(!inputVisible)
    }


    console.log('user', editUsername)
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
                <ListItem containerStyle={{ width: wp(65) }} onPress={() => onBtImage('gallery')}>
                    <Icon name="folder" type="feather" />
                    <ListItem.Content>
                        <ListItem.Title>Select From Gallery</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem containerStyle={{ width: wp(65) }} onPress={() => onBtImage('camera')}>
                    <Icon name="camera" type="feather" />
                    <ListItem.Content>
                        <ListItem.Title>Open Camera</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>

            </Overlay>
            <KeyboardAvoidingView behavior='position'>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Avatar
                    containerStyle={{ alignSelf: 'center', marginTop: 16 }}
                    rounded
                    size='xlarge'
                    source={{ uri: photo }}
                >
                    <Avatar.Accessory
                        name='edit'
                        type='feather'
                        size={40}
                        iconStyle={{ fontSize: 20 }}
                        color='white'
                        onPress={() => setVisible(!visible)}
                        disabledStyle={{ backgroundColor: 'transparent' }}
                    />
                </Avatar>
                <View style={{ marginTop: hp(3), paddingBottom: hp(1) }}>
                    <Card containerStyle={{ borderRadius: 10 }} >
                        <Text style={{ fontWeight: 'bold' }}>Username</Text>
                        <Input
                            value={inputVisible ? username : editUsername}
                            onChangeText={(value) => setEditUsername(value)}
                            disabled={inputVisible}
                        />
                    </Card>
                    <Card containerStyle={{ borderRadius: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Email</Text>
                        <Input
                            value={inputVisible ? email : editEmail}
                            onChangeText={(value) => setEditEmail(value)}
                            disabled={inputVisible}
                        />
                    </Card>
                    <Card containerStyle={{ borderRadius: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Password</Text>
                        <Input
                            disabled={inputVisible}
                            secureTextEntry={passwordVisible}
                            value={inputVisible ? password : editPassword}
                            onChangeText={(value) => setEditPassword(value)}
                        // rightIcon={
                        //     passwordVisible == true ?
                        //     <Icon name='eye' type='feather' color='#bdc3c7' onPress={()=>setPasswordVisible(false)} disabled={inputVisible} disabledStyle={{backgroundColor:'transparent'}}/>
                        //     :
                        //     <Icon name='eye-off' type='feather' color='#bdc3c7' onPress={()=>setPasswordVisible(true)} disabled={inputVisible}/>
                        // }
                        />
                    </Card>
                </View>
                <View style={{ marginVertical: hp(2), flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button
                        title={inputVisible ? 'Edit' : 'Cancel'}
                        containerStyle={{ padding: 10, width: wp(40) }}
                        buttonStyle={{ borderRadius: 10 }}
                        onPress={btEdit}
                    />
                    <Button
                        title='Save'
                        containerStyle={{ padding: 10, width: wp(40) }}
                        onPress={() => {
                            dispatch(updateUserProfile(editUsername, editEmail, editPassword, iduser))
                            setInputVisible(!inputVisible)
                        }}
                        disabled={inputVisible}
                        buttonStyle={{ borderRadius: 10 }}
                    />
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Account;