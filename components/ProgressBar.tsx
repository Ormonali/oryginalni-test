import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  progress: number; // 0–100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const totalBars = 58;
  const filledBars = Math.round((progress / 100) * totalBars);

  return (
    <View style={styles.barContainer}>
      {Array.from({ length: totalBars }).map((_, index) => {
        const color = getBarColor(index, totalBars);
        const isFilled = index < filledBars;

        return (
          <View
            key={index}
            style={[
              styles.bar,
              {
                backgroundColor: isFilled ? color : applyAlpha(color, 0.1), // 20% opacity
              },
            ]}
          />
        );
      })}
    </View>
  );
};

// Generates a vibrant HSL color from red to blue
const getBarColor = (index: number, total: number): string => {
  const percent = index / total;
  const hue = 0 + percent * 240; // Red (0°) to Blue (240°)
  return `hsl(${hue}, 100%, 50%)`;
};

// Converts HSL to RGBA with given alpha
const applyAlpha = (hsl: string, alpha: number): string => {
  return hsl.replace('hsl', 'hsla').replace(')', `, ${alpha})`);
};

const styles = StyleSheet.create({
  barContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 8,
    marginVertical: 12,
  },
  bar: {
    width: 3,
    height: 26,
    borderRadius: 20,
  },
});

export default ProgressBar;
