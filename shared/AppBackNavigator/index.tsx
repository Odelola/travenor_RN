import { Pressable } from 'react-native'
import { ChevronLeftIcon } from '@/assets/svgs';
import { useNavigation } from '@react-navigation/native';

const AppBackNavigator = () => {
const navigator = useNavigation();
    return (
        <Pressable onPress={() => navigator.goBack()} className='bg-grey-300 w-12 h-12 rounded-full justify-center items-center'>
            <ChevronLeftIcon />
        </Pressable>
    )
}

export default AppBackNavigator