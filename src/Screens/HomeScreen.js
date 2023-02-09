import React from 'react'
import { Image, StyleSheet, TouchableOpacity, Dimensions, Text, View } from 'react-native'
import { scale, verticalScale } from "react-native-size-matters"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';

const images = [
    {
        title: 'Get instant loans with approvals',
        image: "https://img.freepik.com/free-vector/money-lending-abstract-concept_335657-3053.jpg",
        id: 1
    },
    {
        title: 'Get money in wallet or bank account',
        image: 'https://img.freepik.com/premium-vector/home-loan-house-rent-flat-vector-illustration_82574-4340.jpg?w=2000',//require('../img/1page.jpg'),
        id: 2
    },
    {
        title: 'Refer & earn exciting gifts',
        image: 'https://cdn.dribbble.com/users/1484145/screenshots/14190768/bank_loan_4x.png',//require('../img/1page.jpg'),
        id: 3
    },
]

const Home = ({ navigation }) => {

    return (
        <View style={styles.contanier}>
            <View style={styles.imgView}>
                <Image source={require('../img/homelogo.png')} style={styles.logo} />
            </View>

            <View style={{ marginLeft: 0 }}>
                <FlatListSlider
                    data={images}
                    // width={scale(330)}
                    height={verticalScale(450)}
                    timer={1000}
                    onPress={item => alert(JSON.stringify(item))}
                    indicatorActiveWidth={scale(30)}
                    indicatorStyle={{ width: scale(8), height: verticalScale(8), borderRadius: 10, marginBottom: 0 }}
                    contentContainerStyle={{ paddingHorizontal: 0, marginBottom: 20 }}
                />

            </View>
            <View style={styles.btnview}>
                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate("PermissionPage")}
                >
                    <Text style={styles.btntext}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    imgView: {
        marginTop: verticalScale(10),
        marginLeft: 20,
    },
    logo: {
        width: scale(70),
        height: verticalScale(70),
        borderRadius: 50,
        // position: 'absolute'
    },
    btnview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    btn: {
        width: scale(250),
        height: verticalScale(55),
        borderRadius: 5,
        backgroundColor: '#2192FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext: {
        fontSize: RFPercentage(3),// fontSize: RFValue(17, 680),
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Roboto'
    },
    img: {
        width: scale(300),
        height: verticalScale(450),
    },
    text: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8
    },
    dot: {
        width: scale(8),
        height: verticalScale(8),
        backgroundColor: '#2192ff',
        borderRadius: 20,
        marginLeft: 5
    }
})


// import React, { useState, useRef, useEffect } from 'react';
// import { View, ScrollView, Image, Dimensions } from 'react-native';

// const screenWidth = Dimensions.get('window').width;

// const PermissionPage = () => {
//   const scrollRef = useRef(null);
//   const [scrollX, setScrollX] = useState(0);

//   const images = [
//     require('../img/profile.png'),
//     require('../img/profile.png'),
//     require('../img/profile.png'),
//   ];

//   useEffect(() => {
//     setInterval(() => {
//       setScrollX(scrollX => scrollX + screenWidth);
//       scrollRef.current?.scrollTo({ x: scrollX + screenWidth, y: 0, animated: true });
//     }, 500);
//   }, []);

//   return (
//     <View>
//       <ScrollView
//         ref={scrollRef}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         scrollEventThrottle={16}
//         pagingEnabled
//         onScroll={({ nativeEvent }) => {
//           setScrollX(nativeEvent.contentOffset.x);
//         }}
//       >
//         {images.map((image, index) => (
//           <Image key={index} source={image} style={{ width: screenWidth, height: 300 }} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default PermissionPage;
