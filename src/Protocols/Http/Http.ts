export interface Response {
  statusCode: number
  data?: any
  stream?: {
    mimeType: string
    file: Buffer | string
  }
}

export interface Request {
  body?: any
  params?: any
  query?: any
  headers?: any
  file?: any
}

export class HttpResponse {
  private static statusCode: number = 200
  private static data: any

  /**
   * Define status code with return response
   * @param code Number of http status
   * @returns HttpResponse
   */
  public static status(code: number) {
    HttpResponse.statusCode = code
    return HttpResponse
  }

  /**
   * Mount and send a response data
   * @param data All data has send to client
   * @returns Response
   */
  public static send(data?: any): Response {
    HttpResponse.data = data ?? ""

    return {
      statusCode: HttpResponse.statusCode,
      data: HttpResponse.data ?? "",
    }
  }

  /**
   * Return status 400 with custom message and error
   * @param message Message retuns in data.message
   * @param error if can show error for user
   * @returns Response
   */
  public static badRequest(message: string, error: any): Response {
    return {
      statusCode: 400,
      data: {
        message,
        error,
      },
    }
  }

  /**
   * Return status 500 with custom message and error
   * @param message Message retuns in data.message
   * @param error if can show error for user
   * @returns Response
   */
  public static serverError(message: string, error: any): Response {
    return {
      statusCode: 500,
      data: {
        message,
        error,
      },
    }
  }

  /**
   * Return a stream file in response
   * @param mimeType Type on head of file
   * @param file Buffer from file
   * @returns Response
   */
  public static sendFileStream(mimeType: string, file: Buffer): Response {
    return {
      statusCode: 200,
      stream: {
        mimeType,
        file,
      },
    }
  }
}
