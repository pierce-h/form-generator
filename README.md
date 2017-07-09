# Document viewer

This Form Generator is Web *SPA* based on:
* React
* Redux
* Webpack
* Express

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently and are easy to test. It's really tiny and really helps to build apps with simple time state travel.

## FEATURES:

* Has two main routes: Edit and Preview
* While edit is active, user can interactively edit main attribute of each control
* User can remove each control, move up/down in list, remove all controls together
* User can use default generated form by clicking Default Form button. After that it's possible to manipulate with it as user needs
* After all manipulations user can go to Preview page to see the result in view of generated form
* By default edit page will be opened
* Actions and Reducers are covered with unit tests

## URL FORMAT:

``` javascript
  /custom-form/edit
  /custom-form/preview
```

## WEAK PLACES

* Needs reducer splitting into couple easy readable chunks
* Color management of this application needs precise structuring (no color vars at all for now)
* Move some string literals to variables to be more consistent through the code
* Needs additional code style review
* Default Form applying implemented simply through the button, could be convenient to move it into separate section with choose posibility over the couple variations
* No initial data fetch at start (further improvement)
* No save results implementation
* Components should be covered with unit tests as well

## Quick start:

Before installing project, please pay attention - package dependencies are managed by [Yarn package tool](https://yarnpkg.com/lang/en/docs/install/). This tool is handy and much better than trivial npm dependency resolver.

```
  yarn install

```
And finally to run the app
```
  npm run start
```

To run the tests for actions and reducers
```
  npm run test
```
