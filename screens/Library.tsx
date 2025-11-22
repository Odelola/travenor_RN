import { Dimensions } from 'react-native'
import { AppBox, AppText } from '../components/ui';
import { getFontSize } from '../utils/functions';
const { width } = Dimensions.get("window");
const Library = () => {
    const { getTextFontSize } = getFontSize
    return (
        <AppBox flex={1} justifyContent="center" alignItems="center" backgroundColor="appBackground">
            <AppText letterSpacing={5} style={{ fontSize: getTextFontSize(width / 5), fontFamily: "PoppinsBold", transform: [{ rotate: "-90deg" }] }}>LIBRARY</AppText>
        </AppBox>
    )
}

export default Library