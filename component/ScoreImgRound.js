import { View, StyleSheet, Text, Image } from "react-native";
import useTheme from "../hooks/useTheme";
const ScoreImgRound = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { iconText, iconScore, iconImg } = props;
  return (
    <View style={styles.scoreBox}>
      <Text style={styles.iconTextHeading}>{iconText}</Text>
      <View style={styles.circleBox}>
        <Image source={iconImg} style={styles.circleImg} />
      </View>
      <Text style={styles.iconTextScore}>{iconScore}</Text>
    </View>
  );
};
const useStyles = (theme) =>
  StyleSheet.create({
    scoreBox: {
      marginBottom: 5,
    },
    circleBox: {
      borderRadius: "50%",
      shadowColor: theme.boxShadow.md.color,
    shadowOffset: {width: theme.boxShadow.md.width, height:theme.boxShadow.md.height},
    shadowOpacity:theme.boxShadow.md.opacity,
    shadowRadius: theme.boxShadow.md.radius,
      backgroundColor: theme.color.paper,
      paddingHorizontal: 7,
      paddingVertical:7,
      marginTop: 5,
      marginBottom: 5,
      width: 45,
      height: 45,
    },
    circleImg: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    iconTextHeading: {
      fontSize: 9,
      textAlign: "center",
      color: theme.color.highlightColor,
      fontWeight: "500",
    },
    iconTextScore: {
      fontSize: 9,
      textAlign: "center",
      color: theme.color.highlightColor,
      fontWeight: "600",
    },
  });
export default ScoreImgRound;
