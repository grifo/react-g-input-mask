import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const patterns = {
  9: /\d/,
  A: /[A-Za-z]/,
  '*': /./
}

const CustomMask = ({ mask, placeholderChar, inputProps, as }) => {
  const ref = useRef()
  const [value, setValue] = useState('')
  const [sepChars, setSepChars] = useState([])
  const [patternsArray, setPatternsArray] = useState([])
  const [cursorPosition, setCursorPosition] = useState(0)

  useEffect(() => {
    const patternsArray = mask
      .split('')
      .map(char =>
        Object.keys(patterns).includes(char) ? patterns[char] : char
      )
    setPatternsArray(patternsArray)

    setSepChars(patternsArray.filter(i => typeof i === 'string'))
  }, [mask])

  useEffect(() => {
    ref.current.setSelectionRange(cursorPosition, cursorPosition)
  }, [value, cursorPosition])

  const removeMask = inputValue =>
    inputValue
      .split('')
      .filter(char => !sepChars.includes(char))
      .join('')

  const addMask = inputValue => {
    let valueIndex = 0
    return patternsArray
      .map(p => {
        if (typeof p === 'string') {
          return p
        }

        const char = inputValue[valueIndex]
        valueIndex = valueIndex + 1
        if (char && p.test(char)) {
          return char
        }
        return placeholderChar
      })
      .join('')
  }

  const handleChange = (e) => {
    const { target } = e
    setValue(addMask(removeMask(target.value)))

    const cursorOffset =
      typeof patternsArray[target.selectionStart] === 'string' ? 1 : 0
    setCursorPosition(target.selectionStart + cursorOffset)

    if (inputProps.onChange) {
      inputProps.onChange(e)
    }
  }

  const handleKeyUp = (e) => {
    const { keyCode, target } = e

    // Backspace
    if (keyCode === 8) {
      const pos = target.selectionStart - 1
      if (typeof patternsArray[pos] === 'string') {
        setCursorPosition(pos)
      }
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
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      value={value}
    />
  )
}

CustomMask.propTypes = {
  mask: PropTypes.string.isRequired,
  placeholderChar: PropTypes.string,
  inputProps: PropTypes.shape({
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func
  }),
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ])
}

CustomMask.defaultProps = {
  placeholderChar: '_',
  inputProps: {},
  as: 'input'
}

export default CustomMask
