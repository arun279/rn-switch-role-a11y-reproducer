# Switch accessibility reproducer

![Build](https://github.com/arun279/rn-switch-role-a11y-reproducer/workflows/Pre%20Merge%20Checks/badge.svg)

On iOS, a `Switch` whose role has no iOS accessibility trait (`none`, `checkbox`) is a switch to accessibility on mount. Once its `accessibilityState.disabled` goes from `true` back to `false`, it stays a generic element. A `Switch` with the default role stays a switch throughout.

React Native 0.88.0, New Architecture.

## Steps

1. `cd ReproducerApp && npm install && (cd ios && bundle install && bundle exec pod install)`
2. `npx react-native run-ios`
3. Inspect the three switches with Accessibility Inspector. All three are switches.
4. Press "Disable switches", then "Enable switches".
5. Inspect them again. The `none` and `checkbox` switches are no longer switches; the default one still is.

The app is in [`ReproducerApp/App.tsx`](ReproducerApp/App.tsx).
