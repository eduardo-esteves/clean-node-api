import { HttpRequest, HttpResponse } from '../protocols/http'
import MisssingParamError from '../erros/MissingParamError'
class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MisssingParamError('name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MisssingParamError('email')
      }
    }
  }
}

export default SignUpController