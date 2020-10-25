import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'One Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Two Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Three Item',
  },

  {
    id: '58694a0f-3da1-471f-bd96-1451e29d71',
    title: 'Four Item',
  },
];

/*
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
*/

const Item = ({ item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const FlatListComponent = () => {

  const [selectedId, setSelectedId] = useState(null);


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#0e918c" : "#d7385e"
  

    return (
      <Item 
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        //horizontal={false}
        //numColumns={1}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    color: '#FFF',
  },
});

export default FlatListComponent;