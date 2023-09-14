import { Details, Home, Products } from "./src/screens";

import fonts from "./src/global/fonts";
import { useFonts } from "expo-font";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [categorySelected, setCategorySelected] = useState("");
  const [productSelected, setProductSelected] = useState();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      {productSelected ? (
        <Details product={productSelected} />
      ) : categorySelected ? (
        <Products
          category={categorySelected}
          setProductSelected={setProductSelected}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </>
  );
}
