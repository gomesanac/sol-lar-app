import { Keyboard, StyleSheet, TextInput } from 'react-native';

import { AnimatedSun } from '@/components/AnimatedSun';
import PageContainer from '@/components/PageContainer';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui/Button';
import {
  calcularCO2Evitado,
  calcularEconomia,
  calcularGeracaoMensal,
  calcularPayback,
} from '@/utils/calculations';
import { useState } from 'react';

export default function HomeScreen() {
  const [area, setArea] = useState('');
  const [consumo, setConsumo] = useState('');
  const [result, setResult] = useState<null | {
    geracao: number;
    economia: number;
    co2: number;
    payback: number;
  }>(null);

  const simular = () => {
    const areaNum = parseFloat(area);
    const irradiancia = 5; // kWh/m²/dia (valor médio Brasil)
    const eficiencia = 0.18; // 18%
    const tarifa = 0.85; // R$/kWh (valor médio)
    const custoSistema = 8000; // valor estimado

    const geracao = calcularGeracaoMensal(irradiancia, areaNum, eficiencia);
    const economia = calcularEconomia(geracao, tarifa);
    const payback = calcularPayback(custoSistema, economia);
    const co2 = calcularCO2Evitado(geracao);

    setResult({ geracao, economia, payback, co2 });
  }

  const cleanResults = () => {
    setResult(null);
    setArea('');
    setConsumo('');
  }

  return (
    <PageContainer>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo ao SolLar</ThemedText>
        <AnimatedSun />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Use o formulátio abaixo para simular a economia com energia solar.
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="subtitle">Simulador Solar</ThemedText>
      </ThemedView>
      <ThemedView>
        <TextInput
          placeholder="Área disponível (m²)"
          placeholderTextColor="#666"
          style={styles.input}
          keyboardType="numeric"
          value={area}
          onChangeText={setArea}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <TextInput
          placeholder="Consumo mensal (kWh)"
          placeholderTextColor="#666"
          style={styles.input}
          keyboardType="numeric"
          value={consumo}
          onChangeText={setConsumo}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <Button
          title={result ? 'Limpar' : 'Simular'}
          onPress={result ? cleanResults : simular}
          disabled={!area || !consumo || isNaN(parseFloat(area)) || isNaN(parseFloat(consumo))}
        />
      </ThemedView>
      {result && (
        <>
          <ThemedView>
            <ThemedText type="subtitle">Resultados</ThemedText>
          </ThemedView>
          <ThemedView>
            <ThemedText type="defaultSemiBold">
              Geração mensal estimada: {result.geracao.toFixed(2)} kWh
            </ThemedText>
            <ThemedText type="defaultSemiBold">
              Economia estimada: R$ {result.economia.toFixed(2)}
            </ThemedText>
            <ThemedText type="defaultSemiBold">
              Retorno do investimento: {result.payback.toFixed(1)} anos
            </ThemedText>
            <ThemedText type="defaultSemiBold">
              CO₂ evitado por mês: {result.co2.toFixed(2)} kg
            </ThemedText>
          </ThemedView>
        </>
      )}
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
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#000',
    padding: 10,
    marginBottom: 12,
  },
});
