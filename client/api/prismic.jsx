import { Prismic } from 'prismic.io'
import emitter from '../emitters/default'

const endpoint = 'https://district.cdn.prismic.io/api'
const CMS = Prismic.api(endpoint)
const cursor = Prismic.Predicates

class API {

  getState() {
    return this.state
  }

  setState(obj) {
    this.state = obj
  }

  query(key, value) {
    let data = CMS.then((api) => {
      return api.query(cursor.at(key, value))
    }).then((response) => {
      return response
    })

    return data
  }
}

export default API
