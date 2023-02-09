import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { scale, verticalScale } from "react-native-size-matters"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


const PermissionPage = ({ navigation }) => {

  const [checked, setChecked] = React.useState(false);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headertext}>We need the following{'\n'}Permissions:</Text>
      </View>
      <View style={{ height: verticalScale(400) }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          {/* {DATA.map((item, index) => ( */}
          <View style={{ width: scale(300) }}>
            <View style={{ flexDirection: 'row', marginLeft: verticalScale(5) }}>
              <Image source={require("../img/database.png")} style={{ width: scale(25), height: verticalScale(30) }} />
              <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', color: '#000', marginLeft: verticalScale(4) }}>
                Storeage</Text>
            </View>
            <View style={{ marginLeft: verticalScale(40) }}>
              <Text style={{ fontSize: RFPercentage(2.70) }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
          </View>

          <View style={{ width: scale(300) }}>
            <View style={{ flexDirection: 'row', marginLeft: verticalScale(5) }}>
              <Image source={require("../img/camer.png")} style={{ width: scale(25), height: verticalScale(30) }} />
              <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', color: '#000', marginLeft: verticalScale(4) }}>
                Camera</Text>
            </View>
            <View style={{ marginLeft: verticalScale(40) }}>
              <Text style={{ fontSize: RFPercentage(2.70) }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
          </View>

          <View style={{ width: scale(300) }}>
            <View style={{ flexDirection: 'row', marginLeft: verticalScale(5) }}>
              <Image source={require("../img/personalinfo.png")} style={{ width: scale(25), height: verticalScale(30) }} />
              <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', color: '#000', marginLeft: verticalScale(4) }}>
                Personal Info</Text>
            </View>
            <View style={{ marginLeft: verticalScale(40) }}>
              <Text style={{ fontSize: RFPercentage(2.70) }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
          </View>

          <View style={{ width: scale(300) }}>
            <View style={{ flexDirection: 'row', marginLeft: verticalScale(5) }}>
              <Image source={require("../img/microphone.png")} style={{ width: scale(25), height: verticalScale(30) }} />
              <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', color: '#000', marginLeft: verticalScale(4) }}>
                Microphone</Text>
            </View>
            <View style={{ marginLeft: verticalScale(40) }}>
              <Text style={{ fontSize: RFPercentage(2.70) }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
          </View>

          <View style={{ width: scale(300) }}>
            <View style={{ flexDirection: 'row', marginLeft: verticalScale(5) }}>
              <Image source={require("../img/profilelogo.png")} style={{ width: scale(25), height: verticalScale(30) }} />
              <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', color: '#000', marginLeft: verticalScale(4) }}>
                Social Account Information</Text>
            </View>
            <View style={{ marginLeft: verticalScale(40) }}>
              <Text style={{ fontSize: RFPercentage(2.70) }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>
          </View>
          {/* ))} */}

        </ScrollView>
      </View>

      <View style={{ alignItems: 'center', marginTop: verticalScale(5) }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <CheckBox
              checked={checked}
              onPress={toggleCheckbox}
              iconType="material-community"
              uncheckedIcon={<Image style={{ width: scale(25), height: verticalScale(27), marginTop: -verticalScale(0) }} source={require("../img/unchecked.png")} />}
              checkedIcon={<Image style={{ width: scale(24), height: verticalScale(26), marginTop: -verticalScale(0) }} source={require("../img/checked.png")} />}
            />
          </View>
          <View style={{ width: scale(300) }}>
            <Text style={{ fontSize: RFPercentage(2.30), marginLeft: -verticalScale(5) }}>I Accept Permissions,Terms & Conditions</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', margin: verticalScale(18) }}>
          <TouchableOpacity style={{
            width: scale(300),
            height: verticalScale(50),
            borderRadius: 5,
            backgroundColor: !checked ? '#DFF6FF' : "#2192FF",
            alignItems: 'center',
            justifyContent: 'center',
          }} disabled={!checked}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{
              fontSize: RFPercentage(3),
              color: '#fff',
              fontWeight: '600',
              fontFamily: 'Roboto'
            }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default PermissionPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: deviceWidth,
    height: deviceHeight,
  },
  headertext: {
    marginLeft: verticalScale(10),
    marginTop: scale(25),
    fontSize: RFPercentage(4),
    marginBottom: 20,
    fontFamily: 'Roboto',
    color: '#000'
  }
})