import { Page,PageHeading } from "../component";
import { StyleSheet,Text,Image ,View} from "react-native";
import useTheme from "../hooks/useTheme";
import { image } from "../assets/icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Assignments=()=>{
    const theme = useTheme();
    const styles=useStyles(theme);
    const Tab = createMaterialTopTabNavigator();
    console.log(theme,"theme");
    const weeklyUploads=()=>{
        return(
          <View style={styles.pageDesgin}>
               <PageHeading pageTxt={"Weeekly List"}/>
          </View>
        )
    }
    const monthlyUploads=()=>{
        return(
            <Page style={styles.pageDesgin}>
               <PageHeading pageTxt={"Monthly List"}/>
          </Page>
        )
    }
    const threeMonthUploads=()=>{
        return(
            <Page style={styles.pageDesgin}>
            <PageHeading pageTxt={"3 Month List"}/>
       </Page>
        )
    }
    return(
    <View style={styles.wholeStyle}>
         <Tab.Navigator tabBarOptions={
           styles.tabActive
         } >
      <Tab.Screen  name="Weekly" component={weeklyUploads}/>
      <Tab.Screen name="Monthly" component={monthlyUploads}/>
      <Tab.Screen name="3 Months" component={threeMonthUploads}/>
    </Tab.Navigator>
    </View>
    )
}
const useStyles=(theme)=>StyleSheet.create({
    tabBtn:{
        width:"100%",
        height:"100%",
        borderRadius:4,
        backgroundColor:theme.color.lightGrey
    },
    tabBackgroundBtn:{
       color:theme.color.paper,
       tabBackgroundBtn:theme.color.highlightColor
    },
    tabBtnTxt:{
        fontSize:12,
        fontWegiht:"300",
        color:theme.color.black
    },
    tabActive:{
        activeTintColor:theme.color.highlightColor,
    inactiveTintColor:theme.color.grey,
    indicatorStyle: {backgroundColor:"transparent",borderBottom:`2 solid ${theme.color.highlightColor}`,color:theme.color.highlightColor, height: '100%',borderRadius:0 },
    pressOpacity: 1,
      labelStyle: {
        fontSize:14,
        fontWegiht:"600",
        margin:0,
        whiteSpace:"nowrap",
        textTransform: 'none',
    },
    tabStyle: {
        paddingHorizontal: 5,
        paddingVertical:5,
        minHeight:30, borderRadius:0, justifyContent: 'center', alignContent: 'center' },
},
pageDesgin:{
 flex:1,
 backgroundColor:theme.color.paper,
 paddingHorizontal: 10,
 paddingVertical:10
},
wholeStyle:{
    flex:1,  
}
})
export default Assignments;