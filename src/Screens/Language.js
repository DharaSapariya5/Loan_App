import React from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { CheckBox } from 'react-native-elements';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const Language = ({ navigation }) => {
    const [selectedIndex, setIndex] = React.useState();

    return (
        <View style={styles.continue}>
            <Text style={styles.header}>what is your preferred language of communication other than English ?</Text>

            <View style={{ marginTop: -verticalScale(70) }}>
                <View style={{ flexDirection: 'row', width: deviceWidth / 1 }}>
                    <View style={[styles.redio, { borderColor: selectedIndex === 0 ? "#2192FF" : '#eee', marginLeft: 50 }]} >
                        <CheckBox
                            checked={selectedIndex === 0}
                            onPress={() => setIndex(0)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>हिंदी</Text>
                    </View>
                    <View style={[styles.redio1, { borderColor: selectedIndex === 1 ? "#2192FF" : '#eee' }]} >
                        <CheckBox
                            checked={selectedIndex === 1}
                            onPress={() => setIndex(1)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>বাংলা</Text>{/*bangadi*/}
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: deviceWidth / 1 }}>
                    <View style={[styles.redio, { borderColor: selectedIndex === 2 ? "#2192FF" : '#eee', marginLeft: 50 }]} >
                        <CheckBox
                            checked={selectedIndex === 2}
                            onPress={() => setIndex(2)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>తెలుగు</Text>{/*telangana*/}
                    </View>
                    <View style={[styles.redio1, { borderColor: selectedIndex === 3 ? "#2192FF" : '#eee' }]} >
                        <CheckBox
                            checked={selectedIndex == 3}
                            onPress={() => setIndex(3)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>मराठी</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: deviceWidth / 1 }}>
                    <View style={[styles.redio, { borderColor: selectedIndex === 5 ? "#2192FF" : '#eee', marginLeft: 50 }]} >
                        <CheckBox
                            checked={selectedIndex === 5}
                            onPress={() => setIndex(5)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>தமிழ்</Text>{/*tamil*/}
                    </View>
                    <View style={[styles.redio1, { borderColor: selectedIndex === 6 ? "#2192FF" : '#eee' }]} >
                        <CheckBox
                            checked={selectedIndex == 6}
                            onPress={() => setIndex(6)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>ଓଡ଼ିଆ</Text>{/**oriya*/}
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: deviceWidth / 1 }}>
                    <View style={[styles.redio, { borderColor: selectedIndex === 7 ? "#2192FF" : '#eee', marginLeft: 50 }]} >
                        <CheckBox
                            checked={selectedIndex === 7}
                            onPress={() => setIndex(7)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>ಕನ್ನಡ</Text>{/*kannad*/}
                    </View>
                    <View style={[styles.redio1, { borderColor: selectedIndex === 8 ? "#2192FF" : '#eee' }]} >
                        <CheckBox
                            checked={selectedIndex == 8}
                            onPress={() => setIndex(8)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>ગુજરાતી</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: deviceWidth / 1 }}>
                    <View style={[styles.redio, { borderColor: selectedIndex === 9 ? "#2192FF" : '#eee', marginLeft: 50 }]} >
                        <CheckBox
                            checked={selectedIndex === 9}
                            onPress={() => setIndex(9)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>മലയാളം</Text>{/*maliyalam*/}
                    </View>
                    <View style={[styles.redio1, { borderColor: selectedIndex === 10 ? "#2192FF" : '#eee' }]} >
                        <CheckBox
                            checked={selectedIndex == 10}
                            onPress={() => setIndex(10)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>ਪੰਜਾਬੀ </Text>{/*panjabi*/}
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: deviceWidth / 1 }}>
                    <View style={[styles.redio, { borderColor: selectedIndex === 11 ? "#2192FF" : '#eee', marginLeft: 50 }]} >
                        <CheckBox
                            checked={selectedIndex === 11}
                            onPress={() => setIndex(11)}
                            uncheckedColor="blue"
                            checkedIcon={<View style={styles.checkredio}><View style={styles.checkredioView} /></View>}
                            uncheckedIcon={<View style={styles.checkredio} />}
                        />
                        <Text style={{ fontSize: RFPercentage(2) }}>অসমীয়া</Text>{/*aasamese*/}
                    </View>
                </View>
            </View>

            {selectedIndex != null &&
                <View style={{alignItems:'center',justifyContent:'center' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', marginTop: verticalScale(0) }}>
                        <View style={{
                            padding: 10,
                            marginTop: 20,
                            // width:scale(300),
                            backgroundColor: '#ECF9FF',
                            // height: verticalScale(66),
                            borderRadius: 5,
                            alignItems: 'center', flexDirection: 'row',
                        }}>

                            <Image source={require("../img/lung.png")}
                                style={{ width: scale(30), height: scale(30), borderRadius: 30 }} />

                            <Text style={{ marginLeft: 5, fontSize: RFPercentage(2.05) }}>
                                All documents will be shared in English{'\n'} and the language selected above</Text>
                        </View>
                    </View>
                </View>
            }
            <View style={[styles.btnview]}>
                <TouchableOpacity style={{
                    width: scale(300),
                    height: verticalScale(50),
                    borderRadius: 5,
                    backgroundColor: selectedIndex != null ? "#2192FF" : '#DFF6FF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 0
                }}
                    onPress={() => navigation.navigate("MainHome")}
                >
                    <Text style={styles.btntext}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Language;

const styles = StyleSheet.create({
    continue: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    header: {
        fontSize: RFPercentage(3),
        color: '#000',
        margin: 30
    },
    redio1: { borderWidth: 1, height: verticalScale(50), flexDirection: 'row', alignItems: 'center', width: "35%", marginTop: 30, borderRadius: 5, marginBottom: -10, marginLeft: deviceWidth / 19 },

    redio: {
        borderWidth: 1, height: verticalScale(50), flexDirection: 'row', alignItems: 'center',
        width: "35%", marginTop: 30, borderRadius: 5, marginBottom: -10, marginLeft: deviceWidth / 10
    },
    redioimg: { width: 30, height: 25 },
    redioheader: { fontSize: 17, color: "#000", fontWeight: '800' },
    mainRedio: { position: "absolute", marginTop: -15 },
    bodytext: { fontSize: 15, margin: 10 },
    main: { flexDirection: 'row', marginTop: 15 },
    btntext: {
        fontSize: RFPercentage(3),
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Roboto'
    }, chechbox: {
        flexDirection: 'row',
    },
    checkredio: { borderColor: "#2192FF", width: scale(23), height: scale(23), borderWidth: 3, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
    checkredioView: { backgroundColor: "#2192FF", width: scale(13), height: scale(13), borderRadius: 20 },

    btnview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: verticalScale(10)
    },
    btn: {
        width: scale(300),
        height: verticalScale(50),
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

})
