import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from './ParallaxScrollView';
import { IconSymbol } from './ui/IconSymbol';

export default function PageContainer({ children }: PropsWithChildren) {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<IconSymbol
            size={310}
            color="#f9b201"
            name="sun.max.fill"
            style={styles.logo}
          />}
    >
      {children}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    color: '#f9b201',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});