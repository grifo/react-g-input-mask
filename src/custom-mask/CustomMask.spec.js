import { render, fireEvent } from '@testing-library/react'
import { customMask } from './CustomMask.stories'

describe('CustomMask', () => {
  it('Should format field after type', () => {
    const { getByTestId } = render(
      customMask(null, {
        mask: '9-A-*'
      })
    )
    const input = getByTestId('input')

    fireEvent.change(input, {
      target: {
        value: '0X#'
      }
    })

    expect(input.value).toEqual('0-X-#')
  })

  it('Should format field after type with custom placeholder', () => {
    const { getByTestId } = render(
      customMask(null, {
        mask: '99/99/9999',
        placeholderChar: ' '
      })
    )
    const input = getByTestId('input')

    fireEvent.change(input, {
      target: {
        value: '0405198 '
      }
    })

    expect(input.value).toEqual('04/05/198 ')
  })

  it('Should not write wrong char', () => {
    const { getByTestId } = render(
      customMask(null, {
        mask: '99'
      })
    )
    const input = getByTestId('input')

    fireEvent.change(input, {
      target: {
        value: '1X'
      }
    })

    expect(input.value).toEqual('1_')
  })

  it('Should move back the cursor when keyup backspace in the mask char', () => {
    const { getByTestId } = render(
      customMask(null, {
        mask: '99-9'
      })
    )
    const input = getByTestId('input')

    fireEvent.keyUp(input, {
      keyCode: 8,
      target: {
        selectionStart: 3
      }
    })

    // TODO: Fix this test when this js-dom bug is fixed:
    // https://github.com/testing-library/react-testing-library/issues/247
    expect(input.selectionStart).toEqual(0)
  })

  it('Should call callbacks', () => {
    const onChangeMock = jest.fn()
    const onKeyUpMock = jest.fn()
    const { getByTestId } = render(
      customMask(null, {
        mask: '99',
        onChange: onChangeMock,
        onKeyUp: onKeyUpMock
      })
    )
    const input = getByTestId('input')

    fireEvent.change(input, { target: { value: 11 } })
    fireEvent.keyUp(input, {})

    expect(onChangeMock).toBeCalled()
    expect(onKeyUpMock).toBeCalled()
  })
})
