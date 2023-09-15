import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./CategoryDetail.style";
import gifsData from "../../data/gifsData";

const CategoryDetail = ({ category }) => {
  const filteredItems = gifsData.filter((item) => item.category === category);

  return (
    <View style={styles.container}>
      <View style={styles.containerCategory}>
        <Image
          source={{ uri: filteredItems[0]?.imageCategory }}
          style={styles.imageCategory}
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        {filteredItems.map((item) => (
          <View style={styles.containerGifsCharacter} key={item.id}>
            <View style={styles.headerListGifs}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity>
                <Text style={styles.label}>{`Ver más`}</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={item.gifs}
              horizontal
              renderItem={({ item: gif }) => (
                <Image
                  source={{ uri: gif }}
                  style={styles.imageGif}
                  key={gif}
                />
              )}
              keyExtractor={(gif) => gif}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryDetail;
