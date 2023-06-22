import { Page } from "../component";
import { View,StyleSheet,Image,Text, Pressable } from "react-native";
import useTheme from "../hooks/useTheme";
import { tutotDetailsApi } from "../_api_";
import { image } from "../assets/icons";
const TutorView = () => {
    const theme=useTheme();
    const styles=useStyles(theme);
  return (
    <Page>
      <View style={styles.profileBax}> 
        <Image source={tutotDetailsApi.image}  style={styles.profileCircle}/>
      </View>
       <View style={styles.profileScoreBox}> 
         <View style={styles.scoreBox}>
         <Text style={styles.scoreTxt}>{"Score"}</Text>
        <View style={styles.scoreListImg}> <Image source={image.award} style={styles.scoreIcon}/></View>
        <Text style={styles.scoreRateTxt}>{tutotDetailsApi.score}</Text>
         </View>
         <View style={styles.scoreBox}>
         <Text style={styles.scoreTxt}>{"Students"}</Text>
        <View style={styles.scoreListImg}> <Image source={image.group} style={styles.scoreIcon}/></View>
        <Text style={styles.scoreRateTxt}>{tutotDetailsApi.noStudennt}</Text>
         </View>
         <View style={styles.scoreBox}>
         <Text style={styles.scoreTxt}>{"Classes"}</Text>
        <View style={styles.scoreListImg}> <Image source={image.classes} style={styles.scoreIcon}/></View>
        <Text style={styles.scoreRateTxt}>{tutotDetailsApi.noClass}</Text>
         </View>
       </View>
       <View style={styles.bioDataBox}>
           <Text style={styles.personName}>{tutotDetailsApi.tutor}</Text>
           <Text style={styles.personDetails}>{`Qualification : ${tutotDetailsApi.qualification}`}</Text>
           <Text style={styles.personDetails}>{`Technology : ${tutotDetailsApi.tech}`}</Text>
           <Text style={styles.personDetails}>{`My Role is: ${tutotDetailsApi.role}`}</Text>
           <Text style={styles.personDetails}>{`Working In : ${tutotDetailsApi.working}`}</Text>
           <Text style={styles.priceDetails}>{`Price : ${tutotDetailsApi.price}`}</Text>
           <Text style={styles.personName}>{"Description"}</Text>
           <Text style={styles.personDesc}>{tutotDetailsApi.desc}</Text>
           <Pressable style={styles.bookmebtn}>
               <Text style={styles.booktxt}>{"Book My Class"}</Text></Pressable>
       </View>
    </Page>
  );
};
const useStyles=(theme)=>StyleSheet.create({
profileBax:{
paddingVertical: 20,
paddingHorizontal: 20,
borderRadius:10,
shadowColor: theme.boxShadow.md.color,
shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
shadowOpacity:theme.boxShadow.md.opacity,
shadowRadius: theme.boxShadow.md.radius,
backgroundColor:theme.color.highlightColor,
height:130,
flex:1,
alignItems:"center",
justifyContent:"center",
width:"100%"
},
profileCircle:{
    border:`3 solid ${theme.color.normalColor}`,
    shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
    borderRadius:"50%",
    width:100,
    height:100
},
profileScoreBox:{
    maringTop:10,
    flex:1,
    alignItems:"center",
    paddingHorizontal: 20,
    flexDirection:"row",
    flex:3,
    justifyContent:"space-between",

},
scoreBox:{
    marginTop:20,
    flex:1,
alignItems:"center",
flexDirection:"column",
justifyContent:"center"

},
scoreListImg:{
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
    borderRadius:"50%",
    width:40,
    height:40,
    margin:2,
},
scoreIcon:{
 width:"100%",
 height:"100%",
    objectFit:"contain",
},
scoreTxt:{
    fontSize:12,
    color:theme.color.highlightColor
},
scoreRateTxt:{
    fontSize:12,
    color:theme.color.highlightColor,
    fontWeight:"600"
},
bioDataBox:{
    marginTop:20,
    paddingHorizontal: 20,
},
personName:{
    fontSize:15,
    marginBottom:4,
    color:theme.color.highlightColor,
    fontWeight:"600"
},
personDetails:{
    color:theme.color.grey,
    fontSize:11,
    fontWeight:"600",
    marginBottom:4,
},
priceDetails:{
    color:theme.color.highlightColor,
    fontSize:11,
    fontWeight:"600",
    marginBottom:4,
},
personDesc:{
    color:theme.color.grey,
    fontSize:11,
    marginBottom:4,
},
bookmebtn:{
backgroundColor:theme.color.highlightColor,
paddingVertical: 8,
paddingHorizontal: 8,
marginTop:5,
flex:1,
aligItems:"center",
borderRadius:15,
justifyContent:"center",
},
booktxt:{
fontSize:13,
color:theme.color.paper,
textAlign:"center"
}
})
export default TutorView;
