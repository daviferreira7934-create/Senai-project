import { StyleSheet } from "react-native";
import BotaoPrimario from "../Components/BotaoPrimario";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  ladoA: {
    flex: 1,
    width: '50%',
    
  },

  ladoAcontainer: {
    flex: 1,
    paddingTop: "5%",
    flexDirection: 'column',
  },

  logo1Container: {
    width: "60%",
    height: "25%",
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
  
  containerA: {
    width: "50%",
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  logo1: {
    width: "50%",
    height: "100%",

  },

  containerB: {
    width: "50%",
    height: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',

  },

  logo1Text: {
    width: "50%",
    height: "100%",
    flexDirection: 'column',
    marginTop: "3%",
  },


  text1logo: {
    fontFamily: 'Inter_700Bold',
    fontSize: 50,
    color: 'white',
  },

  text2logo: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: 'white',
    marginBottom: "5%",
  },

  textContainer: {
    marginLeft: "15%",
  },

  img1Container:{
    width: "90%",
    height: "40%",
  
    alignItems: "center",
    justifyContent: "center"
  },

  img1:{
    width: "100%",
    height: "100%"
  },

  ladoB: {
    flex: 1,
    width: '50%',
    backgroundColor: 'white',
    paddingTop: "5%",
    paddingLeft: "10%",

  },

    headerB: {
        width: '100%',
        height: "15%",

    },

    text1: {
      fontFamily: 'Inter_700Bold',
      fontSize: 20,
      color: 'black',
      marginBottom: 5,
    },

    text2: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      color: 'gray',
      marginBottom: "5%",
    },

    text3: {
      fontFamily: 'Inter_700Bold',
      fontSize: 13,
      color: 'black',
      marginBottom: "1%",
      
    },

    text4: {
      fontFamily: 'Inter_700Bold',
      fontSize: 15,
      color: 'white',
    },

    text5: {
      fontFamily: 'Inter_700Bold',
      fontSize: 15,
      color: '#0042dd',
    },

    text6:{
      fontFamily: 'Inter_700Bold',
      fontSize: 15,
      color: '#0042dd',  
    },

    text7:{
      fontFamily: 'Inter_400Regular',
      fontSize: 18,
      color: 'white',  
      lineHeight: 30
    },

    botaoPrimario: {
      backgroundColor: "#0042dd",
      width: '80%',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 10

    },
    botaoPrimario1: {
      width: '80%',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,

    },
    botaoPrimario2: {
      borderColor: 'rgb(0, 0, 0)',
      borderWidth: 1,
      width: '80%',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,

    },




});