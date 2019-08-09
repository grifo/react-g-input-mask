import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import CustomMask from './CustomMask'

export default { title: 'CustomMask' }

export const customMask = (story, { mask, placeholderChar, onChange, onKeyUp } = {}) => (
  <CustomMask
    mask={story ? text('Mask', '99/99/9999') : mask}
    placeholderChar={story ? text('Placeholder char', '_') : placeholderChar}
    inputProps={{
      'data-testid': 'input',
      onChange: story ? action('onChange') : onChange,
      onKeyUp: story ? action('onKeyUp') : onKeyUp
    }}
  />
)
