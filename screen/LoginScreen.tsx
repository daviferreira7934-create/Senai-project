import { View, Text, Button, Image } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'
import { styles } from '../style/LoginStyle'

import EntradaTexto from '../Components/EntradaTexto'
import BotaoPrimario from '../Components/BotaoPrimario'

export default function LoginScreen({navigation}:any) {
  return (
    <View style={styles.container}>

          <View style={styles.ladoA}>
            <LinearGradient
              colors={['#0047E5', '#0035B0']}
              style={styles.ladoAcontainer}
            >
              <View style={styles.logo1Container}>
                <View style={styles.containerA}>
                  <Image
                  source={require('../imagens/logo1.png')}
                  style={styles.logo1}
                />
                </View>
                
                <View style={styles.containerB}>
                  <Text style={styles.text1logo}>SENAI</Text>
                  <Text style={styles.text2logo}>Monitoria Connect</Text>
                </View>
              

              </View>

                <View style={styles.textContainer}>
                  <Text style={styles.text7}>{"Conectando Monitores,\nAlunos e Professores"}</Text>
                </View>
                
                <View style={styles.img1Container}>
                  <Image
                    source={require("../imagens/img1.png")}
                    style={styles.img1}
                  />
                </View>

            </LinearGradient>
          </View>


        

        <View style={styles.ladoB}>
          
          <View style={styles.headerB}>
            
            <Text style={styles.text1}>Faça seu login</Text>
            <Text style={styles.text2}>Acesse sua conta para continuar</Text>
            <Text style={styles.text3}>E-mail ou Matricula</Text>
            
            <EntradaTexto 
              placeholder='Digite seu email ou matricula'

              icon='envelope'
              colorIcon='#1E5BFF'

              styleContainer={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'gray',
                width: '80%',
                alignItems: 'center',
                padding: 5,
                marginBottom: "3%"
              }}

              styleInput={{
                padding: 10,
                width: '100%',
                outlineStyle: 'none',
              }}
              
            />

            <Text style={styles.text3}>Senha</Text>

            <EntradaTexto 
              placeholder='Digite sua senha'
              icon='lock'
              colorIcon='#1E5BFF'

              styleContainer={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'gray',
                width: '80%',
                alignItems: 'center',
                padding: 5,
                marginBottom: 10
              }}

              styleInput={{
                padding: 10,
                width: '100%',
                outlineStyle: 'none',
              }}

            />
          
          <BotaoPrimario
            title='Entrar'
            navigation={navigation}
            tela='DashboardScreen'
            style={styles.botaoPrimario}
            text4={styles.text4}
          />  
        
        <BotaoPrimario
          title='Esqueci minha senha'
          navigation={navigation}
          tela='DashboardScreen'
          style={styles.botaoPrimario1}
          text4={styles.text5}
        />

        <BotaoPrimario
          title='Acessar como convidado'
          navigation={navigation}
          tela='DashboardScreen'
          style={styles.botaoPrimario2}
          text4={styles.text6}
        />

          </View>

        </View>
    </View>
  )
}