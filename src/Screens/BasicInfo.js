import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters'
import { Dropdown } from 'react-native-element-dropdown';


const deviceHeight = Dimensions.get('window').height;


const BasicInfo = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [focesname, setFocesname] = React.useState(false);

    return (
        <View style={styles.continer}>

            <View>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={require("../img/back.png")}
                            style={{ width: scale(30), height: verticalScale(30), margin: scale(10) }} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: RFPercentage(3), color: '#fff', margin: scale(10), fontWeight: '800' }}
                    >Basic Information</Text>
                </View>

                <View style={{
                    backgroundColor: '#fff',
                    marginLeft: scale(10),
                    marginRight: scale(10),
                    height: "87.50%",
                    borderRadius: 2,
                }}>
                    <Text style={{ marginLeft: scale(15), marginTop: verticalScale(10), fontSize: RFPercentage(2.30) }}>Should be same as KYC doucument</Text>

                    <View>
                    {focesname && <Text 
                    style={{color:"#2192FF",marginLeft:scale(15),
                    fontSize:RFPercentage(2.30),
                    marginTop:verticalScale(10)}}>Frist Name</Text>}

                    <View style={{
                        flexDirection: 'row',
                        marginLeft: scale(15),
                        marginRight:scale(15),
                        marginTop:-verticalScale(8),
                        width: scale(300),
                        height: verticalScale(50),
                        alignItems: 'center',
                        borderBottomWidth: scale(2),
                        borderRadius: 5,
                        borderBottomColor: '#b2b2b2'
                    }}>
                        <TextInput
                            style={{ width: scale(200), fontSize: RFPercentage(2.30), }}
                            placeholder={focesname ? "" : "First Name"}
                            placeholderTextColor={'rgba(13, 13, 13, 0.68)'}
                            value={name}
                            maxLength={10}
                            onFocus={() => setFocesname(true)}
                            onChangeText={(text) => { setName(text) }}
                            keyboardType="ascii-capable"
                        />

                    </View>
                    </View>
                </View>

            </View>

            <View style={{
                flexDirection: 'row', justifyContent: 'space-evenly',
                alignItems: 'center', marginBottom: 0
            }}>

                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    disabled={true}
                >
                    <Image source={require("../img/left.png")}
                        style={{
                            marginLeft: verticalScale(5),
                            width: scale(30), height: scale(30),
                            marginTop: -verticalScale(30)
                        }} />
                    <Text style={{ fontSize: RFPercentage(3), color: '#AEE2FF', marginTop: -verticalScale(30) }}>BACK</Text>

                </TouchableOpacity>

                <View style={{
                    backgroundColor: '#fff', height: verticalScale(15), borderColor: '#EEe',
                    borderRadius: 20, marginTop: -verticalScale(30),
                    borderWidth: 0.2, width: scale(150), marginBottom: verticalScale(0)
                }}></View>

                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
                >
                    <Text style={{ fontSize: RFPercentage(3), color: '#fff', marginTop: -verticalScale(30) }}>NEXT</Text>

                    <Image source={require("../img/next.png")}
                        style={{
                            marginRight: verticalScale(5),
                            width: scale(30), height: scale(30),
                            marginTop: -verticalScale(30)
                        }} />

                </TouchableOpacity>
            </View>

        </View >
    )
}

export default BasicInfo

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: "#2192FF",
        justifyContent: 'space-between'
    },
})
