import React from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const IncomeReceive = ({ navigation }) => {
    const [selectedIndex, setIndex] = React.useState();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Great! How do you receive{'\n'}your income?</Text>

            <View style={{marginTop:-verticalScale (380)}}>
                <View style={[styles.redio, { borderColor: selectedIndex === 0 ? "#2192FF" : '#eee' }]} >
                    <CheckBox
                        checked={selectedIndex === 0}
                        onPress={() => setIndex(0)}
                        uncheckedColor="blue"
                        checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                        uncheckedIcon={<View style={styles.checkredio} />}
                    />
                    <Text style={{ fontSize: RFPercentage(2.50) }}>In Bank Account</Text>
                </View>
                <View style={[styles.redio, { borderColor: selectedIndex === 1 ? "#2192FF" : '#eee' }]} >
                    <CheckBox
                        checked={selectedIndex === 1}
                        onPress={() => setIndex(1)}
                        uncheckedColor="blue"
                        checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                        uncheckedIcon={<View style={styles.checkredio} />}
                    />
                    <Text style={{ fontSize: RFPercentage(2.50) }}>In Cash and Cheques</Text>
                </View>
            </View>

            <View style={styles.btnview}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: selectedIndex == null ? "#DFF6FF" : "#2192FF", }]}
                    onPress={() => navigation.navigate('ReferralCode')}
                // onPress={() => this.confirmCode()}
                >
                    <Text style={styles.btntext}>Continue</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default IncomeReceive;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'space-between'
    },
    header: {
        fontSize: RFPercentage(3),
        marginTop: verticalScale(20),
        marginLeft: scale(15),
        color: '#000'
    },
    redio: {
        borderWidth: 1, height: verticalScale(50), flexDirection: 'row', alignItems: 'center',
        width: "85%", marginTop: verticalScale(30), borderRadius: 5, marginBottom: -verticalScale(10),
        marginLeft: deviceWidth / 15
    },
    redioimg: { width: 30, height: 25 },
    redioheader: { fontSize: 17, color: "#000", fontWeight: '800' },
    mainRedio: { position: "absolute", marginTop: -15 },
    bodytext: { fontSize: 15, margin: 10 },
    main: { flexDirection: 'row', marginTop: 15 },

    btnview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10
    },
    btn: {
        width: scale(300),
        height:verticalScale(50),
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext: {
        fontSize: RFPercentage(3),
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Roboto'
    }, chechbox: {
        flexDirection: 'row',
    },
    checkredio: {
        borderColor: "#2192FF", width: scale(23), height: scale(23),
        borderWidth: 3, borderRadius: 20, alignItems: 'center', justifyContent: 'center'
    },
    checkredioView: { backgroundColor: "#2192FF", width: scale(13), height: scale(13), borderRadius: 20 }

})
