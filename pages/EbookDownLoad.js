import { Page, ScoreImgRound } from "../component";
import useTheme from "../hooks/useTheme";
import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { bookDetails } from "../_api_";
import { image } from "../assets/icons";
const EbookDownLoad = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  console.log(theme, "theme");
  return (
    <Page>
      <View style={styles.bookImgBox}>
        <Image source={bookDetails.image} style={styles.bookImg} />
      </View>
      <View style={styles.bookDetailBox}>
        <Text style={styles.bookTitle}>{bookDetails.title}</Text>
        <View style={styles.scoreBoard}>
          <ScoreImgRound
            iconText={"Rating"}
            iconScore={bookDetails.rate}
            iconImg={image.star}
          />
           <ScoreImgRound
            iconText={"Downloads"}
            iconScore={bookDetails.downloads}
            iconImg={image.download}
          />
             <ScoreImgRound
            iconText={"No Pages"}
            iconScore={bookDetails.noPages}
            iconImg={image.eye}
          />
        </View>
        <View style={styles.textBotom}>
        <Text style={styles.subHeading}>{"Author"}</Text>
        <Text style={styles.content}>{bookDetails.author}</Text>
        </View>
        <View style={styles.textBotom}>
        <Text style={styles.subHeading}>{"Edition"}</Text>
        <Text style={styles.content}>{bookDetails.edition}</Text>
        </View>
        <View style={styles.textBotom}>
        <Text style={styles.subHeading}>{"Year"}</Text>
        <Text style={styles.content}>{bookDetails.year}</Text>
        </View>
        <View style={styles.textBotom}>
        <Text style={styles.subHeading}>{"Publish"}</Text>
        <Text style={styles.content}>{bookDetails.publish}</Text>
        </View>
        <View style={styles.textBotom}>
        <Text style={styles.subHeading}>{"Disccount"}</Text>
        <Text style={styles.content}>{bookDetails.disccount}</Text>
        </View>
        <View style={styles.textBotom}>
        <Text style={styles.subHeading}>{"Cost"}</Text>
        <Text style={styles.textPrice}>{bookDetails.cost}</Text>
        </View>
        <View style={styles.textBotom}>
        <Text style={styles.subHeading}>{"Book Syllabus"}</Text>
        <Text style={styles.content}>{bookDetails.syllabus}</Text>
        </View>
        <View style={styles.textBotom}>
        <Text style={styles.subHeading}>{"Book Description"}</Text>
        <Text style={styles.content}>{bookDetails.desc}</Text>
        </View>
        <Pressable style={styles.donloadBtn}>
          <Text style={styles.donloadBtnText}>{"Download Now"}</Text> 
        </Pressable>
      </View>
    </Page>
  );
};
const useStyles = (theme) =>
  StyleSheet.create({
    bookImgBox: {
      width: "100%",
      height: 200,
      shadowColor: theme.boxShadow.md.color,
      shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
      shadowOpacity:theme.boxShadow.md.opacity,
      shadowRadius: theme.boxShadow.md.radius,
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: theme.color.highlightColor,
    },
    bookImg: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    bookDetailBox: {
      paddingVertical: 0,
      paddingHorizontal: 15,
      marginTop: 10,
    },
    bookTitle: {
      color: theme.color.highlightColor,
      fontSize: 15,
      fontWeight: "600",
      marginBottom: 10,
    },
    scoreBoard: {
      display: "flex",
      marginBottom: 10,
      flexDirection: "row",
     // alignItems: "center",
      justifyContent: "space-between",
    },
    subHeading:{
        fontSize:12,
        fontWeight:"600",
        marginBottom:3,
        color:theme.color.highlightColor
    },
    textBotom:{
        marginBottom:10,
    },
    textPrice:{
        fontSize:11,
        marginBottom:2,
        color:theme.color.highlightColor
    },
    content:{
        fontSize:11,
        color:theme.color.grey,
        marginBottom:2,
    },
    donloadBtn:{
        paddingVertical: 7,
        paddingHorizontal: 7,
        justifyContent:"center",
      //  alignItems:"center",
        backgroundColor:theme.color.highlightColor,
        borderRadius:20,
        width:"100%"
    },
    donloadBtnText:{
        color:theme.color.paper,
        fontSize:12,
        textAlign:"center"
    }
  });
export default EbookDownLoad;
