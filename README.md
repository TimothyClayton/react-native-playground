## ReactiveNative HadTos 
- Below added to `“jest”:` in package.json
```
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  }
```
- For snapshots, need to npm install redux-mock-store --save-dev

### Detox
- Follow the install instructs [here](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md#getting-started)
- Needed to add below to e2e/config.json:

```
  "transform": {
    "^.+\\.js$": "<rootDir>/../node_modules/react-native/jest/preprocessor.js"
  }
```
