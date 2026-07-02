import React from "react";
import {StatusBar, Text, Platform} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";
import PlayerScreen from "./src/screens/PlayerScreen";
import ScheduleScreen from "./src/screens/ScheduleScreen";
import DJsScreen from "./src/screens/DJsScreen";
import ArchiveScreen from "./src/screens/ArchiveScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ChatScreen from "./src/screens/ChatScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#07070f" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#07070f",
              borderTopColor: "#2d004d",
              borderTopWidth: 1,
              height: Platform.OS === "android" ? 65 : 80,
              paddingBottom: Platform.OS === "android" ? 8 : 20,
              paddingTop: 6,
              elevation: 0,
              position: "relative",
            },
            tabBarActiveTintColor: "#a855f7",
            tabBarInactiveTintColor: "#555",
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: "700",
              marginTop: 1,
            },
          }}>
          <Tab.Screen name="Ефір" component={PlayerScreen}
            options={{tabBarIcon: () => <Text style={{fontSize:22}}>📻</Text>}} />
          <Tab.Screen name="Розклад" component={ScheduleScreen}
            options={{tabBarIcon: () => <Text style={{fontSize:22}}>📅</Text>}} />
          <Tab.Screen name="Діджеї" component={DJsScreen}
            options={{tabBarIcon: () => <Text style={{fontSize:22}}>🎧</Text>}} />
          <Tab.Screen name="Архів" component={ArchiveScreen}
            options={{tabBarIcon: () => <Text style={{fontSize:22}}>📂</Text>}} />
          <Tab.Screen name="Чат" component={ChatScreen}
            options={{tabBarIcon: () => <Text style={{fontSize:22}}>💬</Text>}} />
          <Tab.Screen name="Про нас" component={AboutScreen}
            options={{tabBarIcon: () => <Text style={{fontSize:22}}>ℹ️</Text>}} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
