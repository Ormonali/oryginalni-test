import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface AssistantCardProps {
  title?: string;
  name: string;
  phone: string;
  email: string;
  avatarUrl: string;
}

const AssistantCard: React.FC<AssistantCardProps> = ({ title = "Twój dedykowany opiekun:", name, phone, email, avatarUrl }) => {
  return (
    <View style={styles.rowBlock}>
      <Text style={styles.blockTitle}>{title}</Text>
      <View style={styles.assistantRow}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <View>
          <Text style={styles.label}>{name}</Text>
          <Text style={styles.value}>{phone}</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.iconGroup}>
          <Icon name="phone" size={20} color="#6C78E6" style={styles.iconBtn} />
          <Icon name="mail" size={20} color="#6C78E6" style={styles.iconBtn} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowBlock: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 12,
    marginTop: 16,
  },
  blockTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#222",
    marginBottom: 8,
  },
  assistantRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "grey",
  },
  label: {
    color: "#555",
    fontSize: 13,
    marginBottom: 3,
  },
  value: {
    color: "#000",
    fontSize: 13,
  },
  iconGroup: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: 12,
  },
  iconBtn: {
    backgroundColor: "#F0F0F8",
    padding: 8,
    borderRadius: 20,
  },
});

export default AssistantCard;
