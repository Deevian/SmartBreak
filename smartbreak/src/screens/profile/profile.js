import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  Edit2,
  Category,
  Calendar,
  Clock,
  MedalStar,
  Setting2,
} from "iconsax-react-native";

// Font Gotham
import { useFonts } from "expo-font";

export default function ProfilePage() {
  // Loading Gotham font
  const [loaded] = useFonts({
    GothamMedium: "./../fonts/GothamMedium.ttf",
    GothamBook: "./../fonts/GothamBook.ttf",
  });

  const navigation = useNavigation();

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../imgs/ester.png")}
            style={styles.profilepicture}
          />
          <Text style={styles.name}>Ester Carvalho</Text>
          <Text style={styles.text}>
            Chefe da equipa de design Universidade de Aveiro
          </Text>
        </View>

        <View style={styles.options}>
          <Edit2 color="#000000" />
          <TouchableHighlight
            onPress={() => navigation.navigate("EditProfile")}
            underlayColor={"transparent"}
          >
            <Text
              style={{
                marginLeft: 15,
                fontFamily: "GothamBook",
                fontSize: 16,
              }}
            >
              Editar perfil
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.options}>
          <Category color="#000000" />
          <TouchableHighlight
            onPress={() => navigation.navigate("###")}
            underlayColor={"transparent"}
          >
            <Text
              style={{
                marginLeft: 15,
                fontFamily: "GothamBook",
                fontSize: 16,
              }}
            >
              Os meus equipamentos
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.options}>
          <Calendar color="#000000" />
          <TouchableHighlight
            onPress={() => navigation.navigate("###")}
            underlayColor={"transparent"}
          >
            <Text
              style={{
                marginLeft: 15,
                fontFamily: "GothamBook",
                fontSize: 16,
              }}
            >
              As minhas rotinas
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.options}>
          <Clock color="#000000" />
          <TouchableHighlight
            onPress={() => navigation.navigate("###")}
            underlayColor={"transparent"}
          >
            <Text
              style={{
                marginLeft: 15,
                fontFamily: "GothamBook",
                fontSize: 16,
              }}
            >
              Histórico de pausas
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.options}>
          <MedalStar color="#000000" />
          <TouchableHighlight
            onPress={() => navigation.navigate("ProfileRewards")}
            underlayColor={"transparent"}
          >
            <Text
              style={{
                marginLeft: 15,
                fontFamily: "GothamBook",
                fontSize: 16,
              }}
            >
              As minhas recompensas
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.options}>
          <Setting2 color="#000000" />
          <TouchableHighlight
            onPress={() => navigation.navigate("ProfileSettings")}
            underlayColor={"transparent"}
          >
            <Text
              style={{
                marginLeft: 15,
                fontFamily: "GothamBook",
                fontSize: 16,
              }}
            >
              Definições
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 100,
  },

  profilepicture: {
    backgroundColor: "#F5F5F5",
    height: 170,
    width: 170,
    borderRadius: 100,
    marginTop: 65,
  },

  name: {
    marginTop: 30,
    marginBottom: 15,
    fontFamily: "GothamMedium",
    fontSize: 24,
  },

  options: {
    marginTop: 30,
    borderRadius: 15,
    paddingLeft: 25,
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3ECF7",
  },

  text: {
    fontFamily: "GothamBook",
    fontSize: 16,
    marginTop: 30,
    lineHeight: 24,
    textAlign: "center",
  },
});
