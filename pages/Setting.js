import React ,{useState} from "react";
import {Text,StyleSheet,Switch,View } from "react-native";
import { Page } from "../component";
import useTheme from "../hooks/useTheme";
const Setting=()=>{
    const theme = useTheme();
    const styles = useStyles(theme);
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
console.log(isEnabled,"true")
    return(
        <Page>
            <View style={styles.pageHeading}>
            <Text style={styles.pageHeads}>{"App Setting"} </Text>
            </View>
            <View style={styles.listControl}>
             <Text style={styles.swichText}>{"Theme Dark/Light"}</Text>
<Switch
  trackColor={{false:`${theme.color.lightGrey}`, true: `${theme.color.normalColor}`}}
  ios_backgroundColor={`${theme.color.lightGrey}`}
  activeThumbColor={`${theme.color.highlightColor}`}
  onValueChange={toggleSwitch}
  style={styles.controls}
  value={isEnabled}/>
            </View>
            <View style={styles.listControl}>
             <Text style={styles.swichText}>{"Allow all notification from class"}</Text>
<Switch
  trackColor={{false:`${theme.color.lightGrey}`, true: `${theme.color.normalColor}`}}
  ios_backgroundColor={`${theme.color.lightGrey}`}
  activeThumbColor={`${theme.color.highlightColor}`}
  onValueChange={toggleSwitch}
  style={styles.controls}
  value={isEnabled}/>
            </View>
            <View style={styles.listControl}>
             <Text style={styles.swichText}>{"Allow attendance notification"}</Text>
<Switch
  trackColor={{false:`${theme.color.lightGrey}`, true: `${theme.color.normalColor}`}}
  ios_backgroundColor={`${theme.color.lightGrey}`}
  activeThumbColor={`${theme.color.highlightColor}`}
  onValueChange={toggleSwitch}
  style={styles.controls}
  value={isEnabled}/>
            </View>
            <View style={styles.listControl}>
             <Text style={styles.swichText}>{"Allow video notification when upload from play list "}</Text>
<Switch
  trackColor={{false:`${theme.color.lightGrey}`, true: `${theme.color.normalColor}`}}
  ios_backgroundColor={`${theme.color.lightGrey}`}
  activeThumbColor={`${theme.color.highlightColor}`}
  onValueChange={toggleSwitch}
  style={styles.controls}
  value={isEnabled}/>
            </View>
      </Page>
    )
}
const useStyles=(theme)=>StyleSheet.create({
    pageHeading:{
        paddingBottom:10,
    },
    pageHeads:{
        fontSize:17,
        color:theme.color.highlightColor
    },
    listControl:{
        marginBottom:20,
        paddingVertical: 0,
        paddingHorizontal: 10,
        flexDirection:"row",
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
    },
    swichText:{
        color:theme.color.grey,
        fontWeight:"500"
    },
    controls:{
        width:10,
        height:15
    }
});
export default Setting