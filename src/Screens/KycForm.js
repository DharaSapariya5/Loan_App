import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters'
import { Dropdown } from 'react-native-element-dropdown';


const deviceHeight = Dimensions.get('window').height;


const KycForm = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [focused1, setFocused1] = React.useState(false);
  const [adar, setAdar] = React.useState('')
  const [dropdown, setDropdown] = React.useState(null);
  const [value, setValue] = React.useState('')
  const [dropdown2, setDropdown2] = React.useState(null)
  const [check, setCheck] = React.useState(false);

  return (
    <View style={styles.continer}>

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../img/back.png")}
            style={{ width: scale(30), height: verticalScale(30), margin: scale(10) }} />
        </TouchableOpacity>

        <Text style={{ fontSize: RFPercentage(3), color: '#fff', margin: scale(10), fontWeight: '800' }}>KYC Verifiction</Text>
      </View>

      <View style={{
        backgroundColor: '#fff',
        marginLeft: scale(10),
        marginRight: scale(10),
        height: "100%",
        borderRadius: 2,
        justifyContent: 'space-between'
      }}>

        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: verticalScale(0) }}>
            <View style={{
              backgroundColor: '#b2b2b2', borderColor: '#fff', borderWidth: 5,
              width: scale(100), height: scale(100), borderRadius: 10, justifyContent: 'center'
            }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/552/552721.png' }}
                  style={{ width: scale(70), height: scale(70) }} />
              </View>

              <View style={{ position: 'absolute' }}>
                <TouchableOpacity style={{
                  width: scale(50), height: scale(50), backgroundColor: '#fff', borderRadius: 50,
                  alignItems: 'center', justifyContent: 'center', marginLeft: scale(50), marginTop: verticalScale(58)
                }}>
                  <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/45/45010.png" }}
                    style={{ width: scale(30), height: verticalScale(30) }} />
                </TouchableOpacity>
              </View>

            </View>

            <View>
              {focused &&
                <Text style={{
                  color: text.length !== 10 ? "#2192FF" : "red", marginTop: -verticalScale(8),
                  marginLeft: scale(7),
                  position: 'absolute'
                }}>PAN Card No</Text>
              }
              {/* <View style={{ position: 'absolute' }}>
              {text.length === 10 &&
                <Text style={{ marginLeft: scale(7), color: 'red', 
                marginTop:deviceHeight/14 }}>Enter a Valid PAN number</Text>
              }
            </View> */}
              <View style={{ marginLeft: scale(3), borderBottomColor: text.length !== 10 ? '#b2b2b2' : "red", borderBottomWidth: 0.5 }}>
                <TextInput
                  maxLength={10}
                  style={{ width: scale(210), fontSize: RFPercentage(2.30), }}
                  placeholder={focused ? "" : "PAN Card No"}
                  value={text}
                  cursorColor={'black'}
                  onFocus={() => setFocused(true)}
                  onChangeText={(text) => {
                    setText(text)
                  }}
                  keyboardType="ascii-capable"
                />
              </View>

            </View>
          </View>

          <View style={{ marginTop: -scale(0) }}>
            <Text style={{ color: '#2192ff', fontSize: RFPercentage(2.30), margin: 10 }}>Upload Selfie</Text>
          </View>

          <View style={{ marginTop: -scale(0) }}>
            {dropdown != null &&
              <Text style={{ marginLeft: scale(15) }}>KYC Document Type</Text>
            }
            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.shadow}
              data={[
                { label: 'Voter ID', value: '1' },
                { label: 'Passport', value: '2' },
                { label: 'Driving License', value: '3' },
                { label: 'Aadhaar', value: '4' },
              ]}
              labelField="label"
              valueField="value"
              label="Dropdown"
              placeholder="KYC Document Type"
              placeholderStyle={{ color: '#000', fontSize: RFPercentage(2), marginLeft: scale(0), padding: verticalScale(0) }}
              value={dropdown}
              onChange={(item) => {
                setDropdown(item.value);
                console.log('selected', item.value);
              }}
              renderRightIcon={() => (
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2791/2791647.png' }}
                  style={{
                    width: scale(25), height: scale(20), marginRight: -scale(0),
                    marginTop: 5
                  }} />
              )}
              renderItem={(item) => {
                return (
                  <View style={styles.item}>
                    <Text style={styles.textItem}>{item.label}</Text>
                  </View>
                );
              }}
              textError="Error"
            />

            <View
              style={{ marginLeft: scale(15), marginBottom: verticalScale(5), borderBottomWidth: 0.5, borderBottomColor: '#b2b2b2', marginRight: scale(10) }}>
              {focused1 &&
                <>
                  {dropdown == 4 ?
                    <Text style={{ color: adar.length !== 12 ? "red" : '#2192ff' }}>Enter 12 digit Aadhaar number</Text>

                    : <Text style={{ color: '#2192ff' }}>KYC Document No</Text>

                  }
                </>
              }
              {dropdown == 4 ?

                <View style={{}}>
                  <TextInput
                    maxLength={12}
                    style={{ fontSize: RFPercentage(2), height: verticalScale(35) }}
                    placeholder={focused1 ? "" : "Enter 12 digit Aadhaar number"}
                    value={adar}
                    placeholderTextColor={"#000"}
                    cursorColor={'black'}
                    onFocus={() => setFocused1(true)}
                    onChangeText={(text) => {
                      setAdar(text)
                    }}
                    keyboardType="ascii-capable"
                  />
                </View>
                :
                <TextInput
                  maxLength={12}
                  style={{ fontSize: RFPercentage(2), height: verticalScale(35) }}
                  placeholder={focused1 ? "" : "KYC Document No"}
                  value={value}
                  placeholderTextColor={"#000"}
                  cursorColor={'black'}
                  onFocus={() => setFocused1(true)}
                  onChangeText={(text) => {
                    setValue(text)
                  }}
                  keyboardType="ascii-capable"
                />
              }
            </View>

            {dropdown == 3 &&
              <>
                {dropdown2 != null &&
                  <Text style={{ marginLeft: scale(15) }}>Driving License State</Text>
                }
                <Dropdown
                  style={[styles.dropdown, { marginBottom: verticalScale(20) }]}
                  containerStyle={styles.shadow}
                  data={[
                    { label: 'Andhra Pradesh', value: '1' },
                    { label: 'Arunachal Pradesh	', value: '2' },
                    { label: 'Assam', value: '3' },
                    { label: 'Aadhaar', value: '4' },
                    { label: 'Bihar	', value: '5' },
                    { label: 'Chhattisgarh', value: '6' },
                    { label: 'Goa', value: '7' },
                    { label: 'Gujarat	', value: '8' },
                    { label: 'Haryana', value: '9' },
                    { label: 'Himachal Pradesh', value: '10' },
                    { label: 'Jharkhand', value: '11' },
                    { label: 'Karnataka', value: '12' },
                    { label: 'Kerala', value: '13' },
                    { label: 'Madhya Pradesh', value: '14' },
                    { label: 'Maharashtra', value: '15' },
                    { label: 'Manipur', value: '16' },
                    { label: 'Meghalaya	', value: '17' },
                    { label: 'Mizoram', value: '18' },
                    { label: 'Nagaland', value: '19' },
                    { label: 'Odisha	', value: '20' },
                    { label: 'Punkab', value: '21' },
                    { label: 'Rajasthan', value: '22' },
                    { label: 'Sikkim', value: '23' },
                    { label: 'Tamil Nadi', value: '24' },
                    { label: 'Telangana', value: '25' },
                    { label: 'Tripura', value: '26' },
                    { label: 'Uttar Pradesh', value: '27' },
                    { label: 'Uttatakhand', value: '28' },
                    { label: 'West Bengal', value: '29' },


                  ]}
                  labelField="label"
                  valueField="value"
                  label="Dropdown"
                  placeholder="Driving License State"
                  placeholderStyle={{ color: '#000', fontSize: RFPercentage(2), marginLeft: scale(0), padding: verticalScale(0) }}
                  value={dropdown2}
                  onChange={(item) => {
                    setDropdown2(item.value);
                    console.log('selected', item);
                  }}
                  renderRightIcon={() => (
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2791/2791647.png' }}
                      style={{
                        width: scale(25), height: scale(20), marginRight: -scale(0),
                        marginTop: 5
                      }} />
                  )}
                  renderItem={(item) => {
                    return (
                      <View style={styles.item}>
                        <Text style={styles.textItem}>{item.label}</Text>
                      </View>
                    );
                  }}
                  textError="Error"
                />
              </>
            }
            {dropdown != 4 &&

              <>
                {dropdown == null ? null :
                  <View style={{
                    flexDirection: 'row',
                    marginTop: verticalScale(20), justifyContent: 'space-evenly', alignItems: 'center'
                  }}>
                    <TouchableOpacity>
                      <ImageBackground source={require("../img/box.png")}
                        style={{ width: scale(100), height: scale(100), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                          fontSize: RFPercentage(3),
                        }}>+</Text>
                      </ImageBackground>
                      <Text style={{ fontSize: RFPercentage(2.20), textAlign: 'center' }}>Front Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <ImageBackground source={require("../img/box.png")}
                        style={{ width: scale(100), height: scale(100), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                          fontSize: RFPercentage(3),
                        }}>+</Text>
                      </ImageBackground>
                      <Text style={{ fontSize: RFPercentage(2.20), textAlign: 'center' }}>Back Image</Text>

                    </TouchableOpacity>
                  </View>
                }
              </>
            }
          </View>
        </View>

        <View style={{}}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: verticalScale(60),
          }}>
            {dropdown == 4 &&
              <Text style={{ fontSize: RFPercentage(2.20), textAlign: 'center', color: '#2192ff', marginBottom: verticalScale(10) }}>
                OTP will be send to mobile number linked with your Aadhaar</Text>
            }
            <TouchableOpacity style={{
              width: scale(250),
              height: verticalScale(55),
              borderRadius: 5,
              backgroundColor:dropdown ==null ? "#b2b2b2" : '#2192FF',
              alignItems: 'center',
              justifyContent: 'center',
            }}
              // onPress={() => navigation.navigate("")}
            >
              <Text style={{
                fontSize: RFPercentage(3),// fontSize: RFValue(17, 680),
                color: '#fff',
                fontWeight: '600',
                fontFamily: 'Roboto'
              }}>Send OTP</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View >
  )
}

export default KycForm

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "#2192FF",
  },
  dropdown: {
    // borderColor: 'blue',
    // borderWidth: 1,
    marginLeft: scale(10),
    width: scale(315),
    // height: verticalScale(50),
    marginBottom: verticalScale(5),
    borderRadius: 5,
    borderBottomColor: '#b2b2b2',
    borderBottomWidth: 1,
    padding: scale(5),

  },
  shadow: {
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: verticalScale(10),
  },
})