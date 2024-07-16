/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export function useThemeColor(props, colorName) {
  const theme = useColorScheme() || 'light';
  const colorFromProps = props[theme];

  return colorFromProps || Colors[theme][colorName];
}
