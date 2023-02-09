import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { verticalScale,scale } from 'react-native-size-matters';


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;


const ReferralCode = ({navigation}) => {
    const [text, setText] = useState();

    return (
        <View style={styles.continue}>
            <Image source={require("../img/referralcodeimg.jpg")} style={styles.img} />

            <Text style={styles.bodytext}>Do you hvae a referral Code ?</Text>

            <View style={{ alignItems: 'center',marginTop:-verticalScale(130) }}>
                <TextInput
                    style={{ width: deviceWidth / 1.20,height:verticalScale(66), borderRadius: 8, padding: 20, fontSize: RFPercentage(2.50), borderColor: '#eee', borderWidth: 1 }}
                    placeholder={"Enter Referral Code"}
                    placeholderTextColor={'rgba(13, 13, 13, 0.68)'}
                    value={text}
                    onChangeText={(text) => {
                        setText(text)
                    }}
                    keyboardType="phone-pad"
                />
            </View>

            <View>
                <View style={[styles.btnview]}>
                <Text style={{color: "#2192FF" ,fontSize:RFPercentage(2.30)}} 
                onPress={() => navigation.navigate("Language")}>I'don't have a referral code</Text>
                    <TouchableOpacity style={{
                        width: scale(300),
                        height:verticalScale(50),
                        borderRadius: 5,
                        backgroundColor: text != null ? "#2192FF" : '#DFF6FF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop:20
                    }}
                        onPress={() => navigation.navigate("Language")}
                    >
                        <Text style={styles.btntext}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default ReferralCode;

const styles = StyleSheet.create({
    continue: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'space-between'
    },
    img: {
        width: "100%",
        height: verticalScale(300),
    },
    bodytext: {
        fontSize: RFPercentage(3),
        margin: 25,
        color: '#000',
        marginTop:-verticalScale (120)
    },

    btntext: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Roboto'
    },

    btnview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    btn: {
        width: 300,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
