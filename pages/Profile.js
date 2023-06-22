import { SafeAreaView,View,Text,StyleSheet,Image,FlatList, Pressable } from "react-native";
import { Page } from "../component";
import useTheme from "../hooks/useTheme";
import { image } from "../assets/icons";
import { useNavigation } from '@react-navigation/native';
const Profile=()=>{
    const theme = useTheme();
    const styles=useStyles(theme);
    const navigation = useNavigation();
    const profileList=[
        {id:1,title:"Profile Setting",path:"profileddits"},
        {id:2,title:"E-Book Downloads",path:"booklist"},
        {id:3,title:"Upload Assignments",path:"assignments"},
        {id:4,title:"Project",path:"projects"},
        {id:5,title:"Notification",path:"notification"},
        {id:6,title:"Download Books/Course fees receipt",path:"receipts"},
        {id:7,title:"Upcoming Events/Class",path:"upcomingevents"},
        {id:8,title:"Downloads Course Complete Certificate",path:"cccertificate"},
    ]
    const listRender=({item})=>{
     return(
        <Pressable onPress={()=>{
            navigation.navigate(item.path?item.path:"profile");
         }}>
         <View style={styles.listRenders}>
           <Text style={styles.renderListTxt}>
                 {item.title}
             </Text>
             <Text style={styles.renderListTxt}>
               <Image source={image.rightarrow} style={styles.goImg}/>
             </Text>
         </View>
         </Pressable> 
     )
    }
    return(
    <Page>
        <View style={styles.profileBox}>
        <Image source={image.user} style={styles.personImg}/>
            <View style={styles.personDataTxt}>
<Text style={styles.Pname}>{"Ravi pransanth"}</Text>
<Text style={styles.Pdesc}>{"computer science and programming"}</Text>
            </View>
        </View>
        <FlatList 
        data={profileList}
        renderItem={listRender}
        />
<View style={styles.logoutSec}> 
    <Pressable style={styles.logbtn}>
         <Text style={styles.btnText}> Logout</Text>
    </Pressable>
</View>
    </Page>
    )
}
const useStyles=(theme)=>StyleSheet.create({
    profileBox:{
        backgroundColor:theme.color.highlightColor,
        paddingVertical: 15,
        paddingHorizontal: 35,
        flex:1,
        flexDirection:"row",
        shadowColor: theme.boxShadow.md.color,
        shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
        shadowOpacity:theme.boxShadow.md.opacity,
        shadowRadius: theme.boxShadow.md.radius,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:25
    },
    personImg:{
width:40,
height:40,
borderRadius:"50%",
border:`2 solid ${theme.color.paper}`
    },
    personDataTxt:{
        textAlign:"left",
        marginLeft:10,
        flex:1,
        flexDirection:"column"
    },
    Pname:{
        fontSize:15,
        fontWeight:"700",
        color:theme.color.paper,
    },
    Pdesc:{
        fontSize:13,
        color:theme.color.paper,
    },
    listRenders:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
    },
    renderListTxt:{
       fontSize:13,
        color:theme.color.highlightColor
    },
    goImg:{
        width:10,
        height:10
    },
    logoutSec:{
        marginTop:15
    },
    logbtn:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius:20,
        fontSize:14,
        flex:1,
        margin:"auto",
        backgroundColor:theme.color.highlightColor,
       
        width:"80%",
        justifyContent:"center",
       // alignItems:"center"
    },
    btnText :{ color:theme.color.paper,
        fontSize:14,
    }
})
export default Profile;