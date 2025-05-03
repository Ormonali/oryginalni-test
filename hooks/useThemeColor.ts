/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  colorName: keyof typeof Colors
) {
  const theme = useColorScheme() ?? 'light';

  return Colors[colorName];
}
