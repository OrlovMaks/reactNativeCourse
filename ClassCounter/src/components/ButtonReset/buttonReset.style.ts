import { StyleSheet } from "react-native"
export const buttonResetStyles = StyleSheet.create({
    button:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        width:130,
        height:60,
        backgroundColor: 'black',
        margin:10,
        borderRadius:40,
        borderWidth:3,
        borderColor: 'white'
    },
    buttonText:{
        fontSize:40,
        textAlign:'center',
        fontWeight:'700',
        color:'white',
        marginBottom: 10
    }
})