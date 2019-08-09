import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import CurrencyMask from './CurrencyMask'

export default { title: 'CurrencyMask' }

export const currencyMask = (info, locale, currency, onChange) => (
  <CurrencyMask
    options={{
      locale: locale || text('Locale', 'en-us'),
      currency: currency || text('Currency', 'USD')
    }}
    inputProps={{
      onChange: onChange || action('onChange')
    }}
  />
)
