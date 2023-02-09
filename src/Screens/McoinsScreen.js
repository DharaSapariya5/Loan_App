import { DrawerActions } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Text, FlatList, StyleSheet, View, Dimensions, Pressable, Modal, TouchableOpacity } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const DATA = [
  {
    id: 1,
    title: 'Refer a friend and earn flat ₹75',
    data: "Amount you want to borrow",
    data1: "Total Creadit Limit",
    data2: "₹1,000 - ₹20,000",
    data3: "Available Creadit Limit",
    data4: "₹0",
    data5: "Tenure of your loan",

  },
];
const McoinsScreen = ({ navigation }) => {

  const [dropdown, setDropdown] = useState(null);
  const [dropdown1, setDropdown1] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [selected, setSelected] = useState([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setModalVisible(true)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={{}}>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: verticalScale(50) }}>

          <View style={styles.heding}>
            <Text style={{ fontSize: RFPercentage(2.60), color: '#fff', fontWeight: '700' }}>{item.title}</Text>
          </View>

          <View style={{
            backgroundColor: '#fff', width: deviceWidth / 1.10, justifyContent: 'center',
            height: verticalScale(85), paddingTop: verticalScale(10), borderRadius: 9, marginBottom: 10
          }}>

            <View style={{
              borderBottomColor: '#b2b2b2',
              borderBottomWidth: 0.5,
            }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: verticalScale(10)
              }}>
                <Text style={{
                  color: '#B2B2B2', marginLeft: verticalScale(10),
                  fontSize: RFPercentage(2)
                }}>{item.data1}</Text>
                <Text style={{ fontSize: RFPercentage(2), color: '#000', marginRight: scale(10) }}>{item.data2}</Text>
              </View>
            </View>

            <View style={{
              borderTopColor: '#b2b2b2',
              borderTopWidth: 0.5,
            }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 0,
                marginTop: verticalScale(10)
              }}>
                <Text style={{ color: '#B2B2B2', marginLeft: scale(10), fontSize: RFPercentage(2) }}>{item.data3}</Text>
                <Text style={{ fontSize: RFPercentage(2), color: '#000', marginRight: scale(50) }}>{item.data4}</Text>
              </View>

            </View>

          </View>

        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: verticalScale(5) }}>

          <View style={{
            backgroundColor: '#fff', width: deviceWidth / 1.10,
            paddingTop: verticalScale(10), borderRadius: 9, marginBottom: verticalScale(10)
          }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{
                width: scale(30), height: scale(30),
                transform: [{ rotate: '120deg' }], marginTop: verticalScale(10), marginLeft: scale(16)

              }} source={require("../img/money.png")} />
              <Text style={{
                marginLeft: scale(10), fontSize: RFPercentage(2.50),
                fontWeight: "800"
              }}>{item.data}</Text>
            </View>

            <View style={{ alignItems: 'center', marginBottom: verticalScale(20) }}>
              <View style={{
                marginTop: verticalScale(15), borderColor: '#2192FF',
                borderWidth: 1, width: scale(300), borderRadius: 6
              }}>
                <Dropdown
                  style={styles.dropdown}
                  containerStyle={styles.shadow}
                  data={[
                    { label: '500', value: '1' },
                    { label: '1000', value: '2' },
                  ]}
                  labelField="label"
                  valueField="value"
                  label="Dropdown"
                  placeholder="Choose the amount"
                  placeholderStyle={{ fontSize: RFPercentage(2), marginLeft: scale(7), fontWeight: "800", color: '#b2b2b2', padding: verticalScale(0) }}
                  value={dropdown}
                  onChange={(item) => {
                    setDropdown(item.value);
                    console.log('selected', item);
                  }}
                  renderLeftIcon={() => (
                    <Image source={require("../img/moneysing.png")} style={{
                      width: scale(25), height: scale(25),
                      marginTop: verticalScale(5)
                    }} />

                  )}
                  renderRightIcon={() => (
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2791/2791647.png' }}
                      style={{ width: scale(30), height: scale(20), marginRight: -scale(40), marginTop: 5 }} />
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
              </View>

            </View>

            {dropdown != null ?
              <>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{
                    width: scale(25), height: verticalScale(25), marginTop: verticalScale(10), marginLeft: scale(16)

                  }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOgD6zhNi5Ro3Q4sU--NhWHMI5o_ch0khgv2zuYeND3zJFvUb4KT0NqIrPxkhGlxozKtc&usqp=CAU" }} />
                  <Text style={{ marginLeft: scale(10), fontSize: RFPercentage(2.50), fontWeight: "800", marginTop: 5 }}>
                    {item.data5}</Text>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                  <View style={{
                    marginTop: 15, borderColor: '#2192FF',
                    borderWidth: 1, width: scale(300), borderRadius: 6
                  }}>
                    <Dropdown
                      style={styles.dropdown}
                      containerStyle={styles.shadow}
                      data={[
                        { label: '30+90', value: '1' },
                      ]}
                      labelField="label"
                      valueField="value"
                      label="Dropdown"
                      placeholder="Choose the amount"
                      placeholderStyle={{ fontSize: RFPercentage(2), marginLeft: scale(7), fontWeight: "800", color: '#b2b2b2', padding: verticalScale(0) }}
                      value={dropdown1}
                      onChange={(item) => {
                        setDropdown1(item.value);
                        console.log('selected', item);
                      }}
                      renderLeftIcon={() => (
                        <Image source={require("../img/moneysing.png")} style={{
                          width: scale(25), height: scale(25),
                          marginTop: verticalScale(5)
                        }} />

                      )}
                      renderRightIcon={() => (
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2791/2791647.png' }}
                          style={{ width: scale(30), height: scale(20), marginRight: -scale(40), marginTop: 5 }} />
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
                  </View>
                </View>
              </>
              : null}

            {dropdown1 != null ?
              <>
                <View style={{
                  marginLeft: scale(20), marginTop: verticalScale(10),
                  width: deviceWidth / 1.3
                }}>

                  <Text style={{ fontSize: RFPercentage(2.50), fontWeight: '800' }}>Loan Deatlis</Text>

                  <View style={{
                    flexDirection: "row", justifyContent: 'space-between', marginTop: verticalScale(10),
                    marginBottom: verticalScale(2)
                  }}>
                    <Text style={{ fontSize: RFPercentage(2) }}>Amount to be disbursed</Text>
                    <Text style={{ color: '#b2b2b2', fontSize: RFPercentage(2) }}>₹ <Text style={{ fontSize: RFPercentage(2), fontWeight: 'bold', color: "#000" }}>441</Text></Text>
                  </View>

                  <View style={{
                    flexDirection: "row", justifyContent: 'space-between', marginBottom: verticalScale(2),
                  }}>
                    <Text style={{ fontSize: RFPercentage(2) }}>Upfront fee</Text>
                    <Text style={{ color: '#b2b2b2', fontSize: RFPercentage(2) }}>₹ <Text style={{ fontSize: RFPercentage(2), fontWeight: 'bold', color: "#000" }}>50</Text></Text>
                  </View>

                  <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 2 }}>
                    <Text style={{ fontSize: RFPercentage(2) }}>Total GST(18%)</Text>
                    <Text style={{ color: '#b2b2b2', fontSize: RFPercentage(2) }}>₹ <Text style={{ fontWeight: 'bold', color: "#000", fontSize: RFPercentage(2) }}>9</Text></Text>
                  </View>

                </View>

                <View style={{
                  marginLeft: scale(20), marginTop: verticalScale(10), width: deviceWidth / 1.3,
                  marginBottom: verticalScale(25)
                }}>
                  <Text style={{ fontSize: RFPercentage(2.50), fontWeight: '800' }}>Repayment Deatlis</Text>

                  <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10, marginBottom: 2 }}>
                    <Text style={{ fontSize: RFPercentage(2) }}>You repay<Text style={{ fontSize: RFPercentage(1.70), color: "#b2b2b2" }}>(1 st instalment)</Text>{'\n'}<Text style={{ color: '#b2b2b2', fontSize: RFPercentage(1.70) }}>Mar 02, 2023</Text></Text>
                    <Text style={{ color: '#b2b2b2', fontSize: RFPercentage(2) }}>₹ <Text style={{ fontSize: RFPercentage(2), fontWeight: 'bold', color: "#000" }}>500</Text></Text>
                  </View>

                  <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 2 }}>
                    <Text style={{ fontSize: RFPercentage(2) }}>mCoins Cashback</Text>
                    <Text style={{ color: '#b2b2b2', fontSize: RFPercentage(2) }}>₹ <Text style={{ fontSize: RFPercentage(2), fontWeight: 'bold', color: "#000" }}>0</Text></Text>
                  </View>

                  <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 2 }}>
                    <Text style={{ fontSize: RFPercentage(2) }}>Adjusted Repayment{'\n'}<Text style={{ fontSize: RFPercentage(1.70), color: '#b2b2b2', fontWeight: "800", }}>Note:Late charges of Rs 4 per day{'\n'}after due data</Text></Text>
                    <Text style={{ color: '#b2b2b2', fontSize: RFPercentage(2) }}>₹ <Text style={{ fontSize: RFPercentage(2), fontWeight: 'bold', color: "#000" }}>500</Text></Text>
                  </View>

                </View>

              </>
              : null}

            <View style={styles.btnview}>
              <TouchableOpacity style={{
                width: scale(300),
                height: verticalScale(50),
                borderRadius: 5,
                backgroundColor: "#2192FF",
                alignItems: 'center',
                justifyContent: 'center',
              }}
                //disabled={!checked}
                onPress={() => navigation.navigate("")}
              >
                <Text style={styles.btntext}>Request Loan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ width: deviceWidth / 1.10 }}>
            <Text style={{ fontSize: RFPercentage(3), marginBottom: verticalScale(10) }}>Shop</Text>

            <Image source={{ uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWFnWLA2ggt3XD9hxoKtjiVSh2lXl5HoLpY7J0Zc-BOnlhQI6_' }}
              style={{ width: "100%", height: verticalScale(200), marginBottom: verticalScale(14), borderRadius: 10 }} />

            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyeWACHMlsKcTqAAUAhvWuNqwz-AOopbEOA&usqp=CAU' }}
              style={{ width: "100%", height: verticalScale(200), marginBottom: verticalScale(14), borderRadius: 10 }} />

            <Image source={require("../img/ade.jpg")}
              style={{ width: "100%", height: verticalScale(200), marginBottom: verticalScale(14), borderRadius: 10 }} />
          </View>
        </View>


        <View style={{}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              // Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <View style={styles.modalView}>
                <View style={styles.modalView1}>
                  <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', color: '#000' }}>
                    Create Profile!</Text>

                  <View
                    style={{
                      width: "30%", height: verticalScale(2), backgroundColor: '#eee',
                      borderRadius: 5, marginTop: verticalScale(5)
                    }} />
                  <Text style={{ marginTop: 5, fontSize: RFPercentage(2.50), marginRight: scale(5) }}>
                    Only approved users can earn mCoins and be eligible for caseback and discounts. complete your Profile now .</Text>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require("../img/profile.png")}
                      style={{
                        width: scale(160), height: scale(200),
                        borderRadius: 10, marginTop: verticalScale(10), marginBottom: verticalScale(10)
                      }}
                    />
                  </View>

                </View>

                <View style={styles.btnview1}>
                  <TouchableOpacity style={{
                    width: scale(300),
                    // height: verticalScale(50),
                    borderRadius: 5,
                    backgroundColor: "#2192FF",
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                    //disabled={!checked}
                    onPress={() => navigation.navigate("ProfileScreen")}
                  //onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={[styles.btntext,{textAlign:'center'}]}>COMPLETE YOUR PROFILE NOW</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container]}>

      {/* {modalVisible == true && */}
      <>

        <View style={[styles.rightround]} />
        <View style={styles.round} />
        <View style={styles.leftround} />

        <Pressable style={styles.menuView}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <View style={styles.menu} />
          <View style={styles.menu} />
          <View style={styles.menu} />
        </Pressable>


        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: scale(65), height: verticalScale(65), marginTop: 0 }}
            source={require("../img/homelogo.png")} />
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={{ marginLeft: deviceWidth / 1.15, marginTop: -verticalScale(38), position: 'absolute' }}
            onPress={() => navigation.navigate("Notification")}>
            <Image style={{ width: scale(25), height: scale(25) }}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3917/3917270.png' }} />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: verticalScale(70) }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </>
      {/* } */}
    </View>
  )
}
export default McoinsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftround: {
    width: scale(300),
    height: verticalScale(300),
    borderRadius: 500,
    position: 'absolute',
    marginLeft: deviceWidth / 1.60,
    marginTop: -verticalScale(100),
    backgroundColor: '#5BC0F8'
  },
  round: {
    width: scale(300),
    height: verticalScale(300),
    borderRadius: 500,
    position: 'absolute',
    marginLeft: deviceWidth / 4,
    marginTop: -verticalScale(150),
    backgroundColor: '#fff'
  },
  rightround: {
    width: scale(300),
    height: verticalScale(300),
    borderRadius: scale(500),
    position: 'absolute',
    marginLeft: -scale(30),
    marginTop: -verticalScale(80),
    backgroundColor: '#3C79F5'
  },
  menu: {
    width: scale(20),
    height: verticalScale(2.30),
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: verticalScale(3)
  },
  menuView: {
    marginTop: verticalScale(30),
    marginLeft: scale(10),
    position: 'absolute'
  },
  heding: {
    width: deviceWidth / 1.10,
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFBF00',
    borderRadius: 5,
    marginBottom: 10
  },
  heding1: {
    width: deviceWidth / 1.10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hedingMain: {
    width: deviceWidth / 1.10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdown: {
    // borderColor: 'blue',
    // borderWidth: 1,
    marginTop: 0,
    width: scale(250),
    height: verticalScale(50),
    marginBottom: verticalScale(10),
    borderRadius: 5,
    padding: 5
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  shadow: {
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: verticalScale(10),
  },
  shadow1: {
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: verticalScale(9),
  },
  dropdown1: {
    marginTop: 0,
    width: 250,
    height: 50,
    marginBottom: 10,
    borderRadius: 5,
    padding: 5
  },
  btnview: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  btnview1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0
  },
  btn: {
    width: deviceWidth / 2,
    height: deviceHeight / 1,
    borderRadius: 5,
    backgroundColor: "#2192FF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    fontSize: RFPercentage(3),
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Roboto',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10)

  }, chechbox: {
    flexDirection: 'row',
  },

  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // paddingLeft: 35,
    // paddingTop: 20,
    // paddingRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    height: "70%",
    marginTop: 0
  },
  modalView1: {
    marginLeft: scale(10),
    marginRight: scale(10),
    marginTop: verticalScale(10),
    paddingLeft: 15,
    paddingTop: 0,
    paddingRight: 10,
  },
})
