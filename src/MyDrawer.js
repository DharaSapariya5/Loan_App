import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, View, Text, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomeDrawer from './CustomeDrawer';
import MainHome from "./Screens/MainHome"
import AccountsScreen from './Screens/AccountsScreen';
import McoinScreen from './Screens/McoinsScreen';
import ActivityScreen from './Screens/ActivityScreen';
import ProfileScreen from './Screens/ProfileScreen';
import FriendsScreen from './Screens/FriendsScreen';
import ReferEnrnScreen from './Screens/ReferEnrnScreen';
import ShopScreen from './Screens/ShopScreen';
import HelpScreen from './Screens/HelpScreen';
import AboutusScreen from './Screens/AboutusScreen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;


function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="MainHome"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabelStyle: { fontSize: RFPercentage(1.60) },
                tabBarInactiveTintColor: "#444444",
                tabBarActiveTintColor: "#444444",
                tabBarStyle: {
                    height: verticalScale(70),
                    paddingBottom: scale(10),
                },
            })}>
            <Tab.Screen
                name={"AccountsScreen"}
                component={AccountsScreen}
                options={{
                    title: "ACCOUNTS",
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require("./img/bankTab.png")}
                            style={{ width: scale(30), height: scale(30), borderRadius: 0 }} />
                    ),
                }}
            />
            <Tab.Screen
                name={"McoinScreen"}
                component={McoinScreen}
                options={{
                    title: "MCOINS",
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require("./img/dollar.png")}
                            style={{ width: scale(30), height: scale(30), borderRadius: 24 }} />
                    ),
                }}
            />
            <Tab.Screen
                name={"MainHome"}
                component={MainHome}
                options={{
                    title: "GET CASH",
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require("./img/coinimg.png")}
                            style={{ width: scale(30), height: scale(30), borderRadius:0 }} />
                    ),
                 
                }}
            />

            <Tab.Screen
                name={"ActivityScreen"}
                component={ActivityScreen}
                options={{
                    title: "ACTIVITY",
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require("./img/activity.png")}
                            style={{ width: scale(30), height: scale(28), borderRadius: 0 }} />
                    ),
                
                }}
            />
            <Tab.Screen
                name={"ProfileScreen"}
                component={ProfileScreen}
                options={{
                    
                    title: "PROFILE",
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require("./img/profileimg.png")}
                            style={{ width: scale(26), height: scale(26), borderRadius:0 }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


const MyDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomeDrawer {...props} />}
            initialRouteName="MainHome"
            screenOptions={{
                headerShown: false,
                headerTransparent: false,
                drawerActiveBackgroundColor: '#fff',
                drawerActiveTintColor: '#fff',
                drawerInactiveBackgroundColor: '#fff',
                drawerStyle: {
                    width: scale(250),
                },
                drawerLabelStyle: { fontSize: RFPercentage(3), color: '#000' }
            }}>
            <Drawer.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{
                    title: "Get Cash",
                    drawerIcon: ({ color }) => (
                        <Image style={{ width: scale(25), height: scale(25), }}
                            source={require('./img/rupee.png')} />
                    )
                }}
                screenOptions={{
                    headerShown: true,
                }}
            />
            <Drawer.Screen
                name="AccountsScreen"
                component={AccountsScreen}
                options={{
                    title: "Activity",
                    drawerIcon: ({ color }) => (
                        <Image style={{ width: scale(25), height: scale(25), }} 
                        source={require("./img/page.png")} />
                    )
                }}
                screenOptions={{
                    headerShown: true,
                }}
            />
            <Drawer.Screen
                name="FriendsScreen"
                component={FriendsScreen}
                options={{
                    title: "Friends",
                    drawerIcon: ({ color }) => (
                        <Image style={{ width: scale(25), height: scale(25), }} 
                        source={require("./img/friends.png")} />
                    )
                }}
                screenOptions={{
                    headerShown: true,
                }}
            />
            <Drawer.Screen
                name="ReferEnrnScreen"
                component={ReferEnrnScreen}
                options={{
                    title: "Refer & Earn",
                    drawerIcon: ({ color }) => (
                        <Image style={{ width: scale(25), height: scale(25), }} 
                        source={require("./img/invite.png")} />
                    )
                }}
                screenOptions={{
                    headerShown: true,
                }}
            />
            <Drawer.Screen
                name="ShopScreen"
                component={ShopScreen}
                options={{
                    title: "Shop",
                    drawerIcon: ({ color }) => (
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: scale(25), height: scale(25), }} 
                            source={require("./img/cart.png")} />
                            <View style={{
                                marginLeft:deviceWidth/2.10, position: 'absolute',
                                backgroundColor: "#2192FF", height: verticalScale(25),
                                width: scale(50), borderRadius: 5,
                                marginTop:verticalScale(5),
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ color: "#fff",fontSize: RFPercentage(2) }}>New</Text>
                            </View>
                        </View>

                    )
                }}
                screenOptions={{
                    headerShown: true,
                }}
            />
            <Drawer.Screen
                name="HelpScreen"
                component={HelpScreen}
                options={{
                    title: "Help",
                    drawerIcon: ({ color }) => (
                        <Image style={{ width: scale(25), height:  scale(25),}} 
                        source={require("./img/help.png")} />
                    )
                }}
                screenOptions={{
                    headerShown: true,
                }}
            />
            <Drawer.Screen
                name="AboutusScreen"
                component={AboutusScreen}
                options={{
                    title: "About us",
                    drawerIcon: ({ color }) => (
                        <Image style={{ width: scale(25), height:  scale(25)}} 
                        source={require('./img/information.png')}/>
                    )
                }}
                screenOptions={{
                    headerShown: true,
                }}
            />
        </Drawer.Navigator>
    );
}


export default MyDrawer;

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: "#000",
        borderTopWidth: 0,
        bottom: 15,
        right: 10,
        left: 10,
        height: 92,
    },
});
