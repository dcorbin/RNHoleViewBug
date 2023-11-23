/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RNHole, RNHoleView} from 'react-native-hole-view';

interface SampleTextProps {
  text: string;
}
function SampleText({text}: SampleTextProps) {
  return (
    <Text
      style={[{fontSize: 50, textAlign: 'center', width: '100%', height: 100}]}>
      {text}
    </Text>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const screen = useWindowDimensions();
  const [step, setStep] = useState(0);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let holes: RNHole[][] = [
    [{x: 10, y: 10, width: 100, height: 100}],
    [{x: 110, y: 110, width: 100, height: 100}],
    [],
  ];
  return (
    <SafeAreaView style={backgroundStyle}>
      <RNHoleView
        holes={holes[step]}
        style={[
          {
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            width: screen.width,
            height: screen.height / 2,
            opacity: 0.7,
          },
        ]}
      />
      <SampleText text="Alpha" />
      <SampleText text="Beta" />
      <SampleText text="Gamma" />
      <SampleText text="Delta" />
      <SampleText text={`Current Step: ${step}`} />
      <View style={[{height: 100, width: '50%'}]}>
        <Button
          color="green"
          title={'Advance Step'}
          onPress={() => {
            let nextStep = step + 1;
            if (step + 1 > holes.length) {
              nextStep = 0;
            }

            setStep(nextStep);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
