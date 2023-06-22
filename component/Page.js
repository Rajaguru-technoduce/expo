import { SafeAreaView,StyleSheet,ScrollView } from "react-native";
import useTheme from "../hooks/useTheme";
const Page = ({children}) => {
    const theme = useTheme();
    const styles = useStyles(theme)
  return (
  <SafeAreaView style={styles.pages}>
        <ScrollView>
       {children}
       </ScrollView>
  </SafeAreaView>
  )
};
export default Page;
const useStyles=(theme)=>StyleSheet.create({
    pages:{
        backgroundColor:theme.color.paper,
        flex:1,
       paddingHorizontal: 15,
       paddingVertical:20
    }
})

