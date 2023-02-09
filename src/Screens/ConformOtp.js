import React, { useRef, Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, TouchableOpacity, Keyboard } from 'react-native'
// import auth from '@react-native-firebase/auth';
import CountDown from 'react-native-countdown-component';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';

// const OTP = ({ navigation }) => {
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


export default class ConformOtp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin1: '',
            pin2: '',
            pin3: '',
            pin4: '',
            pin5: '',
            pin6: '',
            keyboardStatus: false,
            confirm: null,
            code: '',
            Time: true,
        };
    }

    componentDidMount = () => {
        this.refs.pin1ref.focus();

        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            this.setState({ keyboardStatus: true });
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            this.setState({ keyboardStatus: false });
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    };

    confirmCode = () => {
        // event.preventDefault();
        // const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state;
        // const code = { pin1, pin2, pin3, pin4, pin5, pin6 };
        // console.log(code);
        // try {
        //   confirm.confirm(code);
        //   console.log(code);
        // } catch (error) {
        //   console.log('Invalid code.', error);
        // }
        this.props.navigation.navigate('StatusScreen')
    }

    // // Handle user state changes
    // onAuthStateChanged = (user) => {
    //   console.log(user)
    // }

    // componentDidMount = () => {
    //   this.setState({ Time: true })
    //   const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged());
    //   return subscriber; // unsubscribe on unmount
    // }


    handleChange = (event) => {
        this.setState({
            [event.target.value]: event.target.value
        });
    };

    onDoneCountdown = () => {
        this.setState({ Time: false });
        console.log('Countdown Finish.');
    };

    onPressCountdown = () => {
        console.log('Countdown Component Press.');
    };


    render() {
        const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state;
        return (
            <View style={styles.container}>

                <View style={{ marginTop: scale(50), marginLeft: verticalScale(30) }}>
                    <Text style={styles.header}>Great! Enter the OTP</Text>
                    <Text style={styles.body}>Please enter the OTP you have received</Text>
                    <Text style={styles.body}>+91 <Text>0010011011</Text> <Text style={{ color: '#009EFF', marginLeft: 3 }} onPress={() => navigation.navigate("MobileNumber")}>Change</Text></Text>

                </View>
                <View style={{ marginTop:- verticalScale(150) }}>
                    <View
                        style={{
                            flex: 0.6,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}>
                        <TextInput
                            ref={'pin1ref'}
                            maxLength={1}
                            onChangeText={(pin1) => {
                                this.setState({ code: pin1 })
                                this.setState({ pin1: pin1 });
                                if (pin1 != '') {
                                    this.refs.pin2ref.focus();
                                }
                            }}
                            onChange={this.handleChange}
                            cursorColor="white"
                            keyboardType="phone-pad"
                            value={pin1}
                            style={[styles.otpview, { marginLeft: 20 }]}
                            onSubmitEditing={Keyboard.dismiss}

                        />
                        <TextInput
                            ref={'pin2ref'}
                            onChangeText={(pin2) => {
                                this.setState({ code: pin2 })
                                this.setState({ pin2: pin2 });
                                if (pin2 != '') {
                                    this.refs.pin3ref.focus();
                                }
                            }}
                            value={pin2}
                            maxLength={1}
                            onChange={this.handleChange}
                            onSubmitEditing={Keyboard.dismiss}

                            keyboardType="phone-pad"
                            style={styles.otpview}
                        />
                        <TextInput
                            ref={'pin3ref'}
                            onChangeText={(pin3) => {
                                this.setState({ code: pin3 })
                                this.setState({ pin3: pin3 });
                                if (pin3 != '') {
                                    this.refs.pin4ref.focus();
                                }
                            }}
                            value={pin3}
                            maxLength={1}
                            onChange={this.handleChange}
                            onSubmitEditing={Keyboard.dismiss}

                            keyboardType="phone-pad"
                            style={styles.otpview}
                        />
                        <TextInput
                            ref={'pin4ref'}
                            onChangeText={(pin4) => {
                                this.setState({ code: pin4 })
                                this.setState({ pin4: pin4 });
                                if (pin4 != '') {
                                    this.refs.pin5ref.focus();
                                }
                            }}
                            value={pin4}
                            onChange={this.handleChange}

                            maxLength={1}
                            keyboardType="phone-pad"
                            style={styles.otpview}
                            onSubmitEditing={Keyboard.dismiss}

                        />

                        <TextInput
                            ref={'pin5ref'}
                            onChangeText={(pin5) => {
                                this.setState({ code: pin5 })
                                this.setState({ pin5: pin5 });
                                if (pin5 != '') {
                                    this.refs.pin6ref.focus();
                                }
                            }}
                            value={pin5}
                            onChange={this.handleChange}

                            maxLength={1}
                            keyboardType="phone-pad"
                            style={styles.otpview}
                            onSubmitEditing={Keyboard.dismiss}

                        />

                        <TextInput
                            ref={'pin6ref'}
                            onChangeText={(pin6) => {
                                this.setState({ code: pin6 })
                                this.setState({ pin6: pin6 });
                                // if (pin6 != '') {
                                //   this.refs.pin7ref.focus();
                                // }
                            }}
                            value={pin6}
                            maxLength={1}
                            onChange={this.handleChange}
                            keyboardType="phone-pad"
                            style={[styles.otpview, { marginRight: 20 }]}
                            onSubmitEditing={Keyboard.dismiss}

                        />

                    </View>

                </View>

                <View style={{ marginTop: -verticalScale(70), alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {this.state.Time == true ? (
                            <>
                                <Text style={{ fontSize: RFPercentage(4), fontWeight: 'bold', color: '#009eff' }}>00 :</Text>
                                <View style={{ marginLeft: 0 }}>
                                    <CountDown
                                        until={30}
                                        digitStyle={{
                                            backgroundColor: '#FFF',
                                            width: scale(40),
                                            // borderColor: '#1CC625',
                                        }}
                                        digitTxtStyle={{ color: '#009EFF' }}
                                        timeToShow={['S']}
                                        onFinish={this.onDoneCountdown}
                                        timeLabels={{ s: null }}
                                        onPress={this.onPressCountdown}
                                        size={RFPercentage(4)}
                                    />
                                </View>
                            </>
                        ) : <Text style={{ fontSize: RFPercentage(4), fontWeight: "bold", color: '#009EFF' }}>Resend OTP</Text>}
                    </View>
                </View>

                <View style={[styles.btnview]}>
                    <TouchableOpacity style={{
                        width: scale(300),
                        height: verticalScale(50),
                        borderRadius: 5,
                        backgroundColor: this.state.pin6 != '' ? "#2192FF" : '#DFF6FF',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                        // disabled={!text.length == 10}
                        //onPress={() => this.props.navigation.navigate('LoginorSingup')}
                        onPress={() => this.confirmCode()}
                    >
                        <Text style={styles.btntext}>Send OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
// export default OTP;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'space-between'
    },
    header: {
        fontSize: RFPercentage(3.70),
        color: '#000',
        marginBottom: scale(10)
    },
    body: {
        fontSize: RFPercentage(2.70),
    },
    textOtp: {
        borderBottomWidth: 1,
        width: 50,
        borderBottomColor: '#009EFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinputtext: {
        fontSize: 30,
    },

    btnview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20
    },
    btn: {
        width: scale(300),
        height:verticalScale(50),
        borderRadius: 5,
        backgroundColor: "#2192FF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntext: {
        fontSize: RFPercentage(3),
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    }, chechbox: {
        flexDirection: 'row',
    },
    otpview: {
        fontWeight: '600',
        alignItems: 'center',
        // padding: 10,
        height: verticalScale(50),
        textAlign: 'center',
        width: scale(30),
        borderBottomWidth: 0.5,
        borderBottomColor: 'blue',


    }

})
