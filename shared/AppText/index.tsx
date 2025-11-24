import { Text, TextProps } from 'react-native'
import { getFontSize } from 'utils/functions';
import { APP_FONTS, APP_PALETTE } from 'theme';

export interface AppTextProps extends TextProps {
    variant?: "bigHeading" | "heading";
    className?: string;
    fontFamily?: string;
    fontSize?: number;
}

const AppText = ({ children, className, variant, fontSize = 16, fontFamily = APP_FONTS['SF-UI-DISPLAY-REGULAR'], style }: AppTextProps) => {
    const { getTextFontSize } = getFontSize;

    function getStylesByVariant() {
        switch (variant) {
            case "bigHeading":
                return {
                    fontFamily: APP_FONTS['SF-UI-DISPLAY-SEMBOLD'],
                    color: APP_PALETTE.dark.DEFAULT,
                    fontSize: getTextFontSize(26)
                }
                case "heading":
                    return {
                        fontFamily: APP_FONTS['SF-UI-DISPLAY-SEMBOLD'],
                        color: APP_PALETTE.dark.DEFAULT,
                        fontSize: getTextFontSize(26)
                }

            default:
                return {
                    fontFamily,
                    color: APP_PALETTE.grey[400],
                    fontSize,
                }
        }
    }
    return (
        <Text className={className} style={[{
            ...getStylesByVariant()
        }, style]}>{children} </Text>
    )
}

export default AppText