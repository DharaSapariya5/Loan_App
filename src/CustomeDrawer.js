import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { scale, verticalScale } from 'react-native-size-matters';
import { RFPercentage } from 'react-native-responsive-fontsize';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;


const CustomeDrawer = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: "https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" }}
                    style={styles.imglogo} />
                <Text style={styles.headertext}>User Name</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View><Text style={styles.footertext}>Version 3.7.3</Text></View>
        </View>
    );
};

export default CustomeDrawer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#2192FF',
        width: '100%',
        height: verticalScale(90),
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    imglogo: {
        width: scale(60),
        height: scale(60),
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius:scale (30)
    },
    headertext: {
        fontSize: RFPercentage(3),
        fontWeight: '800',
        color: '#fff',
        marginLeft:verticalScale(10)
    },
    footertext:{
        fontSize:RFPercentage(2.30),
        fontWeight:'800',
        textAlign:'center',
        marginBottom:5
    }
})
