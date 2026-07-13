import React from "react";
import {StatusBar, Text, View, Platform} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";
import PlayerScreen from "./src/screens/PlayerScreen";
import ScheduleScreen from "./src/screens/ScheduleScreen";
import DJsScreen from "./src/screens/DJsScreen";
import ArchiveScreen from "./src/screens/ArchiveScreen";
import ChatScreen from "./src/screens/ChatScreen";
import TVScreen from "./src/screens/TVScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Tab = createBottomTabNavigator();

const TABS = [
  {name:"Ефір",    icon:"📻", component: PlayerScreen},
  {name:"Розклад", icon:"📅", component: ScheduleScreen},
  {name:"Діджеї", icon:"🎧", component: DJsScreen},
  {name:"TV",      icon:"📺", component: TVScreen},
  {name:"Архів",   icon:"📂", component: ArchiveScreen},
  {name:"Чат",     icon:"💬", component: ChatScreen},
  {name:"Про нас", icon:"ℹ️", component: AboutScreen},
];

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#07070f" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => {
            const tab = TABS.find(t => t.name === route.name);
            return {
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Text style={{
                  fontSize: 26,
                  marginBottom: 2,
                  opacity: focused ? 1 : 0.5,
                }}>
                  {tab?.icon}
                </Text>
              ),
              tabBarLabel: ({focused, color}) => (
                <Text style={{
                  fontSize: 11,
                  fontWeight: focused ? "800" : "500",
                  color: color,
                  marginTop: 0,
                }}>
                  {route.name}
                </Text>
              ),
              tabBarStyle: {
                backgroundColor: "#0a0a12",
                borderTopColor: "#2d004d",
                borderTopWidth: 1,
                height: Platform.OS === "android" ? 90 : 100,
                paddingBottom: Platform.OS === "android" ? 12 : 28,
                paddingTop: 10,
                elevation: 20,
              },
              tabBarActiveTintColor: "#a855f7",
              tabBarInactiveTintColor: "#555",
              tabBarHideOnKeyboard: true,
            };
          }}>
          {TABS.map(tab => (
            <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
