import React from 'react'
import { render } from '@testing-library/react-native'
import App from './App'

const INSTRUCTIONS_TEXT = 'Open up App.tsx to start working on your app!'

describe('<App />', () => {
  it('renders the scene with the proper instructions', () => {
    const { getByText } = render(<App />)

    expect(getByText(INSTRUCTIONS_TEXT)).toBeTruthy()
  })

  it('has a white background', () => {
    const { getByText } = render(<App />)
    const textElement = getByText(INSTRUCTIONS_TEXT)
    const mainView = textElement.parent?.parent

    expect(mainView).toHaveStyle({ backgroundColor: '#fff' })
  })
})
