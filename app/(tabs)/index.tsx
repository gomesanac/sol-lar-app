import { StyleSheet } from 'react-native';

import { AnimatedSun } from '@/components/AnimatedSun';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import PageContainer from '@/components/PageContainer';

export default function HomeScreen() {
  return (
    <PageContainer>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo ao SolLar</ThemedText>
        <AnimatedSun />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Use o menu abaixo para simular a economia com energia solar.
        </ThemedText>
      </ThemedView>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    color: '#f9b201',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});
