import {React} from "react";
import { Image,FlatList,StyleSheet,Text,Dimensions,View,Pressable} from "react-native";
import { Page } from "../component";
import { sliderData } from "../_api_";
import { scoreApi } from "../_api_";
import useTheme from "../hooks/useTheme";
import { events } from "../_api_";
import { image } from "../assets/icons";
import ClassRoom from "./ClassRoom";
import Tutors from "./Tutors";
import Profile from "./Profile";
import Setting from "./Setting";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
const HomePageContent=()=>{
    const navigation = useNavigation();
    const theme = useTheme();
    const styles=useStyles(theme);
    const screenWidth = Math.round(Dimensions.get('window').width);
    const onPressFunction=(item)=>{
     console.log(sliderData,"items");
     navigation.navigate("coursedetails",{courseId:item});
    }
   
    const sliderCom=({item})=>{
        return(   
            <View style={styles.courseBox}>
              <Image style={styles.sliderImg} source={item.images}/>
              <View style={styles.headingStyles}>
              <Text style={styles.courseHead}>{item.title}</Text>
              <Text style={styles.courseDesc}>{item.desc}</Text>
              <Pressable style={styles.btnView} onPress={()=>onPressFunction(item.id)}>
  <Text style={styles.btn}>Entroll</Text>
</Pressable>
              </View>
            </View>
           )
       }
       const renderSwitch=(imageName)=>{
           switch(imageName?.toLowerCase()){
               case 'attendance':
                   return <Image style={styles.imgIcon} source={image.attendance}/>
                   break;
                   case 'assignment':
                   return <Image style={styles.imgIcon} source={image.assignment}/>
                   break;
                   case 'practice':
                   return <Image style={styles.imgIcon} source={image.prectice}/>
                   break;
                   case 'project':
                    return <Image style={styles.imgIcon} source={image.project}/>
                    break;
           }
       }
       const scoreBar=({item})=>{
          return(
            <View style={styles.scoreBox}>
              
               {renderSwitch(item.title)}
               <Text style={styles.scoreBoardTxt}>{item.score}</Text>
            </View>
          )
       }
       const classEventCom=({item})=>{
           return(
               <View style={styles.eventBox}>
                   <Text style={styles.classTime}>{item.time}</Text>
<Image style={styles.videoImg} source={item.image}/>
<View style={styles.textBoxClass}>
<Text style={styles.textClassTitle}>{item.class}</Text>
<Text style={styles.textClassDesc}>{item.desc}</Text>
</View>
               </View>
           )
       }

    return(
        <Page>
            <Text style={styles.greatingHeading}>{"Welcome Back"}</Text>
            <Text style={styles.topicHeading}>{"Score Board"}</Text>
            <FlatList
        data={scoreApi}
        renderItem={scoreBar}
        numColumns={4}
        keyExtractor={item => item.id}
      />
       <Text style={styles.topicHeading}>{"Today's shedule"}</Text>
       <FlatList
        data={events}
        renderItem={classEventCom}
        numColumns={2}
        keyExtractor={item => item.id}
      />
            <Text style={styles.topicHeading}>{"Recommended Course"}</Text>
            <FlatList
        data={sliderData}
        renderItem={sliderCom}
        numColumns={2}
        keyExtractor={item => item.id}
      />
        </Page>
      )
}
const HomePage=()=>{
    const Tab = createBottomTabNavigator();
    const theme = useTheme();
    const styles=useStyles(theme);
    return(
<Tab.Navigator  
sceneContainerStyle={{backgroud:"#ccc"}}
   screenOptions={{ tabBarStyle:{
    height:50,
    borderTop:"none",
    paddingVertical:0,
    paddingHorizontal: 10,
    shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
    borderRadius:"10"
  }, tabBarItemStyle:{
 },headerShown: false,tabBarActiveTintColor:theme.color.highlightColor,
          tabBarInactiveTintColor:theme.color.grey }} tabBarOptions={{ showLabel: false }}  >
  <Tab.Screen name="home" component={HomePageContent}   options={{
        tabBarIcon: () => (
            <View style={styles.footerBox}>
            <Image source={image.home} style={styles.footerIcon} />
            <Text style={styles.footerTxt}>{"Home"}</Text>
            </View>
        ),
    }}/>
        <Tab.Screen name="classroom" component={ClassRoom} options={{
        tabBarIcon: () => (
            <View style={styles.footerBox}>
            <Image source={image.classroom} style={styles.footerIcon} />
            <Text style={styles.footerTxt}>{"Classes"}</Text>
            </View>
        ),
    }} />
      <Tab.Screen name="tutor" component={Tutors} options={{
        tabBarIcon: () => (
            <View style={styles.footerBox}>
            <Image source={image.tutor} style={styles.footerIcon} />
            <Text style={styles.footerTxt}>{"Tutors"}</Text>
            </View>
        ),
    }} />
    <Tab.Screen name="profile" component={Profile} options={{
        tabBarIcon: () => (
            <View style={styles.footerBox}>
            <Image source={image.user} style={styles.footerIcon} />
            <Text style={styles.footerTxt}>{"Profile"}</Text>
            </View>
        ),
    }} />
     <Tab.Screen name="Settings" component={Setting} options={{
        tabBarIcon: () => (
            <View style={styles.footerBox}>
            <Image source={image.settings} style={styles.footerIcon} />
            <Text style={styles.footerTxt}>{"Setting"}</Text>
            </View>
        ),
    }} />
  </Tab.Navigator>
    )
}

const useStyles=(theme)=>StyleSheet.create({
    greatingHeading:{
     fontSize:theme.fontSize.medium,
     color:theme.color.highlightColor,
     textTransform: "uppercase",
     marginBottom:15
    },
    sliderImg:{
        width:"100%",
        objectFit:"cover",
        height:80,
    },
    footer:{
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    courseBox:{
        paddingVertical:0,
        paddingHorizontal:0,
        flex:1,
        alignItems:"cenrter",
        backgroundColor:theme.color.paper,
        shadowColor: theme.boxShadow.md.color,
        shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
        shadowOpacity:theme.boxShadow.md.opacity,
        shadowRadius: theme.boxShadow.md.radius,
        margin:10,
        borderRadius:10
    },
    topicHeading:{
        fontSize:theme.fontSize.regular,
        color:theme.color.highlightColor
    },
    headingStyles:{
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    courseHead:{
        fontSize:13,
        color:theme.color.highlightColor,
        fontWeight:"500",
        marginBottom:3
    },
    courseDesc:{
        fontSize:12,
        height:30,
        overflowY:"hidden",
        color:theme.color.grey,
    },
    btnView:{
        backgroundColor:theme.color.highlightColor,
        borderRadius:2,
        paddingVertical: 4,
        paddingHorizontal: 4,
        textAlign:"center",
        marginTop:10,
    },
    btn:{
        color:theme.color.paper,
        fontSize:13
    },
    scoreBox:{
        width:"100%",
        flex:1,
        height:"auto",
        borderRadius:"3",
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent:"center",
        alignItems:"center",
        margin:5,
        shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
    },
    imgIcon:{
        width:30,
        height:30,
        margin:"auto",
        marginBottom:10,
        objectFit:"contain",
        
    },
     scoreBoardTxt:{
         fontSize:12,
         fontWeight:"bold",
         color:theme.color.highlightColor
     },
     eventBox:{
         flex:1,
         margin:5,
         borderRadius:10,
         overflow:"hidden",
         shadowColor: theme.boxShadow.md.color,
         shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
         shadowOpacity:theme.boxShadow.md.opacity,
         shadowRadius: theme.boxShadow.md.radius,
         position:"relative",
     },
     videoImg:{
         width:"100%",
         height:70,
         objectFit:"cover",
      
     },
     classTime:{
        backgroundColor:theme.color.paper,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius:10,
        color:theme.color.highlightColor,
        fontSize:12,
        fontWeight:"bold",
        position:"absolute",
        top:3,
        left:3,
        zIndex:2
     },
     textBoxClass:{
        paddingVertical: 10,
        paddingHorizontal: 10,
     },
     textClassTitle:{
         fontSize:13,
         marginBottom:10,
         color:theme.color.highlightColor,
     },
     textClassDesc:{
        fontSize:12,
        color:theme.color.grey,
    },
    footerIcon:{
margin:"auto",
marginBottom:7,
         width:18,
      height:18
    },
    footerBox:{
        flex:1,
        justifyContent:"center",
        margin:"auto",
        flexDirection:"column",
    },
    footerBox:{
        textAlign:"center",
        fontSize:12,
        color:theme.color.highlightColor
    }
  });
  export default HomePage;