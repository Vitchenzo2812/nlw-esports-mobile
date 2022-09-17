import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';
import { styles } from './styles';

interface IimageBackgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: IimageBackgroundProps) {
  return (
    <ImageBackground
      source={backgroundImg} 
      defaultSource={backgroundImg} // Memoriza a imagem padrão, tornando o carregamento mais rápido 
      style={styles.container}
    >
      {children}
    </ ImageBackground>
  );
}