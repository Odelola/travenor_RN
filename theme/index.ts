import { createTheme } from '@shopify/restyle'
import { getFontSize } from '../utils/functions';

const { getTextFontSize } = getFontSize;

export const APP_FONTS = {
    "GEOMETR415": "Geometr415",
    "GILL-SANS": "GillSans",
    "SF-UI-DISPLAY-REGULAR": "SfUiDisplayRegular",
    "SF-UI-DISPLAY-MEDIUM": "SfUiDisplayMedium",
    "SF-UI-DISPLAY-SEMBOLD": "SfUiDisplaySemibold",
};

export const appPalette = {
    appBackground: '#111111',
    whiteTextColor: '#FFFFFF',
    tabBarBackground: "#141414",
    primaryColor: "#CB5715",
    secondaryColor: "#B87100",
    pureBlack: "#000000",
}

const theme = createTheme({
    colors: {
        tabBarBackground: appPalette.tabBarBackground,
        appBackground: appPalette.appBackground,
        whiteTextColor: appPalette.whiteTextColor,
        primaryColor: appPalette.primaryColor,
        secondaryColor: appPalette.secondaryColor,
        pureBlack: appPalette.pureBlack,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768
    },
    textVariants: {
        largeHeading: {
            fontFamily: 'PoppinsExtraBold',
            fontSize: getTextFontSize(26),
            color: "whiteTextColor"
        },
        regular: {
            fontFamily: 'PoppinsRegular',
            fontSize: getTextFontSize(20),
            color: "whiteTextColor"
        },
        light: {
            fontFamily: 'PoppinsLight',
            fontSize: getTextFontSize(14),
            color: "whiteTextColor"
        }
    }
})

export type Theme = typeof theme;

export default theme