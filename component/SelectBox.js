import {useState} from "react"
import {StyleSheet,Picker} from "react-native";
import useTheme from "../hooks/useTheme";
const SelectBox=(props)=>{
    const theme = useTheme();
    const styles=useStyles(theme);
    const {value,onChangeText,placeholderTxt,optionArr,error,helperTxt}=props;
    console.log(onChangeText,"test test")
    return(
        <Picker
        style={styles.pickerBox}
        selectedValue={value}
        onValueChange={onChangeText}>
            {optionArr.map((option)=>(
                <Picker.Item enabled={option.title==="User Role"?false:true} label={option.title} value={option.id} />
            ))}
      </Picker>
    )
}
const useStyles=(theme)=>StyleSheet.create({
    pickerBox:{
        paddingHorizontal: 5,
        paddingVertical:9,
        marginBottom:7,
        width:"100%",
        fontSize:14,
        borderRadius:4,
        border:`1 solid ${theme.color.highlightColor}`,
        color:theme.color.highlightColor,
        backgroundColor:theme.color.paper
    }
})
export default SelectBox;