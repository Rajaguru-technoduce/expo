import { Page } from "../component";
import {StyleSheet,ImageBackground,View,Text,Image,FlatList, Pressable} from "react-native";
import useTheme from "../hooks/useTheme";
import { courseDetails, sliderData } from "../_api_";
import { image } from "../assets/icons";
const CourseDetailsPage=({ route, navigation })=>{
    const theme = useTheme();
    const styles = useStyles(theme);
    const classComponent=({item})=>{
        return(
            <View style={styles.classBox}>
             <Text style={styles.subjectSubTitle}>{item.concept?`Class-${item.id}`:""}</Text>
             <Text style={styles.subjectContent}>{item.concept}</Text>
             <Text style={styles.subjectSubTitle}>{item.practice?`Practice-${item.id}`:""}</Text>
             <Text style={styles.subjectContent}>{item.practice}</Text>
            </View>
        )
    }
    const  itemsDivider=()=>{
        return(
            <View style={styles.divider}></View>
        )
    }
    const sliderData=({item})=>{
        return(
            <View style={styles.tutorBox}>
                <View style={styles.tutorPerson}>
                <Image source={item.image} style={styles.tutorsBoxList}/>
                <View style={styles.tutorPersonData}>
                 <Text style={styles.tutorHeading}>{item.tutor}</Text>
                 <Text style={styles.tutorSubHeading}>{item.tech}</Text>
                </View>
                </View>
                <View style={styles.moreDetails}>
                <View style={styles.moreList}>
          
                    <Text style={styles.leftHeading}>
                        {"Rating"}
                    </Text>

                    <Text style={styles.rightTxt}>
                        {`: ${item.rate}`}
                    </Text>
                </View>
                <View style={styles.moreList}>
                
                    <Text style={styles.leftHeading}>
                        {"Price"}
                    </Text>

                    <Text style={styles.rightTxt}>
                        {`: ${item.price}`}
                    </Text>
                </View>
                <View style={styles.moreList}>
                
                    <Text style={styles.leftHeading}>
                        {"Qualification"}
                    </Text>

                    <Text style={styles.rightTxt}>
                        {`: ${item.qualification}`}
                    </Text>
                </View>
                </View>
            </View>
        )
    }
    const sliderDataBook=({item})=>{
     return(
         <View style={styles.bookBox}>
           <Image source={item.image} style={styles.bookImg}/>
           <View style={styles.bookdeskBox}>
             <Text style={styles.bookTxt}>{`Rating: ${item.rate}`}</Text>
             <Text style={styles.bookTxt}>{`Price: ${item.price}`}</Text>
           </View>
         </View>
     )
    }
    return(
<Page>
    <View style={styles.courseBox}>
    <ImageBackground source={courseDetails.image} resizeMode="cover" style={styles.courseImg}>
    <Text style={styles.courseTitle}>{courseDetails.title}</Text>
</ImageBackground>
    </View>
    <View style={styles.courseDetailsBox}>
        <View style={styles.courseDetailsColumnBox}>
        <Text style={styles.courseBoxHeadTitle}>
            {"Rating"}
        </Text>
       <View style={styles.courseBoxImg}>
         <Image source={image.star} style={styles.courseImgDec}/>
       </View>
       <Text  style={styles.courseBoxSubTitle}>
           {courseDetails.rate}
       </Text>
    </View>
    <View style={styles.courseDetailsColumnBox}>
        <Text style={styles.courseBoxHeadTitle}>
            {"Skils"}
        </Text>
       <View style={styles.courseBoxImg}>
         <Image source={image.award} style={styles.courseImgDec}/>
       </View>
       <Text  style={styles.courseBoxSubTitle}>
           {courseDetails.skills}
       </Text>
    </View>
    <View style={styles.courseDetailsColumnBox}>
        <Text style={styles.courseBoxHeadTitle}>
            {"Students"}
        </Text>
       <View style={styles.courseBoxImg}>
         <Image source={image.group} style={styles.courseImgDec}/>
       </View>
       <Text  style={styles.courseBoxSubTitle}>
           {courseDetails.student}
       </Text>
    </View>
    </View>
    <View style={styles.subjectBox}>
        <Text style={styles.subjectTitle}>{"Video Available Languages"}</Text>
        <Text style={styles.subjectContent}>{courseDetails.languages}</Text>
        <Text style={styles.subjectTitle}>{"Syllabus"}</Text>
        <Text style={styles.subjectContent}>{courseDetails.syllabus}</Text>
        <Text style={styles.subjectTitle}>{"Free Trail Class"}</Text>
        <Text style={styles.subjectContent}>{courseDetails.freeClass}</Text>
        <Text style={styles.subjectTitle}>{"Class List"}</Text>
        <FlatList data={courseDetails.classes} renderItem={classComponent} ItemSeparatorComponent={itemsDivider}/>
        <Text style={styles.subjectTitle}>{"Price"}</Text>
        <Text style={styles.subjectPriceContent}>{courseDetails.price}</Text>
        <Text style={styles.subjectTitle}>{"Available Tutors"}</Text>
        <FlatList data={courseDetails.tutors} renderItem={sliderData} horizontal bounces={false}  snapToAlignment="start" showsHorizontalScrollIndicator={false}/>
        <Text style={styles.subjectTitle}>{"Available Books"}</Text>
        <FlatList data={courseDetails.freeBooks} renderItem={sliderDataBook} horizontal bounces={false}  snapToAlignment="start" showsHorizontalScrollIndicator={false}/>
        <Pressable style={styles.entrollBtn}>
            <Text style={styles.entrollbtnTxt}>{'Entroll'}</Text>
        </Pressable>
    </View>

</Page>
    )
}
const useStyles=(theme)=>StyleSheet.create({
    courseBox:{
        height:"100",
        width:"100%",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        shadowColor: theme.boxShadow.md.color,
        shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
        shadowOpacity:theme.boxShadow.md.opacity,
        shadowRadius: theme.boxShadow.md.radius,
        overflow:"hidden"
    },
    courseImg:{
        width:"100%",
        height:"100%",
    },
    courseTitle:{
        color:theme.color.paper,
        fontSize:19,
        fontWeight:"600",
        flex:1,
      alignItems:"center",
      justifyContent:"center",
        height:"100%",
        backgroundColor:theme.color.blackCover
    },
    courseDetailsBox:{
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems:"center",
        flexDirection:"row",
        flex:3,
        justifyContent:"space-between"
    },
    courseDetailsColumnBox:{
        flex:1,
       alignItems:"center",
        flexDirection:"column",
        justifyContent:"center"
    },
    courseImgDec:{
        width:30,
        height:30,
        objectFit:"cover",
    },
    courseBoxImg:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: theme.boxShadow.md.color,
        shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
        shadowOpacity:theme.boxShadow.md.opacity,
        shadowRadius: theme.boxShadow.md.radius,
        borderRadius:"50%",
     marginTop:3,
     marginBottom:3,
      flex:1,
      flexDirection:"column"
    },
    courseBoxHeadTitle:{
        textAlign:"center",
        color:theme.color.highlightColor,
       fontSize:12,
    },
    courseBoxSubTitle:{
        textAlign:"center",
        color:theme.color.highlightColor,
       fontSize:12,
       fontWeight:"600",
    },
    subjectBox:{
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingTop:10,
        textAlign:"left",
    },
    subjectTitle:{
        marginBottom:7,
        fontSize:13,
        fontWeight:"600",
        color:theme.color.highlightColor
    },
    subjectSubTitle:{
        marginBottom:2,
        fontSize:11,
        fontWeight:"600",
        color:theme.color.highlightColor
    },
    subjectContent:{
        fontSize:12,
        marginBottom:7,
        color:theme.color.grey
    },
    subjectPriceContent:{
        fontSize:11,
        marginBottom:7,
        fontWeight:"600",
        color:theme.color.highlightColor
    },
    divider:{
        height:1,
        width:"90%",
        backgroundColor:theme.color.lightGrey,
        marginBottom:10,
        justifyContent:"center"
    },
    tutorBox:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
        borderRadius:10,
        height:"auto",
        margin:10,
        marginTop:5,
        marginLeft:3,
        width:150,
        overflow:"hidden"
    },
    tutorsBoxList:{
        width:50,
        height:50,
        borderRadius:"50%",
        shadowColor: theme.boxShadow.md.color,
        shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
        shadowOpacity:theme.boxShadow.md.opacity,
        shadowRadius: theme.boxShadow.md.radius,
        objectFit:"cover"
    },
    tutorPerson:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    tutorPersonData:{
        flexDirection:"column",
        marginLeft:15
    },
    tutorHeading:{
    fontSize:13,
    color:theme.color.highlightColor,
    marginBottom:5,
    },
    tutorSubHeading:{
        fontSize:12,
        color:theme.color.grey,
    },
    moreDetails:{
        marginTop:10,
        alignItem:"center",
    },
    moreList:{
        marginBottom:5,
        flex:1,
       alignItems:"center",
      flexDirection:"row" , 
    },
    headingimg:{
        width:11,
        height:11,
        objectFit:"contain",
        marginRight:2,
    },
    leftHeading:{
        color:theme.color.highlightColor,
        fontSize:11,
        marginRight:2,
    },
    rightTxt:{
        color:theme.color.grey,
        fontSize:9,
        fontWeight:"600"
    },
bookBox:{
    margin:10,
    marginLeft:3,
    marginTop:5,
},
bookImg:{
    resizeMode:"contain",
    width:100,
    borderRadiis:2,
    shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
    height:100,
    objectFit:"contain",
},
bookdeskBox:{
    marginTop:10,
},
bookTxt:{marginBottom:2,
fontSize:11,
color:theme.color.grey
},
entrollBtn:{
backgroundColor:theme.color.highlightColor,
flex:1,
width:"100%",
marginTop:5,
borderRadius:20,
paddingVertical: 5,
paddingHorizontal: 5,
justifyContent:"center",
alignItems:"center"
},
entrollbtnTxt:{
fontSize:15,
color:theme.color.paper
}
})
export default CourseDetailsPage;