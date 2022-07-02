import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, FlatList, TouchableOpacity } from "react-native";
import firestore from "firebase/firestore";

const TipsList = ({ navigation }) => {
  const [tips, setTips] = useState(null);

  const getTips = async () => {
    const querySanp = await firestore().collection("Tips").get();
    const allTips = querySanp.docs.map((docSnap) => docSnap.data());
    console.log(allTips);
    setTips(allTips);
  };

  useEffect(() => {
    getTips();
  }, []);
  const RenderCard = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("DescriptionTips", { name: item.description })}>
          <View style={styles.container}>
            <ScrollView>
              <Text style={styles.item}>{item.name}</Text>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleText}>Wear a mask.Save lives. </Text>

      <FlatList
        data={tips}
        renderItem={({ item }) => {
          return <RenderCard item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: "#090c0d",
  },

  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#090c0d",
    //   borderColor: '#2d0000',
    //   borderRadius: 3,
    //   borderWidth: 1,
  },
  titleText: {
    fontSize: 20,
    backgroundColor: "#A30000",
    textAlign: "center",
    marginVertical: 1,
    padding: 10,
    color: "white",
    fontWeight: "bold",
    marginTop: 0,
    height: 50,
  },
  item: {
    padding: 12,
    margin: 10,
    backgroundColor: "#D93B4A",
    fontSize: 25,
    color: "#fff",
    marginVertical: 10,
    borderRadius: 20,
  },
});

export default TipsList;

{
  /* <Text>{data.description} </Text> */
}

{
  /* const var={data.description} */
}
