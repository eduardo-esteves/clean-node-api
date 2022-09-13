import SignUpController from './SignUpController'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const sut = new SignUpController()
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
