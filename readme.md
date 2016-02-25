# Spaghetti Emoji

> Simple production-ready boilerplate for [React](http://facebook.github.io/react/) and [Webpack](http://webpack.github.io/) (SASS and React hot reloading) and tests with Jest.

## Install

Clone repository and run:

```sh
$ npm install
```

## Requirements

node 5+

## Development

```sh
$ npm start
```

Go to [http://localhost:3001](http://localhost:3001) and see the magic happen.

## Production

If you want to run the project in production, set the `NODE_ENV` environment variable to `production`.

```sh
$ NODE_ENV=production npm start
```

Also build the production bundle:

```sh
$ npm run dist
```

## Tests

```sh
$ npm test
```

Only run specific tests

```sh
$ npm test -- NotFoundComponent
```

Coverage

```sh
$ npm test -- --coverage
```

## License

MIT © [Søren Brokær](http://srn.io)

[travis]: https://travis-ci.org/srn/react-webpack-boilerplate
[travis-badge]: http://img.shields.io/travis/srn/react-webpack-boilerplate.svg?style=flat-square
[coveralls]: https://coveralls.io/r/srn/react-webpack-boilerplate
[coveralls-badge]: http://img.shields.io/coveralls/srn/react-webpack-boilerplate.svg?style=flat-square
