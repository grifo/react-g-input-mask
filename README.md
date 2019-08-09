# react-g-input-mask

An input mask for template or currency

[![Build Status](https://travis-ci.org/grifo/react-g-input-mask.svg?branch=master)](https://travis-ci.org/grifo/react-g-input-mask)
[![Coverage Status](https://coveralls.io/repos/github/grifo/react-g-input-mask/badge.svg?branch=master)](https://coveralls.io/github/grifo/react-g-input-mask?branch=master)

## Installation:

```
yarn add react-g-input-mask
```

or

```
npm install --save react-g-input-mask
```

## Live demo:

http://gri.fo/react-g-input-mask/storybook-static

## How to:

### Currency mask

This is a currency mask for input fields. The currency is masked using the `Intl.NumberFormat` in the backstage.

```js
import { CurrencyMask } from 'react-g-input-mask'

const MyComponent = () => (
  <CurrencyMask
    options={{
      locale: 'en-us',
      currency: 'USD'
    }}
    inputProps={{
      className: 'my-css-class'
    }}
  />
)
```

#### Props:

| Option | Default | Description |
| - | - | - |
| **options.locale** (required) | - | The locale to format. For the general form and interpretation of the `locales` argument, see the [Intl page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation) |
| **options.currency** (required) | - | The currency to format. Check the [current currency & funds code list](https://www.currency-iso.org/en/home/tables/table-a1.html) |
| **defaultValue** | `""` | The input default value |
| **inputProps** | `{}` | If you want to send props to input, you should pass in this object |
| **as** | `"input"` | If you want to render another element/component instead the `input`, you can use the `as` prop |

You can have problems with numbers bigger than `Number.MAX_SAFE_INTEGER` (you can check this constant logging it in your browser dev tools)


### Custom mask

```js
import { CustomMask } from 'react-g-input-mask'

const MyComponent = () => (
  <CustomMask
    mask="99/99/9999"
    inputProps={{
      className: 'my-css-class'
    }}
  />
)
```


#### Props:

| Option | Default | Description |
| - | - | - |
| **mask** (required) | - | The custom mask (See below) |
| **placeholderChar** | `"_"`| If you want to use a custom placeholder, pass the char in this prop |
| **defaultValue** | `""` | The input default value |
| **inputProps** | `{}` | If you want to send props to input, you should pass in this object |
| **as** | `"input"` | If you want to render another element/component instead the `input`, you can use the `as` prop |

To create your mask, you should compose a string with the static chars and the custom validation chars (eg: `"999-99/A"`):

| Mask | Description |
| - | - |
| **9** | Represents the numbers: `/\d/` |
| **A** | Represents the alphabetic characters `/[A-Za-z]/` |
| **\*** | Any char `/./` |
