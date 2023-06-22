import { Page } from "../component";
import { StyleSheet, View,ImageBackground, Pressable ,Image,Text,FlatList} from "react-native";
import useTheme from "../hooks/useTheme";
import { image } from "../assets/icons";
import { classDetailsapi } from "../_api_";
const ClassDetails=()=>{
    const theme = useTheme();
    const styles=useStyle(theme);
    const commandFunction=()=>{

    }
    const muteunmuteFunction=()=>{
        
    }

    const userShareFunction=()=>{
        
    }
    const userDownloadFunction=()=>{
        
    }
    const videoOverwritearr=[
        {id:1,title:"command",userFun:commandFunction,image:image.message},
        {id:2,title:"voice",userFun:muteunmuteFunction,image:image.voice},
        {id:3,title:"share",userFun:userShareFunction,image:image.share},
        {id:4,title:"download",userFun:userDownloadFunction,image:image.download},
        {id:5,title:"download",userFun:userDownloadFunction,image:image.more},
    ];
    const referCom=({item})=>{
        return(
            <Text style={styles.videhigtlightTxt}>{`${item.title}-${item.url}`}</Text>
        )
    }
    const messageCom=({item})=>{
        return(
            <View style={styles.commandLine}>
             <View style={styles.commandLineList}>
                {item.image ?<Image source={item.image} style={styles.avatar}/>:
                 <View style={{backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`,justifyContent:"center",/*alignItems:"center"*/borderRadius:"50%",width:"25",height:"25"}}>
                     <Text style={styles.laterRoud}>{item.name?.slice(0,1)?.toUpperCase()}</Text>
                 </View>
    }              <Text style={styles.commandWord}>{item.command}</Text>
      <Text style={styles.commandWord}>{item.time}</Text>
             </View> 
            </View>
        )
    }
    const commandCom=({item})=>{
        return(
            <View style={styles.commandLine}>
             <View style={styles.commandLineList}>
                {item.image ?<Image source={item.image} style={styles.avatar}/>:
                 <View style={{backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`,justifyContent:"center",/*alignItems:"center"*/borderRadius:"50%",width:"25",height:"25"}}>
                     <Text style={styles.laterRoud}>{item.name?.slice(0,1)?.toUpperCase()}</Text>
                 </View>
    }              <Text style={styles.commandWord}>{item.command}</Text>
    <Text style={styles.commandWord}>{item.time}</Text>
             </View> 
            </View>
        )
    }
    const videoActions=({item})=>{
       return(
           <View style={styles.videoActionBoxes}>
             <Pressable onPress={item.userFun} style={styles.actionBtn}>
             <Image source={item.image} style={styles.actionImg}/>
             </Pressable>
           </View>
       )
    }
    return(
<Page>
 <View style={styles.videoBox}>
    <ImageBackground source={classDetailsapi.image} style={styles.videothump}>
    <Pressable style={styles.play}>
        <Image source={image.play} style={styles.playBtn}/>
    </Pressable>
    </ImageBackground>
 </View>
 <View style={styles.videoContent}>
 <Text style={styles.videoTxt}>{`Uploaded By`}</Text>
     <View style={styles.uploadVideoBox}>
      <Image source={classDetailsapi.uploadby.image} style={styles.uploadProfileImg} />
      <View style={styles.viewHeadingBox}>
      <Text style={styles.uploadClassTitle}>{classDetailsapi.title}</Text>
          <Text style={styles.uploaderName}>{classDetailsapi.uploadby.tutor}</Text>
          <Text style={styles.uploadtime}>{classDetailsapi.uploaded}</Text>
      </View>
     </View>
     <Text style={styles.videhigtlightTxt}>
         <Image source={image.eye} style={styles.iconImg}/>
         {`Views ${classDetailsapi.views}`}</Text>
         <Text style={styles.videhigtlightTxt}>
         <Image source={image.time} style={styles.iconImg}/>
         {`Durations ${classDetailsapi.duration}`}</Text>
     <Text style={styles.videhigtlightTxt}><Image source={image.language} style={styles.iconImg}/>{`Languages ${classDetailsapi.language}`}</Text>
     <Text style={styles.normaltxt}>{classDetailsapi.desc}</Text>
     <FlatList data={classDetailsapi.ref} renderItem={referCom}/>
     <FlatList columnWrapperStyle={styles.actionStylesBox}  data={videoOverwritearr} renderItem={videoActions} numColumns={5}/>
     <Text style={styles.videoTxt}>{`Messages`}</Text>
     <FlatList data={classDetailsapi.messages} renderItem={messageCom}/>
     <Text style={styles.videoTxt}>{`Commands`}</Text>
     <FlatList data={classDetailsapi.command} renderItem={commandCom}/>
 </View>
</Page>
    )
}
const useStyle=(theme)=>StyleSheet.create({
    videoBox:{
        borderRadius:20,
        shadowColor: theme.boxShadow.md.color,
        shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
        shadowOpacity:theme.boxShadow.md.opacity,
        shadowRadius: theme.boxShadow.md.radius,
        overflow:"hidden",
        width:"100%",
        height:200,
        marginBottom:10,
    },
    videothump:{
        width:"100%",
        height:"100%"
    },
    play:{
        backgroundColor:theme.color.blackCover,
        width:"100%",
        height:"100%",
        position:"relative",
       // alignItems:"center",
        justifyContent:"center"
    },
    playBtn:{
        width:30,
        shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
        height:30
    },
    videoContent:{
        paddingHorizontal: 15,
        paddingVertical:15
    },
    videoTxt:{
        color:theme.color.highlightColor,
        fontSize:15,
        fontWeight:"600",
        textAlign:"left",
        marginBottom:10
    },
    uploadVideoBox:{
        flexDirection:"row",
        marginBottom:10,
        flex:1,
        alignItems:"center",
        marginTop:2,
    },
    uploadProfileImg:{
        shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
        borderRadius:"50%",
        height:40,
        width:40
    },
    viewHeadingBox:{
        marginRight:5,
    },
    uploadClassTitle:{
        color:theme.color.highlightColor,
        fontSize:12,
        fontWeight:"600",
    },
    uploaderName:{
        color:theme.color.grey,
        fontSize:11,
        fontWeight:"600",
    },
    uploadtime:{
        color:theme.color.grey,
        fontSize:11,
    },
    normaltxt:{
        fontSize:11,
        color:theme.color.grey,
        marginBottom:5
    },
    videhigtlightTxt:{
        marginBottom:3,
        color:theme.color.highlightColor,
        fontSize:12
    },
    iconImg:{
        width:13,
        height:13,
        marginRight:5
    },
    videoActionBoxes:{
      alignItems:"center",
        justifyContent:"space-between",
        paddingTop:5,
        marginRight:5,
        paddingBottom:5,
    },
    actionBtn:{
        shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
        borderRadius:"50%",
        width:30,
        height:30,
        overflow:"hidden"
    },
    actionImg:{
        height:"100%",
        resizeMode:"contain",
        width:"100%",
    },
    actionStylesBox:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:10,
        marginBottom:10
    },
    commandLine:{
        marginBottom:5,
    },
    commandLineList:{
        marginTop:0,
        alignItems:"center",
        borderTop:`1 solid ${theme.color.grey}`,
      flex:1,
      flexDirection:"row" 
    },
    avatar:{
        width:25,
        height:25,
        borderRadius:"50%",
        shadowColor: theme.boxShadow.md.color,
        shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
        shadowOpacity:theme.boxShadow.md.opacity,
        shadowRadius: theme.boxShadow.md.radius,
    },
    laterBack:{
        backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`,
        borderRadius:"50%",
        width:40,
        height:40,
        justifyContent:"center",
       // alignItems:"center"
    },
    laterRoud:{
        color:theme.color.paper,
      fontSize:12,
     
    },
    commandWord:{
        color:theme.color.grey,
        fontSize:10,
        marginLeft:5,
    }
})
export default ClassDetails;