import { Platform } from 'react-native';
import { getFontSize, getStatusBarHeight } from '../utils/functions';
import { appPalette } from '@/tailwind.config';


const { getTextFontSize } = getFontSize;

export const APP_FONTS = {
    "GEOMETR415": "Geometr415",
    "GILL-SANS": "GillSans",
    "SF-UI-DISPLAY-REGULAR": "SfUiDisplayRegular",
    "SF-UI-DISPLAY-MEDIUM": "SfUiDisplayMedium",
    "SF-UI-DISPLAY-SEMBOLD": "SfUiDisplaySemibold",
};

export const SCREEN_MEASUREMENTS = {
    paddingHorizontal: 20,
    paddingFromTop: Platform.OS === "android" ? getStatusBarHeight.statusBarHeight + 12 : 12,
    paddingFromBottom: 20,
}

export const APP_PALETTE = appPalette;