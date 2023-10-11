import { Text, View,TextInput, TouchableOpacity,FlatList } from "react-native";
import { styles} from './styles'
import { Participant } from "../../components/Participant";

export function Home() {

  const participants = ['Hygor', 'Diego', 'Vini', 'Biro', 'Ana', 'Isa', 'Jack', 'João']

  function handleParticipantAdd(){
    console.log('Voce clicou no botao de adicionar!')
  }

  function handleParticipantRemove(){
    console.log('Voce clicou no botao de REMOVER!')
  }

  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>Nome do Evento</Text>

    <Text style={styles.eventDate}>
      Sexta, 04 de novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor='#6b6b6b'/>

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) =>(
        <Participant
          key={item} 
          name={item} 
          onRemove={handleParticipantRemove}/>
      )}
        ListEmptyComponent={() =>(
          <Text style={styles.listEmptyText}> Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
        )}
      />
    </View>
  )
}