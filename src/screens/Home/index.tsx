import { Text, View, StyleSheet } from "react-native";
import { styles} from './styles'

export default function Home() {
  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>React</Text>

    <Text style={styles.eventDate}>
      Native</Text>
    </View>
  )
}