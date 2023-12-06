import http from '../http-common'

class CalculatorDataService {
  getAll() {
    return http.get('/calculations')
  }

  getById(id) {
    return http.get(`/calculation/${id}`)
  }

  getResult(fn, sn, oper, system) {
    return http.get(`/result/${fn}&${sn}&${oper}&${system}`)
  }

  create(data) {
    return http.post('/calculation', data)
  }
}

export default new CalculatorDataService()