import { useState } from 'react'
import { Platform, SafeAreaView } from 'react-native'
import { AppBox } from '../ui'
import BrandLogo from "../../assets/brandLogo.svg"
import { appPalette } from '../../theme'
import { getStatusBarHeight } from '../../utils/functions'


const HomeScreenNav = () => {
    const NavPaddingTop = (height: number) => Platform.OS === 'android' ? height * 1.5 : 0;
    const [statusHeight] = useState(getStatusBarHeight.statusBarHeight);
    const { appBackground } = appPalette
    return (
        <SafeAreaView style={{ paddingTop: NavPaddingTop(statusHeight), backgroundColor: appBackground }}>
            <AppBox alignItems="center" paddingBottom="s">
                <BrandLogo />
            </AppBox>
        </SafeAreaView>
    )
}



export default HomeScreenNav