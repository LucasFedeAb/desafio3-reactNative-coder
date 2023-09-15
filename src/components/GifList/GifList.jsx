import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import gifsData from "../../data/gifsData"; // Asegúrate de que la ruta sea correcta

function GifList() {
  // Renderiza cada elemento del array usando FlatList
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Image
        source={{ uri: item.imageCategory }}
        style={{ width: 200, height: 200 }}
      />
      <FlatList
        data={item.gifs}
        horizontal
        renderItem={({ item: gif }) => (
          <Image source={{ uri: gif }} style={{ width: 100, height: 100 }} />
        )}
        keyExtractor={(gif) => gif}
      />
    </View>
  );

  return (
    <FlatList
      data={gifsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default GifList;
