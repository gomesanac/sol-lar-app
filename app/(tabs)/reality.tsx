import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function RealityScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef(null);

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
      <Camera style={styles.camera} ref={cameraRef}>
        <View style={styles.overlay}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Solar_panels_on_a_roof.jpg',
            }}
            style={styles.panelImage}
            resizeMode="contain"
          />
        </View>
      </Camera>
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
    height: '100%',
    opacity: 0.8,
  },
});
