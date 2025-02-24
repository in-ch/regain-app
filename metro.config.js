const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const config = {
  resolver: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@assets/images': path.resolve(__dirname, 'src/assets/images'),
      '@assets/icons': path.resolve(__dirname, 'src/assets/icons'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@components/common': path.resolve(__dirname, 'src/components/common'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@navigation': path.resolve(__dirname, 'src/navigation'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@services/api': path.resolve(__dirname, 'src/services/api'),
      '@services/auth': path.resolve(__dirname, 'src/services/auth'),
      '@services/storage': path.resolve(__dirname, 'src/services/storage'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
