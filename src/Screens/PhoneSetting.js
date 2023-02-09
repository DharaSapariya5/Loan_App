import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch, Dimensions, Image, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PhoneSetting = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);


    return (
        <View style={style.container}>
            <View style={style.headr}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image style={style.backimg} source={require("../img/back.png")} />
                </TouchableOpacity>

                <Text style={{ fontSize: RFPercentage(3.50), color: '#2192FF', fontWeight: '700' }}>
                    Phone number sharing</Text>
            </View>
            <View style={{ marginLeft: scale(50), marginTop: verticalScale(20), marginBottom: 0 }}>
               
                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>

                    <Text style={{ color: '#000', fontSize: RFPercentage(3) }}>Phone number sharing</Text>

                    <View style={{marginTop: verticalScale(7) ,marginRight:verticalScale(10)}}>
                        <Switch
                            style={{ transform: [{ scaleX: scale(1) }, { scaleY: scale(1) }] }}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#2192FF' : '#f4f3f4'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}></Switch>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: scale(250) }}>
                        <Text style={{ marginTop: 5, fontSize: RFPercentage(2.30) }}>
                            Allow Google to show you a screen that lets you choose a phone number to share with a third-party app requests your phone number</Text>
                    </View>

                </View>

            </View>
        </View>
    );
};

export default PhoneSetting;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    headr: {
        width: deviceWidth / 1,
        height: verticalScale(60),
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row'
    },
    backimg: {
        width: scale(50),
        height: scale(50),
    }
})
