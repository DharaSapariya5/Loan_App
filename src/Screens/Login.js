import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
// import auth from '@react-native-firebase/auth';
import { scale, verticalScale } from 'react-native-size-matters';
import Lottie from 'lottie-react-native';


// import {
//     GoogleSignin,
//     statusCodes,
// } from '@react-native-google-signin/google-signin';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const image = require("../img/bg.jpg");

const Login = ({ navigation }) => {

    const [press, setPress] = useState('');

    const onGoogleButtonPress = async () => {
        setPress(1)
        setTimeout(() => {
            navigation.navigate("MobileNumber");
        }, 5000)
        //     GoogleSignin.configure({
        //         scopes: [],
        //         webClientId: '665487906063-9mmvrjmq19303j6cc13a7a1c31pdauav.apps.googleusercontent.com',
        //         offlineAccess: true,
        //     });

        //     try {
        //         await GoogleSignin.hasPlayServices();
        //         const userInfo = await GoogleSignin.signIn();
        //         console.log("UserInfoAll", userInfo)
        //         console.log("userpersonaldata", userInfo.user.email)
        //     }
        //     catch (error) {
        //         console.log(error);
        //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //             //user cancelled the login
        //         } else if (error.code === statusCodes.IN_PROGRESS) {
        //             //is in progress already
        //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //             //play services not avaliable or outdata
        //         } else {
        //             //some other error
        //         }
        //     }
    }
    return (
        <View style={[styles.Container, {
            backgroundColor: press != null ? "#b2b2b2" : "#000",
        }]}>

            <ImageBackground source={image} style={styles.image}>
                <>
                    <Image source={require("../img/logo.png")} style={styles.logoimg} />

                    <Image source={require("../img/wellogo.png")} 
                    style={{ marginLeft:scale(60),marginTop:verticalScale(130) ,transform: [{ rotate: '20deg' }] ,
                    width:scale(300),height:verticalScale(500)}} />
                </>
            </ImageBackground>


            <View style={styles.footer}>

                <View style={{ alignItems: 'center', marginLeft: scale(10), marginRight: scale(10) }}>
                    <Text style={styles.headertxt}>We're so happy to see{'\n'}you.</Text>
                    <Text style={styles.bodytxt}>To Continue, Login or Singup</Text>
                </View>

                <View style={{ alignItems: 'center', marginTop: verticalScale(40) }}>
                    <View style={[styles.btnview, { justifyContent: 'space-around' }]}>
                        <TouchableOpacity style={styles.btn}
                            //onPress={() => confirmCode()}
                            onPress={() =>
                                // navigation.navigate("MobileNumber")
                                onGoogleButtonPress()

                            }
                        >
                            <Text style={styles.btntext}>Mobile Number</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn}
                            onPress={() =>
                                onGoogleButtonPress()
                            }
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require("../img/google.png")}
                                    style={{ width: scale(20), height: scale(20), marginLeft: -verticalScale(5) }} />
                                <Text style={[styles.btntext, { marginLeft: verticalScale(5), marginTop: 0 }]}>Google</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center',marginBottom:20, marginTop: scale(20) }}>
                    <Text style={styles.lasttxt}>I agree with the <Text style={{ color: '#000' }}>T&C</Text></Text>
                </View>

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
export default Login;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
        flexDirection:'column-reverse'
    },
    image: {
        borderRadius: 15,
        position: 'absolute',
        width: deviceWidth,
        height: deviceHeight,
    },
    logoimg: {
        width: scale(90),
        height: verticalScale(90),
        position: 'absolute',
        marginLeft: verticalScale(10),
        marginTop: scale(20)
    },
    footer: {
        width: scale(350),
        // height: verticalScale(320),
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginTop:scale(300),
        position:'absolute'
    },
    headertxt: {
        fontSize: RFPercentage(4.35),
        fontWeight: "bold",
        color: '#000',
        marginTop: deviceHeight / 30,
        fontFamily: 'Roboto'

    },
    bodytxt: {
        marginTop: scale(20),
        fontSize: RFPercentage(2.90),
        fontFamily: 'Roboto',
        color: 'rgba(13, 13, 13, 0.68)',
    },
    btnview: {
        flexDirection: 'row',
        width: scale(300),
        alignItems: 'center',
        marginLeft: verticalScale(0),
        marginTop: scale(10)

    },
    btn: {
        width: scale(120),
        height: verticalScale(50),
        borderRadius: 5,
        borderColor: "#2192FF",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    btntext: {
        fontSize: RFPercentage(2.05),
        color: '#000',
        fontWeight: '900',
        fontFamily: 'Roboto'
    }, chechbox: {
        flexDirection: 'row',
    },
    lasttxt: {
        textAlign: 'center',
        color: 'rgba(13, 13, 13, 0.68)',
        position: 'absolute',
        textAlign: 'center',
        fontSize: RFPercentage(2)
    }

})
