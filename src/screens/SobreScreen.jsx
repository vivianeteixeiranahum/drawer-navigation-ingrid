import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../config/styles";
export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text style={styles.alinhamento} variant="displaySmall">Teoria das Cordas</Text>
        <Text>{"\n"}</Text>
        <Text>
        A Teoria das Cordas é uma área de estudo na física teórica que propõe que as partículas fundamentais do universo não são partículas pontuais, mas sim pequenas cordas vibrantes. Essas cordas podem se manifestar de várias maneiras, dando origem a diferentes partículas e forças. Uma das ideias mais intrigantes da teoria é que ela pode potencialmente unificar todas as forças fundamentais da natureza em um único quadro teórico. Apesar de sua complexidade matemática e desafios experimentais, a Teoria das Cordas continua a ser um campo fascinante e ativo de pesquisa na física moderna.
        </Text>
      </View>
    </View>
  );
}