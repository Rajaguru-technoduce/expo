import { Page,Slider} from "../component";
import useTheme from "../hooks/useTheme";
import { StyleSheet,View,Text,Image, Pressable} from "react-native";
import { bookApi } from "../_api_";
import { useNavigation } from '@react-navigation/native';
const Ebook=()=>{
    const theme = useTheme();
    const styles = useStyles(theme);
    const navigation = useNavigation();
    const bookLink=(item)=>{
        navigation.navigate("bookdetails",{bookId:item});
    }
const renderItemCom=({item})=>{
    return(
        <Pressable onPress={()=>bookLink(item.id)}>
        <View style={styles.Item}>
         <Image source={item.image} style={styles.imgCard}/>
         <Text style={styles.bookText}>{`Written by - ${item.author}`}</Text>
         <Text style={styles.bookText}>{`Cost - ${item.cost}`}</Text>
         <Text style={styles.bookText}>{`Rate - ${item.rate}`}</Text>
        </View>
        </Pressable>
    )
}
    return(
<Page>
  <View style={styles.sliderSection}>
    <Text style={styles.sliderHeading}>{"Best Books"}</Text>
   <Slider sliderData={bookApi?.filter(tio=>tio.tag?.toLowerCase()==="best")} renderItemCom={renderItemCom}/>
   </View>
   <View style={styles.sliderSection}>
   <Text style={styles.sliderHeading}>{"Recommended Books"}</Text>
   <Slider sliderData={bookApi?.filter(tio=>tio.tag?.toLowerCase()==="recommand")} renderItemCom={renderItemCom}/>
   </View>
   <View style={styles.sliderSection}>
   <Text style={styles.sliderHeading}>{"Free Books"}</Text>
   <Slider sliderData={bookApi?.filter(tio=>tio.tag?.toLowerCase()==="free")} renderItemCom={renderItemCom}/>
   </View>
</Page>
    )
}
const useStyles=(theme)=>StyleSheet.create({
    sliderSection:{
        marginBottom:15,
    },
    sliderHeading:{
        color:theme.color.highlightColor,
        fontSize:12,
        fontWeight:600,
        marginBottom:2
    },
    Item:{
        marginLeft:3,
        marginTop:5,
        marginBottom:5,
        marginRight:7,
    },
    imgCard:{
        height:100,
        resizeMode:"contain",
        width:100,
        borderRadius:3,
        shadowColor: theme.boxShadow.md.color,
        shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
        shadowOpacity:theme.boxShadow.md.opacity,
        shadowRadius: theme.boxShadow.md.radius,
        marginBottom:2,
    },
    bookHeading:{
        fontSize:9,
        color:theme.color.highlightColor,
        width:100,
        overflow:"hidden",
        marginBottom:1,
    },
    bookText:{
        fontSize:8,
        fontWeight:"600",
        width:100,
        overflow:"hidden",
        color:theme.color.highlightColor,
    }
})
export default Ebook;