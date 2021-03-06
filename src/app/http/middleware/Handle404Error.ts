import { CldResponse, SimpleHandler } from '@/http/RequestHandler'

export default class Handle404Error {
  /**
   * Handle 404 http error.
   */
  public static handler(): SimpleHandler {
    return (req, res): CldResponse => {
      return res.status(404).json({
        err: {
          msg: 'Request not found'
        }
      })
    }
  }
}
