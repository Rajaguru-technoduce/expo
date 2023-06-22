import { colors } from "./color";
import { boxShadow } from "./boxShadow";
import { font } from "./font";
export const theme={
color:{
    highlightColor:colors.hightLight,
    normalColor:colors.normalColor,
    primary:colors.primaryColor,
    secondary:colors.normalColor,
    error:colors.error,
    success:colors.success,
    warning:colors.warning,
    info:colors.info,
    grey:colors.gray,
    paper:colors.paper,
    lightGrey:colors.lightGrey,
    black:colors.black,
    blackCover:colors.blackCover
},
boxShadow:{
    xs:boxShadow.xs,
    md:boxShadow.md,
    lg:boxShadow.lg,
    xl:boxShadow.xl,
    xxl:boxShadow.xxl
},
fontSize:{
   small:font.small,
   regular:font.regular,
   normal:font.normal,
   medium:font.medium,
   large:font.large,
}
}