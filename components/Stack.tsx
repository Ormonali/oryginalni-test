import React from 'react';
import { View, ViewStyle, FlexStyle } from 'react-native';

type StackProps = {
  children: React.ReactNode;
  direction?: FlexStyle['flexDirection'];
  spacing?: number;
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  style?: ViewStyle;
};

const Stack: React.FC<StackProps> = ({
  children,
  direction = 'column',
  spacing = 0,
  justifyContent = 'center',
  alignItems = 'center',
  style
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <View style={[{ flexDirection: direction, justifyContent, alignItems }, style]}>
      {childrenArray.map((child, index) => (
        <View
          key={index}
          style={
            index !== childrenArray.length - 1
              ? direction === 'row'
                ? { marginRight: spacing }
                : { marginBottom: spacing }
              : undefined
          }
        >
          {child}
        </View>
      ))}
    </View>
  );
};

export default Stack;
