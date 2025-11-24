// import { OnboardingTextCrescent } from "@/assets/svgs"
import { OnboardingTextCrescent } from "@/assets/static/images"
import AppBox from "./AppBox"
import AppText from "./AppText"
import { APP_FONTS } from "@/theme"
import { Image } from "react-native"

function HighlightedSvgHeading({ heading }: { heading: string }) {
    return (
        <AppBox className='items-center'>
            <AppText fontSize={30} fontFamily={APP_FONTS.GEOMETR415} className="items-center-center">
                Bankai
            </AppText>
            <AppBox className="w-11/12 bg-red-500">

            <Image source={OnboardingTextCrescent} />
            </AppBox>
            {/* <OnboardingTextCrescent fontSize={30} width={100} /> */}
        </AppBox>
    )
}

export default HighlightedSvgHeading