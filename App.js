import { View } from "react-native";
import { Home } from "./src/screens";
import fonts from "./src/global/fonts";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NavbarBottom } from "./src/components/index.js";
import styles from "./App.Style.js";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Home />
      <NavbarBottom />
    </View>
  );
}
