import { Dimensions, StyleSheet } from "react-native"
export const style = StyleSheet.create({
    messageStyle:{
        color: 'white', 
        fontSize: 30,
        fontWeight: '700'
    },
    messageBlock:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
    }
})