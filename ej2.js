import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const TILE = screenWidth / 3;

const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const localImg = require('./images/visualstudio_code-card.png');

// Mezclo local + remotas (opcional)
const POSTS = [localImg, ...images];

export default class App extends Component {
  renderPost = (item, idx) => {
    const source = typeof item === 'string' ? { uri: item } : item;

    return <Image key={idx} source={source} style={styles.post} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Image source={{ uri: images[0] }} style={styles.avatar} />

            <View style={styles.headerRight}>
              <View style={styles.statsRow}>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>20</Text>
                  <Text style={styles.statLabel}>Posts</Text>
                </View>

                <View style={styles.stat}>
                  <Text style={styles.statNumber}>110304</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>

                <View style={styles.stat}>
                  <Text style={styles.statNumber}>1103</Text>
                  <Text style={styles.statLabel}>Following</Text>
                </View>
              </View>

              <TouchableOpacity activeOpacity={0.8} style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Grid */}
          <View style={styles.grid}>{POSTS.map(this.renderPost)}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 18,
    alignItems: 'center',
  },

  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#eee',
  },

  headerRight: {
    flex: 1,
    marginLeft: 16,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  statLabel: {
    marginTop: 2,
    fontSize: 12,
    color: '#666',
  },

  editButton: {
    marginTop: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },

  editButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },

  grid: {
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  post: {
    width: TILE,
    height: TILE,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
    backgroundColor: '#f2f2f2',
  },
});
