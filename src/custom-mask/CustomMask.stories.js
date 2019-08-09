import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import CustomMask from './CustomMask'

export default { title: 'CustomMask' }

export const customMask = (info, mask, placeholderChar, onChange) => (
  <CustomMask
    mask={mask || text('Mask', '99/99/9999')}
    placeholderChar={placeholderChar || text('Placeholder char', '_')}
    inputProps={{
      onChange: onChange || action('onChange')
    }}
  />
)
