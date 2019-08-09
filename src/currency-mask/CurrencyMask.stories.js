import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import CurrencyMask from './CurrencyMask'

export default { title: 'CurrencyMask' }

export const currencyMask = (story, { locale, currency, onChange, onKeyUp } = {}) => (
  <CurrencyMask
    options={{
      locale: story ? text('Locale', 'en-us') : locale,
      currency: story ? text('Currency', 'USD') : currency
    }}
    inputProps={{
      'data-testid': 'input',
      onChange: story ? action('onChange') : onChange,
      onKeyUp: story ? action('onKeyUp') : onKeyUp
    }}
  />
)
