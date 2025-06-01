import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import PageContainer from '@/components/PageContainer';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AboutScreen() {
  return (
    <PageContainer>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre o Projeto</ThemedText>
      </ThemedView>
      <ThemedText>
        O SolLar é um simulador educacional de energia solar residencial que
        permite estimar geração, economia e impacto ambiental.
      </ThemedText>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Vantagens</ThemedText>
      </ThemedView>
      <Collapsible title="Economia na conta de luz">
        <ThemedText>
          A energia solar permite uma redução significativa nos gastos com
          eletricidade, especialmente em regiões com alta incidência solar. Em
          muitos casos, é possível zerar a fatura mensal.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Fonte de energia limpa e renovável">
        <ThemedText>
          Ao contrário de fontes fósseis, a energia solar não polui e não emite
          gases de efeito estufa, contribuindo diretamente para a preservação do
          meio ambiente.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Valorização do imóvel">
        <ThemedText>
          Imóveis com sistemas fotovoltaicos instalados tendem a se valorizar no
          mercado, tornando-se mais atrativos para compradores conscientes e
          sustentáveis.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Baixa manutenção">
        <ThemedText>
          Os sistemas solares exigem pouca manutenção, com vida útil média de 25
          anos. A limpeza dos painéis a cada 6 meses já garante bom desempenho.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Independência energética">
        <ThemedText>
          Com energia solar, o consumidor passa a depender menos das
          concessionárias e das variações de tarifa, ganhando mais autonomia e
          previsibilidade de gastos.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Incentivos e financiamentos">
        <ThemedText>
          Diversas instituições oferecem linhas de crédito e programas de
          incentivo para quem deseja instalar sistemas solares, facilitando o
          investimento.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Aplicável em todo o Brasil">
        <ThemedText>
          Graças à alta incidência solar no território nacional, a energia solar
          é viável em praticamente todas as regiões do país.
        </ThemedText>
      </Collapsible>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#f9b201',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
