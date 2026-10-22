/**
 * On iOS, a Switch whose role has no iOS accessibility trait (`none`,
 * `checkbox`) is a switch on mount, but stays a generic element after it has
 * been disabled and enabled again. The Switch with the default role stays a
 * switch throughout.
 *
 * Inspect the three switches with Accessibility Inspector (or
 * `axe describe-ui`), press the button twice, and inspect them again.
 *
 * @format
 */

import { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';

function App() {
  const [disabled, setDisabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Default role</Text>
      <Switch
        testID="role-default"
        value
        disabled={disabled}
        accessibilityState={{ disabled }}
      />
      <Text>accessibilityRole="none"</Text>
      <Switch
        testID="role-none"
        value
        disabled={disabled}
        accessibilityRole="none"
        accessibilityState={{ disabled }}
      />
      <Text>accessibilityRole="checkbox"</Text>
      <Switch
        testID="role-checkbox"
        value
        disabled={disabled}
        accessibilityRole="checkbox"
        accessibilityState={{ disabled }}
      />
      <Button
        testID="toggle"
        title={disabled ? 'Enable switches' : 'Disable switches'}
        onPress={() => setDisabled(d => !d)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 24,
    paddingTop: 80,
  },
});

export default App;
