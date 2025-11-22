import { Text, TextProps } from 'react-native'
import { getFontSize } from 'utils/functions';
import { APP_FONTS } from 'theme';

export interface AppTextProps extends TextProps {
    variant?: string;
    className?: string;
    fontFamily?: string;
    fontSize?: number;
}

const AppText = ({ children, className, variant, fontSize = 16, fontFamily = APP_FONTS['SF-UI-DISPLAY-REGULAR'], style, ...props }: AppTextProps) => {
    const { getTextFontSize } = getFontSize;

    return (
        <Text style={[{
            fontSize: getTextFontSize(fontSize),
            fontFamily,
        }, style]} className={className} {...props}>{children} </Text>
    )
}

export default AppText