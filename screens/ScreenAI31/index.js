import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
const videos = [{
  id: '1',
  title: 'Motivation Video 1',
  thumbnail: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  title: 'Motivation Video 2',
  thumbnail: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  title: 'Motivation Video 3',
  thumbnail: 'https://tinyurl.com/42evm3m3'
}, {
  id: '4',
  title: 'Motivation Video 4',
  thumbnail: 'https://tinyurl.com/42evm3m3'
}, {
  id: '5',
  title: 'Motivation Video 5',
  thumbnail: 'https://tinyurl.com/42evm3m3'
}];

const MotivationScreen = ({
  navigation
}) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = video => {
    setSelectedVideo(video);
    navigation.navigate('VideoPlayer', {
      video
    });
  };

  const renderVideoItem = ({
    item
  }) => <TouchableOpacity style={styles.videoItem} onPress={() => handleVideoSelect(item)}>
      <Image source={{
      uri: item.thumbnail
    }} style={styles.videoThumbnail} />
      <Text style={styles.videoTitle}>{item.title}</Text>
    </TouchableOpacity>;

  return <View style={styles.container}>
      <FlatList data={videos} renderItem={renderVideoItem} keyExtractor={item => item.id} style={styles.videoList} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoList: {
    width: '100%',
    paddingHorizontal: 20
  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  videoThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default MotivationScreen;