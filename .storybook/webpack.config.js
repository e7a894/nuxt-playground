const path = require('path')
const rootPath = path.resolve(__dirname, '../src/')

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: ['postcss-loader'],
    },
    {
      test: /\.s?css$/,
      use: [
        'vue-style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.vue$/,
      loader: 'storybook-addon-vue-info/loader',
      enforce: 'post'
    }
  )
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}