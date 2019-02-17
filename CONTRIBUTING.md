# CONTRIBUTING

## Build

To create distribution file (both ES module and UMD)

```bash
npm run build
```

## Documentation

To create and read the documentation of latest version

```bash
npm run doc:open
```

## Lint

To run Lint validator (ESlint):

```bash
npm run lint
```

## Try the library

To test manually the library, run a development server:

```bash
npm run start
```

It serves files from *example/* folder.

## Test

To run test suites in *single run* mode:

```bash
npm run test
```

To run test suites in *watch* mode:

```bash
npm run test:watch
```

To open coverage files on the browser:

```bash
npm run test:open
```

## Create and publish a new version

To create a new version:

1. update **CHANGELOG** file

2. create a new version

```bash
npm version [<newversion> | major | minor | patch]
# example: npm version minor
```

3. publish new version

```bash
npm publish
```