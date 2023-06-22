import { FlatList, StyleSheet,View,Image,Text } from "react-native";
import useTheme from "../hooks/useTheme";
const Slider=(props)=>{
    const theme = useTheme();
    const styles=useStyles(theme);
    const {sliderData,renderItemCom}=props;
    return(
     <FlatList data={sliderData} renderItem={renderItemCom} horizontal bounces={false}  snapToAlignment="start" showsHorizontalScrollIndicator={false}/>
    )
}
const useStyles=(theme)=>StyleSheet.create({
    
})
export default Slider;