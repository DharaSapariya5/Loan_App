import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Switch, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Notification = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);


    return (
        <View style={style.container}>
            <View style={style.headr}>
                <ImageBackground source={require("../img/Notification.png")} style={{
                    width: "100%", height: "60%", flexDirection: 'row', justifyContent: 'flex-start'
                }}>
                    <>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image style={style.backimg}
                                source={require("../img/back.png")} />
                        </TouchableOpacity>
                        <Text
                            style={{ fontSize: RFPercentage(3.20), marginTop: verticalScale(30), marginLeft: deviceWidth / 5, color: '#fff', }}>Notification</Text>
                    </>
                </ImageBackground>
            </View>

            <View style={{

                position:'absolute',marginTop:verticalScale(150), marginBottom:0,width:scale(330),
                elevation: 5, alignItems: 'center', borderColor: '#b3b3b3', 
                borderWidth: 0.2, backgroundColor: '#fff', flexDirection: 'row',alignSelf:'center',
            }}>
                <View style={{padding:5,marginTop:verticalScale(10),marginBottom:verticalScale(10)}}>
                    <Image source={require("../img/folder.png")} style={{ width: scale(30), height: verticalScale(30), marginLeft: scale(5) }} />
                </View>
                <View style={{width:scale(270), paddingLeft:4,marginTop:verticalScale(10),marginBottom:verticalScale(10)}}>
                    <Text style={{fontSize:RFPercentage(2.)}}>You are logged out becuase You are logged in from a different Device</Text>
                    <Text style={{fontSize:RFPercentage(2),color:'#b2b2b2',marginTop:verticalScale(4)}}>Jan 31,2023 08:54 AM</Text>
                </View>
            </View>

        </View>
    );
};

export default Notification;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent:'space-between'
    },
    headr: {
        // elevation: 2,
        // alignItems: 'center',
        // flexDirection: 'row',
        // borderBottomRightRadius:50,
        // borderBottomLeftRadius:20,
    },
    backimg: {
        width: scale(30),
        height: verticalScale(30),
        marginTop: verticalScale(30),
        marginLeft: scale(10)
    }
})
