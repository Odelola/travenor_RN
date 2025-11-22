import { Pressable, PressableProps } from 'react-native'
import { APP_FONTS } from 'theme'
import AppText from '../AppText'

interface AppButtonProps extends PressableProps {
    buttonText?: string
}

function AppButton({ buttonText, children, className, ...props }: AppButtonProps) {
    return (
        <Pressable className="bg-primary w-full rounded-xl items-center py-4 text-red-500"  {...props}>
            <AppText className="text-white" fontFamily={APP_FONTS['SF-UI-DISPLAY-SEMBOLD']}>{buttonText}</AppText>
        </Pressable>

    )
}

export default AppButton