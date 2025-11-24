import { Pressable, PressableProps } from 'react-native'
import { APP_FONTS, APP_PALETTE } from 'theme'
import AppText, { AppTextProps } from '../AppText'

interface AppLinkProps extends PressableProps {
    linkText: string
}

function AppLink({ linkText, onPress, ...props }: AppLinkProps) {
    return (
        <Pressable onPress={onPress} {...props}>
            <AppText fontFamily={APP_FONTS['SF-UI-DISPLAY-MEDIUM']} style={{ color: APP_PALETTE.primary.DEFAULT }}>{linkText}</AppText>
        </Pressable>

    )
}

export default AppLink