import { SafeAreaView, Text, StyleSheet } from "react-native";
import useTheme from "../hooks/useTheme";
const LoadingPage=()=>{
    return(
        <SafeAreaView style={styles.loadingScreen}>
      <Text style={styles.loadingPageText}>{"Loading..."}</Text>
    </SafeAreaView>
    )
}
const useStyles = (theme) => StyleSheet.create({
    loadingScreen:{
        flex:1,
        backgroundColor:theme.color.highlightColor,
       // alignItems:"center",
        justifyContent:"center"
    },
    loadingPageText:{
        fontSize:20,
        fontWeight:"600",
        color:theme.color.paper,
    }
    });
export default LoadingPage;