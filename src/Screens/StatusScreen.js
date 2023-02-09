import React from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


const StatusScreen = ({ navigation }) => {
    const [selectedIndex, setIndex] = React.useState();

    return (
        <View style={styles.continer}>
            <View style={styles.bodyview}>
                <Text style={styles.header}>Let's get you started</Text>
                <Text style={styles.body}>Select your current Status</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop:-verticalScale(50)}}>
                <View style={[styles.redio, { borderColor: selectedIndex === 0 ? "#2192FF" : '#eee' }]} >
                    <View style={styles.main}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.redioimg}
                                source={require("../img/studeicon.png")} />

                            <Text style={styles.redioheader}>I'm a Student</Text>
                        </View>


                        <View style={styles.mainRedio}>
                            <CheckBox
                                checked={selectedIndex === 0}
                                onPress={() =>
                                    setIndex(0)
                                }
                                uncheckedColor="blue"
                                checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                                uncheckedIcon={<View style={styles.checkredio} />}
                            />
                        </View>
                    </View>
                    <Text style={styles.bodytext}>I am Above 18 years old. I have a valid college ID.I have a Voater card/DN/passport/Adhar card.</Text>

                </View>
                <View style={[styles.redio, { borderColor: selectedIndex === 1 ? "#2192FF" : '#eee' }]} >
                    <View style={styles.main}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={[styles.redioimg,{}]} source={require("../img/Emplyo.png")} />
                            <Text style={styles.redioheader}>I'm Salary Employee</Text>
                        </View>

                        <View style={styles.mainRedio}>
                            <CheckBox
                                checked={selectedIndex === 1}
                                onPress={() => setIndex(1)}
                                uncheckedColor="blue"
                                checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                                uncheckedIcon={<View style={styles.checkredio} />}
                            />
                        </View>
                    </View>
                    <Text style={styles.bodytext}>I am less than four then 40 years old. I have a valid  ID proof and PIN. I have employment proof.</Text>

                </View>
                <View style={[styles.redio, { borderColor: selectedIndex === 3 ? "#2192FF" : '#eee' }]} >
                    <View style={styles.main}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.redioimg} source={require("../img/Selfemp.png")} />
                            <Text style={styles.redioheader}>I'm a Self-Employee</Text>
                        </View>

                        <View style={styles.mainRedio}>
                            <CheckBox
                                checked={selectedIndex === 3}
                                onPress={() => setIndex(3)}
                                uncheckedColor="blue"
                                checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                                uncheckedIcon={<View style={styles.checkredio} />}
                            />
                        </View>
                    </View>
                    <Text style={styles.bodytext}>I have ID card and proof needed by mPockket to assess my credit line.</Text>
                </View>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: scale(0) }}>
                <View style={styles.btnview}>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: selectedIndex == null ? "#DFF6FF" : "#2192FF", }]}
                        onPress={() => navigation.navigate('IncomeReceive')}
                    // onPress={() => this.confirmCode()}
                    >
                        <Text style={styles.btntext}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default StatusScreen;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'space-between'
    },
    bodyview: {
        marginTop: verticalScale(20),
        marginLeft: scale(20)
    },
    header: {
        fontSize: RFPercentage(2.50),
        color: 'rgba(13, 13, 13, 0.68)',
        marginBottom: 3
    },
    body: {
        color: '#000',
        fontSize: RFPercentage(3.60),
    },
    redio: {
        borderWidth: 1, height: verticalScale(131),
        width: "80%",
        width: deviceWidth - 50,
        marginTop: verticalScale(30),
        borderRadius: 5,
        marginBottom: -verticalScale(10)
    },
    redioimg: { width: scale(25), height: scale(27),marginLeft:5 },
    redioheader: {
        fontSize: RFPercentage(2.60), color: "#000",
        width: '70%',
        fontWeight: '800', marginLeft: scale(10)
    },
    mainRedio: { marginTop: -verticalScale(0) },
    bodytext: { fontSize: RFPercentage(2.50), margin: 10 },
    main: { flexDirection: 'row', marginTop: verticalScale(0) },

    btnview: {
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: deviceHeight / 5.50,
        marginBottom: 10,
    },
    btn: {
        width: scale(300),
        height: verticalScale(50),
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
        borderColor: '#2192FF',
        width: scale(23),
        height: scale(23),
        borderWidth: 3,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkredioView: { backgroundColor: '#2192FF', width: scale(13), height: scale(13), borderRadius: 20 }
})
