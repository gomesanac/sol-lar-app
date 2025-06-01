import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';

export function AnimatedSun() {
  const rotationAnimation = useSharedValue(0);

  useEffect(() => {
    rotationAnimation.value = withRepeat(
      withTiming(360, { duration: 8000 }),
      -1,
      false
    );
  }, [rotationAnimation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <ThemedText style={styles.emoji}>☀️</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  emoji: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
