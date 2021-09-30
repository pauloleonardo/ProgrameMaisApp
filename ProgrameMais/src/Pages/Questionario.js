import React, {useEffect, useState} from "react";
import { Text, View, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';
import styles from "../../assets/CSS/stylesCss.js";
import config from "../../Config/config.json";
import axios from "axios";
import Radio from "../components/Radio.js";
//import { RadioButton } from 'react-native-paper';


function Questionario(props){
    //const ling = props.route.params.text;
    

    const [listQuestoes, setListQuestoes] = useState([]);
    const [selecionado, setSelecionado] = useState();
    


    useEffect(() => {
        axios.get(`${config.urlNode}desafio/language/${props.route.params.text}`)
        .then(response =>{
            setListQuestoes(response.data)
        }).catch(error=>{
            console.log(`Ocorreu um erro! ${error}`);
          });
      
    }, []);
    
    //<Text style={styles.resposta}>{`${a}`}</Text>
    //let a =listQuestoes[0].correct;
    //console.log(a);

    const textElements = listQuestoes.map((list, index) =>{
        const {id_questao, questao , a, b, c, d} = list;
        //console.log(id_questao)
    
        return(
            <View>
                <SafeAreaView style={styles.safeArea}>  
                
                    <Radio
                        key={index}
                        question={questao} 
                        options={[a,b,c,d]}
                        chave={id_questao}
                        indiceQuest={index}
                        selected = {selecionado} 
                        horizontal= {true}
                        onChangeSelect={(ind)=>setSelecionado(ind)}
                    />
                
                </SafeAreaView>
            </View>
            
        )
    
    
    });
    
    
    /*const textElements = listQuestoes.map((list) =>{
        const {id_questao, questao, a, b, c, d} = list;
        return(
            <View>
                <TouchableHighlight key={id_questao}>
                    <View style={styles.questaoDivisao}>
                        <Text style={styles.pergunta}>{`${questao}`}</Text>
                        
                        <View>
                        <RadioButton
                            /*value={a}
                            options = {[{a},{b},{c},{d}]}
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                        />
                        <RadioButton
                            value={b}
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                        />
                        <RadioButton
                            value={c}
                            status={ checked === 'third' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('third')}
                        />
                        <RadioButton
                            value={d}
                            status={ checked === 'four' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('four')}
                        />
                        </View>

                        </View>
                    </TouchableHighlight>
                </View>
        )
    });*/
   
    return(
        <ScrollView>
            <View>
                {textElements}
            </View>
        </ScrollView>
    );
}


export default Questionario;