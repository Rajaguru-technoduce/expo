import React from "react";
import {View,StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login";
import HomePage from "./pages/home";
import TutorView from "./pages/TutorView";
import CourseDetailsPage from "./pages/CourseDetails";
import ClassDetails from "./pages/ClassDetails";
import ProfileSetting from "./pages/ProfileSetting";
import Ebook from "./pages/Ebook";
import EbookDownLoad from "./pages/EbookDownLoad";
import Assignments from "./pages/Assignments";
import 'react-native-gesture-handler';
import ThemeOverallStyle from "./context/ThemeStyles";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ThemeOverallStyle>
    <View style={styles.container}>
      <NavigationContainer>
       <Stack.Navigator   initialRouteName={"home"}>
        <Stack.Screen name="login"  options={{headerShown: false}} component={Login} />
        <Stack.Screen name="home"  options={{headerShown: false}} component={HomePage}/>
        <Stack.Screen name="tutotview"  options={{headerShown: false}} component={TutorView}/>
        <Stack.Screen name="coursedetails"  options={{headerShown: false}} component={CourseDetailsPage}/>
        <Stack.Screen name="classdetails" options={{headerShown:false}} component={ClassDetails}/>
        <Stack.Screen name="profileddits" options={{headerShown:false}} component={ProfileSetting}/>
        <Stack.Screen name="booklist" options={{headerShown:false}} component={Ebook}/>
        <Stack.Screen name="bookdetails" options={{headerShown:false}} component={EbookDownLoad}/>
        <Stack.Screen name="assignments" options={{headerShown:false}} component={Assignments}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </ThemeOverallStyle>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
  },
});
