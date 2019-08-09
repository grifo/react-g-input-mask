import { render, fireEvent } from '@testing-library/react'
import { currencyMask } from './CurrencyMask.stories'
import { reducer } from './CurrencyMask'

describe('CurrencyMask', () => {
  it('Should format field after type', () => {
    const { getByTestId } = render(
      currencyMask(null, {
        locale: 'en-us',
        currency: 'USD'
      })
    )
    const input = getByTestId('input')

    fireEvent.change(input, {
      target: {
        value: '1000'
      }
    })
    expect(input.value).toEqual('$10.00')

    fireEvent.change(input, {
      target: {
        value: '$10.000'
      }
    })
    expect(input.value).toEqual('$100.00')

    fireEvent.change(input, {
      target: {
        value: '$ 100.00'
      }
    })
    expect(input.value).toEqual('$100.00')
  })

  it('Should select decionals on press "," (code 188) or "." (code 190)', () => {
    const { getByTestId } = render(
      currencyMask(null, {
        locale: 'en-us',
        currency: 'USD'
      })
    )
    const input = getByTestId('input')

    // TODO: Improve this test when this bug is fixed: https://github.com/testing-library/react-testing-library/issues/247
    input.setSelectionRange = jest.fn()

    fireEvent.change(input, { target: { value: 1000 } })
    fireEvent.keyUp(input, {
      keyCode: 190
    })

    expect(input.setSelectionRange).toBeCalledWith(4, 6)
  })

  it('Should call callbacks', () => {
    const onChangeMock = jest.fn()
    const onKeyUpMock = jest.fn()
    const { getByTestId } = render(
      currencyMask(null, {
        locale: 'en-us',
        currency: 'USD',
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

  it('Should throw error when reducer type is not found', () => {
    expect(() => { reducer({}, { type: 'unknown' }) }).toThrow()
  })
})
