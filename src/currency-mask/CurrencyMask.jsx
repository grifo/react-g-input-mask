import React, { useEffect, useReducer, useRef } from 'react'
import PropTypes from 'prop-types'

const initialState = (defaultValue) => ({
  value: defaultValue,
  formatting: false,
  cursorPosition: 0
})

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_VALUE':
      return {
        ...state,
        formatting: false,
        value: action.value
      }
    case 'FORMAT_VALUE':
      return {
        ...state,
        formatting: true,
        value: action.value,
        cursorPosition: action.cursorPosition
      }
    default:
      throw new Error()
  }
}

const getOffset = (prevValue, formattedValue) => {
  if (prevValue.length === formattedValue.length) return 0
  return prevValue.length < formattedValue.length ? 1 : -1
}

const formatCurrency = (value, { locale, currency }) => {
  const number = value.replace(/\D/g, '').replace(/.{2}$/, '.$&')
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(number)
}

const CurrencyMask = ({ options, defaultValue, inputProps, as }) => {
  const ref = useRef()
  const [state, dispatch] = useReducer(reducer, initialState(defaultValue))
  const { value, formatting, cursorPosition } = state

  useEffect(() => {
    const formattedValue = formatCurrency(value, options)

    if (value !== formattedValue) {
      dispatch({
        type: 'FORMAT_VALUE',
        value: formattedValue,
        cursorPosition: Math.max(
          formattedValue.search(/\d/) + 1,
          ref.current.selectionStart + getOffset(value, formattedValue)
        )
      })
    }
  }, [options, value])

  useEffect(() => {
    if (formatting) {
      ref.current.setSelectionRange(cursorPosition, cursorPosition)
    }
  }, [formatting, cursorPosition])

  const handleChange = e => {
    dispatch({
      type: 'INPUT_VALUE',
      value: e.target.value
    })

    if (inputProps.onChange) {
      inputProps.onChange(e)
    }
  }

  const handleKeyUp = (e) => {
    const { keyCode } = e
    // , or .
    if (keyCode === 188 || keyCode === 190) {
      const index = value.lastIndexOf(value.match(/\d+/g).slice(-1)[0])
      ref.current.setSelectionRange(index, index + 2)
    }

    if (inputProps.onKeyUp) {
      inputProps.onKeyUp(e)
    }
  }

  const InputWrapper = as

  return (
    <InputWrapper
      {...inputProps}
      ref={ref}
      type="text"
      value={value}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
    />
  )
}

CurrencyMask.propTypes = {
  options: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }).isRequired,
  defaultValue: PropTypes.string, // TODO: Improve defaultProp code
  inputProps: PropTypes.shape({
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func
  }),
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ])
}

CurrencyMask.defaultProps = {
  defaultValue: '',
  inputProps: {},
  as: 'input'
}

export default CurrencyMask
