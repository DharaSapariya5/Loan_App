import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Dimensions, Keyboard, TextInput, Modal, TouchableOpacity, Image, Pressable } from 'react-native'
// import auth from '@react-native-firebase/auth';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { s, scale, verticalScale } from 'react-native-size-matters';
import Lottie from 'lottie-react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const MobileNumber = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isError, setIsError] = useState(false);
    const [text, setText] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [confirm, setConfirm] = useState(null);
    const [phone, setPhoneNumber] = useState();
    const [press, setPress] = useState('');


    useEffect(() => {
        setModalVisible(true)
        if (text.length == 10) {
            setChecked(true)
            setPhoneNumber()
        }
        if (text.length == 10 || text.length == 0) {
            setIsError(false)
        } else {
            setIsError(true)
        }

        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [])



    // const signInWithPhoneNumber = async () => {
    //     const confirmation = await auth().signInWithPhoneNumber(phone);
    //     setConfirm(confirmation);
    //     navigation.navigate("OTP")
    // }

    // const confirmCode = async () => {
    //     console.log(text)
    //     //formetdata()
    //     signInWithPhoneNumber()
    // }

    const onSend = async () => {
        //     confirmCode()
        setPress(1)
        setTimeout(() => {
            navigation.navigate("ConformOtp")
        }, 5000)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: modalVisible ? "rgba(44, 42, 42, 0.44)" : "#fff" }}>
            <View style={{ marginLeft: verticalScale(20), marginTop: scale(30) }}>
                <Text style={styles.heding}>Hello there!</Text>
                <Text style={styles.bodytxt}>Enter your mobile number</Text>

                {focused ?
                    <Text
                        style={{ fontSize: RFPercentage(2.10), marginTop: verticalScale(115), position: 'absolute', marginLeft: scale(55), color: isError ? "#CE1212" : "black" }}>
                        Enter Number</Text>
                    : null}
                {focused ?
                    <View>
                        {isError ?
                            <>
                                <Text
                                    style={{ fontSize: RFPercentage(2), marginTop: verticalScale(59), position: 'absolute', marginLeft: 30, color: isError ? "#CE1212" : "black" }}>
                                    Please enter valid mobile number</Text>
                                <View
                                    style={{ position: 'absolute', marginLeft: scale(270), marginTop: verticalScale(35), width: scale(20), height: verticalScale(22), backgroundColor: "#CE1212", borderRadius: verticalScale(30), alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#fff', fontSize: RFPercentage(2) }}>!</Text></View>
                            </>
                            : null}
                    </View>
                    : null}

                <View style={{
                    flexDirection: 'row',
                    margin: 12,
                    width: scale(300),
                    height: verticalScale(70),
                    borderColor: 'black',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: modalVisible ? "rgba(44, 42, 42, 0.44)" : '#eee'
                }}>
                    <Text style={{ fontSize: RFPercentage(3), paddingLeft: 10 }}>+91
                        <Text style={{ color: modalVisible ? "#6C6464" : '#b2b2b2' }}>|</Text>
                    </Text>

                    <TextInput
                        style={{ width: scale(200), fontSize: RFPercentage(3), }}
                        placeholder={focused ? "" : "Enter Number"}
                        placeholderTextColor={'rgba(13, 13, 13, 0.68)'}
                        value={text}
                        // defaultValue={num != null ? num : ""}
                        maxLength={10}
                        onFocus={() => setFocused(true)}
                        onChangeText={(text) => {
                            setPhoneNumber('+91 901-644-4202')
                            setText(text)
                            if (text.length == 10 || text.length == 0) {
                                setIsError(false)
                            } else {
                                setIsError(true)
                            }
                        }}
                        keyboardType="phone-pad"
                        onSubmitEditing={Keyboard.dismiss}
                    />

                </View>
            </View>

            {/* <View style={{ height: verticalScale(380)}} /> */}
            {/* {keyboardStatus == true ?
                <View style={[styles.btnview, { marginTop:-verticalScale(10) }]}>
                    <TouchableOpacity style={{
                        width: scale(300),
                        height: verticalScale(50),
                        borderRadius: 5,
                        backgroundColor: text.length == 10 ? "#2192FF" : '#DFF6FF',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} disabled={!text.length == 10}
                        onPress={() => onSend()}
                    >
                        <Text style={styles.btntext}>Send OTP</Text>
                    </TouchableOpacity>
                </View>
                : */}
            <View style={[styles.btnview]}>
                <TouchableOpacity style={{
                    width: scale(300),
                    height: verticalScale(50),
                    borderRadius: 5,
                    backgroundColor: text.length == 10 ? "#2192FF" : '#DFF6FF',
                    // backgroundColor: modalVisible ? "#6C6464": "#2192FF",

                    alignItems: 'center',
                    justifyContent: 'center',
                    // position:'absolute'

                }} disabled={!text.length == 10}
                    onPress={() => onSend()}
                >
                    <Text style={styles.btntext}>Send OTP</Text>
                </TouchableOpacity>
            </View>
            {/* } */}
            <View style={{
            }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        // Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                    }}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.buttonClose}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{ fontSize: RFPercentage(4.40), transform: [{ rotate: '45deg' }] }}>+</Text>
                            </TouchableOpacity>

                            <Image source={require("../img/google.png")}
                                style={{ width: scale(30), height: scale(30), margin: 20, marginTop: verticalScale(10), position: 'absolute' }} />
                            <View style={{ margin: 10 }}>
                                <Text style={styles.modelhed}>Choose a phone number</Text>
                                <Text style={styles.modeltext}>You can choose a phone number that's assigned to your phone, and Google will share it only with this app.</Text>
                                <Text style={styles.modeltext}>google store the phone number that you share with this app in your Google account </Text>

                                <View style={[styles.modeltext, { flexDirection: 'row', alignItems: 'center' }]}
                                >
                                    <TouchableOpacity style={styles.contactimg}
                                    >
                                        <Image source={require("../img/contact.png")}
                                            style={{ width: scale(30), height: scale(30) }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setText("0010011011")
                                            setPhoneNumber('+91 001-001-1011')
                                            setModalVisible(!modalVisible)
                                        }}
                                    >
                                        <Text style={{ fontSize: RFPercentage(2.50), marginLeft: 5 }}>0010011011</Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.modeltext}>
                                    You can update your phone your phone number setting preference in your <Text style={{ color: '#009EFF' }}
                                        onPress={() => navigation.navigate("PhoneSetting")}>device setting</Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>


            {press == 1 &&
                <Lottie
                    source={require('../coin.json')}
                    autoPlay
                    style={{
                        alignSelf: 'center',
                        flex: 1,
                        marginTop: scale(70)
                    }}
                />
            }
        </View>
    )
}
export default MobileNumber;

const styles = StyleSheet.create({

    heding: {
        fontSize: RFPercentage(5),
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        color: '#000'
    },
    bodytxt: {
        fontSize: RFPercentage(3.40),
        marginLeft: 10,
        marginBottom: 10,
        // color: 'rgba(13, 13, 13, 0.68)',

    },
    modalView: {
        width: scale(340),
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    buttonClose: {
        marginLeft: deviceWidth / 1.10,
        marginTop: 10
    },
    modeltext: {
        marginLeft: scale(15),
        fontSize: RFPercentage(2.50), margin: 5,
    },
    modelhed: {
        marginLeft: scale(15),
        fontSize: RFPercentage(3.50), margin: 5, fontWeight: '900', color: 'black'
    },
    contactimg: {
        // width: 40,
        // height: 40,
        backgroundColor: '#eee',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:verticalScale(330)
    },
    btn: {
        width: scale(300),
        height:verticalScale(50),
        borderRadius: 5,
        backgroundColor: "#2192FF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext: {
        fontSize: RFPercentage(3),
        color: '#fff',
        fontWeight: '800',
        fontFamily: 'Roboto'
    }, chechbox: {
        flexDirection: 'row',
    }
})
