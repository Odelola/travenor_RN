import { Dimensions } from "react-native"


const useWindowDimensions = () => {

    const { width, height } = Dimensions.get("window");

    return { width, height }
}