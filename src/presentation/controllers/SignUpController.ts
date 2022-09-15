import { HttpRequest, HttpResponse } from '../protocols/http'
import MisssingParamError from '../erros/MissingParamError'
import { badRequest } from '../helpers/httpHelper'
class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MisssingParamError(field))
      }
    }
  }
}

export default SignUpController
