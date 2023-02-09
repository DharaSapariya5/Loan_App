import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Image ,Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native'


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;



const Splash = () => {

    const animation = useRef(null);
    const navigation = useNavigation();

    useEffect(() => {
        animation.current?.play();

        navigation.addListener('focus', () => {
            animation.current?.play();
        });

        setTimeout(() => {
            navigate();
        }, 2000)
    }, []);

    const navigate = () => {
        navigation.navigate("HomeScreen");
    }

    return (
        <View style={styles.animationContainer}>
            <Image source={require('../img/logo.png')} style={styles.logo} />
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: "#009EFF",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width:"30%",
        height:"20%",
        // borderRadius:50
        // width: scale(200),
        // height: verticalScale(200),
        // padding: moderateScale(10),
        // marginTop: moderateScale(100),
        // marginLeft: moderateScale(100),

    },
});
