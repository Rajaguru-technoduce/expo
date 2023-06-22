import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import useTheme from "../hooks/useTheme";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  CheckBox,
  Button,
} from "react-native";
import { Page } from "../component";

const Login = () => {
  const [text, onChangeText] = useState("");
  const [pws, onChangepws] = useState("");
  const theme = useTheme();
  const styles=useStyles(theme);
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation()
  const onPressLearnMore = () => {
     let userData={
          name:text,
          loginStatus:true,
      }
    localStorage.setItem("loginData",JSON.stringify(userData));
    navigation.navigate("home");
  };
  return (
    <Page>
      <ScrollView>
        <View style={styles.loginScreen}>
          <Text style={styles.PageHeader}>{"Welcome to app"}</Text>
          <Image
            style={styles.imageStyle}
            source={require("../assets/virtual-class.png")}
          />
          <View style={styles.inputBox}>
            <TextInput
              onChangeText={onChangeText}
              value={text}
              style={styles.inputfield}
              placeholder="User Name"
              keyboardType="text"
            />
            <TextInput
              onChangeText={onChangepws}
              value={pws}
              secureTextEntry={true}
              style={styles.inputfield}
              placeholder="Password"
              keyboardType="text"
            />
          </View>
          <View style={styles.checBoxFlex}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Remember me?</Text>
          </View>
          <Button color={theme.color.highlightColor} onPress={onPressLearnMore} title="Login" />
        </View>
      </ScrollView>
    </Page>
  );
};

const useStyles=(theme) => StyleSheet.create({

    loginScreen: {
      width: "100%",
      flex: 1,
      heiht: "100%",
      paddingLeft: 35,
      paddingRight: 35,
    },
    PageHeader: {
      textAlign: "center",
      fontSize: 16,
      color:theme.color.highlightColor,
      textTransform: "uppercase",
      marginBottom: 20,
    },
    imageStyle: {
      width: 150,
      height: 150,
      marginLeft: "auto",
      marginRight: "auto",
    },
    inputBox: {
      marginTop: 15,
    },
    inputfield: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 4,
      border: `1 solid ${theme.color.highlightColor}`,
      color: theme.color.grey,
      width: "100%",
      marginBottom: 10,
    },
    checBoxFlex: {
      display: "flex",
      marginBottom:10,
      flexDirection: "row",
    },
    label: {
      fontSize: 12,
      color: theme.color.grey,
      marginLeft:7,
    },
    btnLogin: {
      backgroundColor: "#824bc7",
      color: "#fff",
      borderRadius: 20,
    },
  });
export default Login;
