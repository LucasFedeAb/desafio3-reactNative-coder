import { Image, Text, View } from "react-native";

import { Header } from "../../components";
import React from "react";
import styles from "./Details.style";

const Details = ({ product }) => {
  return (
    <View style={styles.container}>
      <Header title={"Detalle"} />
      <Image style={styles.image} source={{ uri: product.images[0] }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text style={styles.price}>{`$ ${product.price}`}</Text>
      </View>
    </View>
  );
};

export default Details;
