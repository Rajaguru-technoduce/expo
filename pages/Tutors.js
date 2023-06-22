import {View, Text, StyleSheet,Pressable,Image,FlatList} from "react-native";
import { Page } from "../component";
import useTheme from "../hooks/useTheme";
import { tutorApi } from "../_api_";
import PageHeading from "../component/PageHeading";
import { useNavigation } from '@react-navigation/native';
const Tutors = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation()
  const  tabRender=(item)=>{
    console.log(item,"items");
    switch(item){
      case "booked":
        return (
          <Text style={styles.tagBlack}>{item}

          </Text>
          )
        break;
        case "new":
          return (
            <Text style={styles.tagGreen}>{item}
       
            </Text>
          )
          break;
    }
  }
  const renderItemTutorCom=({item})=>{
    return(
      <View style={styles.tutorBox}>
        <View style={styles.personDetailsBox}>
           <Image source={item.image} style={styles.tutorImg}/>
           <View style={styles.pertxt}>
             <Text style={styles.personName}>
              {item.tutor}
             </Text>
             <Text style={styles.personDetails}>
             {`Qualification : ${item.qualification}`}  
             </Text>
             <Text style={styles.personDetails}>
             {`Tech : ${item.tech}`}
               </Text>
               <Text style={styles.personDetails}>
               {`Currently Working : ${item.working}`}
               </Text>
               <Text style={styles.personDetails}>
               {`Rate : ${item.rate}`}
               </Text>
           </View>
        </View>
        <View style={styles.priceBooksec}>
        <Text style={styles.price}>{item.price}</Text>
<Pressable onPress={()=> navigation.navigate("tutotview")} style={styles.book}>
  <Text style={styles.bookTxt}>{"View Details"}</Text>
</Pressable>
        </View>
        {item.status?tabRender(item.status):""}
      </View>
    )
  }
  return (
    <Page>
    <PageHeading pageTxt={"Tutors List"}/>
    <FlatList 
    data={tutorApi}
    renderItem={renderItemTutorCom}
    />
    </Page>
  );
};
const useStyles = (theme) => StyleSheet.create({
  pageHeading:{
    marginBottom:15,
  },
  pageHeadline:{
    color:theme.color.highlightColor,
    fontSize:17,
  },
  tutorBox:{
    position:"relative",
    overflow:"hidden",
    flex:1,
    borderRadius:"10",
    shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin:5
  },
  personDetailsBox:{
    flexDirection:"row",
  },
  tutorImg:{
    width:60,
    height:60,
    objectFit:"cover",
    borderRadius:"50%",
    shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
    marginRight:5
  },
  pertxt:{
    marginBottom:10,
  },
  personName:{
    color:theme.color.highlightColor,
    fontSize:13,
    fontWeight:"600",
    marginBottom:2
  },
  personDetails:{
    color:theme.color.grey,
    fontSize:10,
    fontWeight:"600",
  },
  priceBooksec:{
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between"
  },
  price:{
    fontSize:13,
    color:theme.color.highlightColor,
  },
  book:{
backgroundColor:theme.color.highlightColor,
color:theme.color.paper,
borderRadius:15,
paddingVertical: 6,
paddingHorizontal: 10,
justifyContent:"center",
alignItems:"center",
width:"fit-content",
flex:1,
  },
  bookTxt:{
    color:theme.color.paper,
    fontSize:12
  },
  tagGreen:{
    backgroundColor:theme.color.warning,
    color:theme.color.paper,
    paddingVertical: 3,
    paddingHorizontal: 7,
    position:"absolute",
    top:7,
    transform: "rotate(44deg)",
    right:-16,
    zIndex:2,
   width:73,
   textAlign:"center"
  },
  tagBlack:{
    backgroundColor:theme.color.black,
    color:theme.color.paper,
    paddingVertical: 3,
    paddingHorizontal: 7,
    position:"absolute",
    top:7,
    transform: "rotate(44deg)",
    right:-16,
    zIndex:2,
   width:73,
   textAlign:"center"

  }
  });
export default Tutors;
