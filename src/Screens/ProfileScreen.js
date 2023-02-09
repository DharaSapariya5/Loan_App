import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters'
import { ScrollView } from 'react-native-gesture-handler'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.conteiner}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{
          marginLeft: scale(10)
          , marginTop: verticalScale(20)
        }}>
          <Text style={{
            fontSize: RFPercentage(4), fontWeight: 'bold', color: '#3C79F5',
          }}>Hi Dhara Patel,</Text>
        </View>

        <View style={{
          width: scale(29),
          height: scale(29),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#3c79f5',
          borderRadius: scale(50),
          marginRight: scale(10),
          marginTop: verticalScale(25)
        }}>
          <Text style={{ color: '#fff', fontSize: RFPercentage(3), fontWeight: '800' }}>?</Text>
        </View>

      </View>

      <View style={{ marginLeft: scale(10), marginRight: scale(10) }}>
        <Text style={{ fontSize: RFPercentage(2.30), fontWeight: 'bold', color: '#b2b2b2' }}>Completeyour profileinformation to start borrowring money</Text>
      </View>


      <View style={{ marginTop: verticalScale(20) }}>
        <View style={{
          borderColor: '#3c79f5',
          borderWidth: 0.5,
          borderRadius: scale(10),
          marginLeft: scale(10),
          marginRight: scale(10),
          backgroundColor: '#ECF9FF',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: verticalScale(20)
        }}>
          <Text style={{ color: '#3c79f5', fontWeight: 'bold', fontSize: RFPercentage(3), marginTop: verticalScale(5), marginBottom: verticalScale(3) }}>Pre-approved loan amount</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require("../img/procoin.png")}
              style={{ width: scale(30), height: scale(30), marginRight: scale(3) }} />
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: RFPercentage(3), marginLeft: scale(5) }}>20,000</Text>
          </View>
          <View style={{
            backgroundColor: '#fff', height: verticalScale(15), borderColor: '#EEe', borderRadius: 20, marginTop: verticalScale(10),
            borderWidth: 0.2, width: scale(300), marginBottom: verticalScale(20)
          }}></View>
        </View>
      </View>

      <ScrollView style={{}}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      >

        <View style={{ marginTop: scale(10) }}>
          <TouchableOpacity style={{
            borderColor: '#eee',
            elevation: 2,
            borderRadius: scale(10),
            marginLeft: scale(10),
            marginRight: scale(10),
            backgroundColor: '#ffff',
            justifyContent: 'center'
          }}
            activeOpacity={0.7}
            onPress={() => {}}
            >
            <View style={{}}>
              <Text style={{
                color: '#000', fontWeight: 'bold', fontSize: RFPercentage(3), marginTop: verticalScale(5),
                marginBottom: verticalScale(3), marginLeft: verticalScale(5)
              }}>KYC Verification</Text>
              <Text style={{ fontSize: RFPercentage(2.50), marginLeft: scale(5) }}>
                Submit your Passport/voter ID/ID/Aadhaar
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{
                backgroundColor: '#F0EEED', height: verticalScale(8), borderColor: '#EEe',
                borderRadius: 20, marginTop: verticalScale(10),
                borderWidth: 0.2, width: scale(299), marginBottom: verticalScale(20), marginLeft: verticalScale(5)
              }}></View>
              <Text style={{ fontSize: RFPercentage(2), margin: scale(3) }}>0%</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: verticalScale(20) }}>
          <TouchableOpacity style={{
            borderColor: '#eee',
            elevation: 2,
            borderRadius: scale(10),
            marginLeft: scale(10),
            marginRight: scale(10),
            backgroundColor: '#ffff',
            justifyContent: 'center'
          }}
          onPress={() =>{}}

          >
            <View style={{}}>
              <Text style={{
                color: '#000', fontWeight: 'bold', fontSize: RFPercentage(3), marginTop: verticalScale(5),
                marginBottom: verticalScale(3), marginLeft: verticalScale(5)
              }}>Basic Information</Text>
              <Text style={{ fontSize: RFPercentage(2.50), marginLeft: scale(5) }}>
                Getting to knonw you better
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{
                backgroundColor: '#F0EEED', height: verticalScale(8), borderColor: '#EEe',
                borderRadius: 20, marginTop: verticalScale(10),
                borderWidth: 0.2, width: scale(299), marginBottom: verticalScale(20), marginLeft: verticalScale(5)
              }}></View>
              <Text style={{ fontSize: RFPercentage(2), margin: scale(3) }}>0%</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: verticalScale(20) }}>
          <TouchableOpacity style={{
            borderColor: '#eee',
            elevation: 2,
            borderRadius: scale(10),
            marginLeft: scale(10),
            marginRight: scale(10),
            backgroundColor: '#ffff',
            justifyContent: 'center'
          }}
          onPress={() => {}}
          >
            <View style={{}}>
              <Text style={{
                color: '#000', fontWeight: 'bold', fontSize: RFPercentage(3), marginTop: verticalScale(5),
                marginBottom: verticalScale(3), marginLeft: verticalScale(5)
              }}>Employment Infromation</Text>
              <Text style={{ fontSize: RFPercentage(2.50), marginLeft: scale(5) }}>
                Tell us about your job
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{
                backgroundColor: '#F0EEED', height: verticalScale(8), borderColor: '#EEe',
                borderRadius: 20, marginTop: verticalScale(10),
                borderWidth: 0.2, width: scale(299), marginBottom: verticalScale(20), marginLeft: verticalScale(5)
              }}></View>
              <Text style={{ fontSize: RFPercentage(2), margin: scale(3) }}>0%</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: verticalScale(20) }}>
          <TouchableOpacity style={{
            borderColor: '#eee',
            elevation: 2,
            borderRadius: scale(10),
            marginLeft: scale(10),
            marginRight: scale(10),
            marginBottom: verticalScale(10),
            backgroundColor: '#ffff',
            justifyContent: 'center'
          }}
            onPress={() => {}}

          >
            <View style={{}}>
              <Text style={{
                color: '#000', fontWeight: 'bold', fontSize: RFPercentage(3), marginTop: verticalScale(5),
                marginBottom: verticalScale(3), marginLeft: verticalScale(5)
              }}>Self Video</Text>
              <Text style={{ fontSize: RFPercentage(2.50), marginLeft: scale(5) }}>
                Please audition for us
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{
                backgroundColor: '#F0EEED', height: verticalScale(8), borderColor: '#EEe',
                borderRadius: 20, marginTop: verticalScale(10),
                borderWidth: 0.2, width: scale(299), marginBottom: verticalScale(20), marginLeft: verticalScale(5)
              }}></View>
              <Text style={{ fontSize: RFPercentage(2), margin: scale(3) }}>0%</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#fff',
    flex: 1
  }
})