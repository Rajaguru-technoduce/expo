import { View, Text, StyleSheet,Image, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Page } from "../component";
import useTheme from "../hooks/useTheme";
import { useNavigation } from '@react-navigation/native';
import { classApi } from "../_api_";
const ClassRoom = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation()
  const renderClassList=({item})=>{
    const navigateFun=(item)=>{
      navigation.navigate("classdetails",{classId:item});
    }
      return(
        <Pressable onPress={()=>navigateFun(item.id)}>
<View style={styles.classBox}>
  <Image source={item.image} style={styles.classRoomImg} />
  <View style={styles.classRooDetailBox}>
      <Text style={styles.titleHead}>
          {item.title}
      </Text>
      <Text style={styles.classDecs}>
          {item.desc}
      </Text>
      <Text style={styles.classDateTime}>
          {`${item.Tutor} , ${item.uploadDate} , ${item.uploadTime}`}
      </Text>
      <View style={styles.viewStatu} >
          <View style={{width:`${item.viewStatus}`,backgroundColor:theme.color.highlightColor,position:"absolute",left:0,top:0,bottom:0}}></View>
      </View>
  </View>
</View>
</Pressable>
      )
  }
  return (
    <Page>
      <View style={styles.pageHeadingText}>
       <Text style={styles.pageTextStyle}>
           {"My Classes"}
       </Text>
      </View>
      <FlatList
      data={classApi}
      renderItem={renderClassList}
      />
    </Page>
  );
};
const useStyles = (theme) => StyleSheet.create({
    pageHeadingText:{
        marginBottom:25
    },
    pageTextStyle:{
     fontSize:17,
     color:theme.color.highlightColor
    },
    classBox:{
        alignItems:"center",
        flex:1,
        paddingVertical: 0,
        paddingHorizontal: 0,
        height:"auto",
        marginLeft:5,
        marginRight:5,
        marginTop:2,
        flexWrap:"nowrap",
        flexDirection:"row",
        marginBottom:15,
        borderRadius:10,
        overflow:"hidden",
        shadowColor: theme.boxShadow.md.color,
        shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
        shadowOpacity:theme.boxShadow.md.opacity,
        shadowRadius: theme.boxShadow.md.radius,
    },
    classRoomImg:{
        width:120,
        height:100,
        objectFit:"cover"
    },
    classRooDetailBox:{
        paddingVertical: 15,
        paddingHorizontal: 15,
        height:"100%",
        width:"fit-conent"
    },
    titleHead:{
      fontSize:15,
      fontWeight:"400",
      color:theme.color.highlightColor ,
      marginBottom:5, 
    },
    classDecs:{
        fontSize:12,
        color:theme.color.highlightColor,
        marginBottom:5, 
    },
    classDateTime:{
        fontSize:8,
        fontWeight:"600",
        color:theme.color.highlightColor,
    },
 viewStatu:{
     marginTop:10,
   borderRadius:3,
   backgroundColor:theme.color.lightGrey,
   height:3,
   width:"100%",
   overflow:"hidden",
   position:"relative"
 }
});
export default ClassRoom;
