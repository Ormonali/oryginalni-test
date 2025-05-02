// components/IconButton.tsx
import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

type IconButtonProps = {
  onPress: () => void;
  Icon: FC<SvgProps>;
  size?: number;
};

const IconButton: React.FC<IconButtonProps> = ({ onPress, Icon, size = 24 }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Icon width={size} height={size} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});

export default IconButton;
