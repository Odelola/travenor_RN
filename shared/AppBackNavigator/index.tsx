import { TextProps, TouchableOpacity } from 'react-native'
import { ChevronLeft } from '@/assets/svgs';
import { useNavigation } from '@react-navigation/native';

const AppBackNavigator = () => {
const navigator = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigator.goBack()} className='bg-grey-300 w-12 h-12 rounded-full justify-center items-center'>
            <ChevronLeft />
        </TouchableOpacity>
    )
}

export default AppBackNavigator