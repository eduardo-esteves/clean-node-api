import { HttpRequest, HttpResponse } from '../protocols/http'
import MisssingParamError from '../erros/MissingParamError'
import { badRequest } from '../helpers/httpHelper'
class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MisssingParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MisssingParamError('email'))
    }
  }
}

export default SignUpController
