import { StyleSheet, Dimensions } from "react-native"

const heightWindow = Dimensions.get('window').height;

export const style = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: heightWindow 
    },
    wrapper:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50 
    },
    text:{
        fontSize: 230,
        color: 'white',
        marginBottom: 70
    },
    wrapperButtons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})