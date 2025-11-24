import { Pressable, PressableProps } from 'react-native'
import { APP_FONTS, APP_PALETTE } from 'theme'
import AppText, { AppTextProps } from '../AppText'

interface AppButtonProps extends PressableProps {
    buttonText?: string
}

function AppButton({ buttonText, children, className, ...props }: AppButtonProps) {
    return (
        <Pressable className="bg-primary w-full rounded-xl items-center py-4"  {...props}>
            <AppText style={{ color: APP_PALETTE.white }} fontFamily={APP_FONTS['SF-UI-DISPLAY-SEMBOLD']}>{buttonText}</AppText>
        </Pressable>

    )
}

export default AppButton