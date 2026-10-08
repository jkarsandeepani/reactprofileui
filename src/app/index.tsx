import { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.container}>
        {/* Avatar */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Image
             source={require('../../assets/images/profile.jpg')}
             style={styles.avatar}
             />
            <View style={styles.badge}>
              <Ionicons name="checkmark" size={22} color="#00e600" />
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Rideeka Wijegunasekar</Text>

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={20} color="#000" />
          <Text style={styles.rowText}>rideeka2@gmail.com</Text>
        </View>

        {/* Points */}
        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={20} color="#000" />
          <Text style={styles.rowText}>{points}</Text>
        </View>

        {/* Floating + button */}
        <Pressable style={styles.fab} onPress={() => setPoints(points + 1)}>
          <Ionicons name="add" size={28} color="#fff" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#000' },
  header: { backgroundColor: '#000', paddingVertical: 14, alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 16 },
  avatarWrapper: { alignItems: 'center', marginTop: 12 },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  badge: { position: 'absolute', right: 8, bottom: 8 },
  divider: { height: 2, backgroundColor: '#000', marginVertical: 12 },
  label: { fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 6 },
  value: { fontSize: 18 },
  row: { flexDirection: 'row', alignItems: 'center' },
  rowText: { fontSize: 18, marginLeft: 10 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});