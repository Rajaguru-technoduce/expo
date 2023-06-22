import React,{useState} from "react";
import { Page,InputBox,SelectBox} from "../component";
import useTheme from "../hooks/useTheme";
import { View,StyleSheet,Text, Pressable} from "react-native";
const ProfileSetting=()=>{
    const theme = useTheme();
    const styles = useStyles(theme);
    const [userName,setUserName]=useState("Ram");
    const [userEmail,setUserEmail]=useState("test@123.com");
    const [userPhone,setUserPhone]=useState("4567890977");
    const [userRole,setUserRole]=useState(2);
    const [oldPws,setOldPws]=useState("test");
    const [newPws,setNewPws]=useState("");
    const [helperText,setHelperText]=useState();
    const [fieldError,setFieldError]=useState(false);
    const textUserNameChange=(text)=>{
        setUserName(text);
    }
    const optionArray=[
        {id:1,title:"User Role"},
        {id:2,title:"Student"},
        {id:3,title:"programmer"}
    ]
    return(
        <Page>
           <View style={styles.profileTopSec}>
               <View style={styles.profileImagePicker}>
                   <View style={styles.profieImg}>
                       <Text style={styles.profileTxt}>{"Upload Image"}</Text>
                   </View>
               </View>
           </View>
           <View style={styles.inputGroups}>
             <InputBox placeHolderTxt={"User Name"} required={true} error={fieldError} helperTxt={helperText}   value={userName}  changeValue={(text)=>textUserNameChange(text)}/>
             <InputBox placeHolderTxt={"User Email"} required={true} error={fieldError} helperTxt={helperText}  value={userEmail}  changeValue={(text)=>setUserEmail(text)}/>
             <InputBox placeHolderTxt={"User PhoneNo"} required={true} error={fieldError} helperTxt={helperText}  value={userPhone}  changeValue={(text)=>setUserPhone(text)}/>
             <SelectBox placeHolderTxt={"User Role"} optionArr={optionArray} value={userRole}  onChangeText={(itemValue, itemIndex)=>setUserRole(itemValue)}/>
             <InputBox pws={true} placeHolderTxt={"User Password"} required={true} error={fieldError} helperTxt={helperText}   value={oldPws}  changeValue={(text)=>setOldPws(text)}/>
             <InputBox pws={true} placeHolderTxt={"User New Password"} required={true} error={fieldError} helperTxt={helperText}   value={newPws}  changeValue={(text)=>setNewPws(text)}/>
           <Pressable style={styles.EditBtn}>
                <Text  style={styles.EditBtnTxt}>{"Submit"}</Text>
           </Pressable>
           </View>
           </Page>
    )
}
const useStyles=(theme)=>StyleSheet.create({
    profileTopSec:{
       width:"100%",
       height:"100",
       borderRadius:10,
       shadowColor: theme.boxShadow.md.color,
       shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
       shadowOpacity:theme.boxShadow.md.opacity,
       shadowRadius: theme.boxShadow.md.radius,
       backgroundColor:theme.color.highlightColor,
       marginBottom:10,
       paddingVertical: 20,
       paddingHorizontal: 20,
       justifyContent:"center",
       alignItems:"center"
    },
    profileImagePicker:{
        height:80,
        width:80,
        borderRadius:"50%",
        border:`2 dashed ${theme.color.highlightColor}`,
        shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
        overflow:"hidden"
    },
    profieImg:{
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:theme.color.blackCover,
    },
    profileTxt:{
        color:theme.color.paper,
        fontSize:11,
        textAlign:"center"
    },
    EditBtn:{
        backgroundColor:theme.color.highlightColor,
        borderRadius:12,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    EditBtnTxt:{
    fontSize:"13",
    color:theme.color.paper,
    }
})
export default ProfileSetting;