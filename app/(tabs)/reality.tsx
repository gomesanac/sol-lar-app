import { Button } from '@/components/ui/Button';
import { Camera, CameraView } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function RealityScreen() {
  const [painelIndex, setPainelIndex] = useState(0);
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef(null);

  const paineis = [
    require('../../assets/images/solar-panel-1.png'),
    require('../../assets/images/solar-panel-2.png'),
    require('../../assets/images/solar-panel-3.png'),
  ];

  const changePanel = () => {
    setPainelIndex((prev) => (prev + 1) % paineis.length);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View>
        <Text>Solicitando permissão da câmera...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>Sem acesso à câmera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef}>
        <View style={styles.overlay}>
          <Image
            source={paineis[painelIndex]}
            style={styles.panelImage}
            accessibilityLabel={`Painel solar modelo ${painelIndex + 1}`}
            resizeMode='cover'
          />
          <Text style={styles.legend}>Modelo {painelIndex + 1}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Trocar modelo" onPress={changePanel} />
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.5,
    opacity: 0.85,
    resizeMode: 'contain',
  },
  legend: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignItems: 'center',
  },
});
