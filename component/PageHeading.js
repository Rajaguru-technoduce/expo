import { View,Text,StyleSheet} from "react-native";
import useTheme from "../hooks/useTheme";
const PageHeading=(props)=>{
const {pageTxt}=props;
const theme = useTheme();
const styles=useStyles(theme);
return(
  <View style={styles.pageHeading}>
      <Text style={styles.pageHeadline}>
        {pageTxt}
      </Text>
    </View>
)
}
const useStyles=(theme)=>StyleSheet.create({
  pageHeading:{
    marginBottom:15,
  },
  pageHeadline:{
    color:theme.color.highlightColor,
    fontSize:17,
  },
})
export default PageHeading;