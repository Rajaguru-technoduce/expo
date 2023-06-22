import {TextInput,Text,View,StyleSheet} from "react-native";
import useTheme from "../hooks/useTheme";
import { theme } from "../theme";
const InputBox=(props)=>{
    const theme= useTheme();
    const styles=useStyles(theme);
    const {placeHolderTxt,Inputtype,pws,value,changeValue,required,error,helperTxt}=props;
    return(
        <View style={styles.inputBox}>
<TextInput placeholder={required?`${placeHolderTxt} *`:placeHolderTxt} value={value} onChangeText={changeValue} style={error?styles.inputErrorBox:styles.textInputBoxStyle}
secureTextEntry={pws?true:false}
/>
{error&&helperTxt?<Text style={styles.required}>{helperTxt}</Text>:""}
</View>
   )
}
const useStyles=(theme)=>StyleSheet.create({
    inputBox:{
        marginBottom:10,
        position:"relative",
    },
    textInputBoxStyle:{
        paddingHorizontal:5,
        paddingVertical:9,
        width:"100%",
        borderRadius:"4",
        border:`1 solid ${theme.color.highlightColor}`,
        color:theme.color.highlightColor
    },
    inputErrorBox:{
        paddingVertical:9,
        paddingHorizontal:5,
        width:"100%",
        borderRadius:4,
        border:`1 solid ${theme.color.error}`,
        color:theme.color.error
    },
    required:{
        color:theme.color.error,
        fontSize:12,
        marginTop:2
    }
})
export default InputBox;