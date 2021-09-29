import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Radio = (props)=>{
    //console.log({key});{key, question, options, onChangeSelect, selected}
    const prop = props;
    console.log(prop);
    return(
        <View >
            <Text>{question}</Text>
            {options.map(( opcao, indice)=>
                <TouchableOpacity style={styles.containerOpcoes }
                    onPress={()=> onChangeSelect(opcao,  indice)}>
                    <View style={styles.circuloExterno}>
                        {selected === indice && <View style={styles.circuloInterno}/>}
                    </View>
                    <Text>{opcao}</Text>
                </TouchableOpacity>
                
                )
            }
        </View>
    );
    
}
const styles = StyleSheet.create({
    containerOpcoes:{
        flexDirection: "row",
        alignItems: "center"
    },
    circuloExterno:{
        alignItems:'center',
        justifyContent: "center",
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#999"
    },
    circuloInterno:{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#000"
    }
})
export default Radio;