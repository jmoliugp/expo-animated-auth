import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import App from './App'

describe('Auth flows', () => {
  describe('Sign In', () => {
    it('boots the app within the sign-in scene', () => {
      const title = 'Sign In'
      const { getAllByText } = render(<App />)

      expect(getAllByText(title)).toBeTruthy()
    })

    it('allows me to perform a sign-in using my credentials', async () => {
      const { getByPlaceholderText, getByRole, findByText } = render(<App />)
      const emailInputPlaceholder = 'Email'
      const passwordInputPlaceholder = 'Password'
      const signInButtonText = 'Sign In'
      const snackBarMessage = 'Sign In Action'

      const emailInput = getByPlaceholderText(emailInputPlaceholder)
      const passwordInput = getByPlaceholderText(passwordInputPlaceholder)

      const signInButton = getByRole('button', { name: signInButtonText })

      expect(emailInput).toBeTruthy()
      expect(passwordInput).toBeTruthy()
      expect(signInButton).toBeDefined()

      if (!signInButton) throw new Error('Sign In button not found')

      fireEvent.changeText(emailInput, 'user@example.com')
      fireEvent.changeText(passwordInput, 'password123')
      fireEvent.press(signInButton)

      const snackBarText = await findByText(snackBarMessage)
      const snackBarContainer = snackBarText.parent?.parent?.parent?.parent

      expect(snackBarText).toBeTruthy()
      expect(snackBarContainer).toHaveStyle({
        left: 0,
        right: 0,
        position: 'absolute',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      })
    })

    it('navigates to Sign-Up scene when "Don\'t have an account?" button is tapped', async () => {
      const { findByText, getByTestId } = render(<App />)
      const signUpText = 'Sign Up'
      const signUpTitleTestId = 'title'

      const signUpButton = await findByText(signUpText)
      fireEvent.press(signUpButton)

      const signUpTitle = getByTestId(signUpTitleTestId)
      expect(signUpTitle.props?.children).toBe(signUpText)
    })
  })
})
