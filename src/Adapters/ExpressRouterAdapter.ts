import { Controller } from "../Protocols/Http"

export class ExpressRouterAdapter {
  static adapt(app: Controller) {
    return async (req: any, res: any) => {
      const useCase = await app.handle(req)
      if (useCase.stream && typeof useCase.stream.file !== "string") {
        res.setHeader("Content-Type", useCase.stream.mimeType ?? "text/plain")
        res.send(useCase.stream.file)
      } else {
        res.status(useCase.statusCode).send(useCase.data)
      }
    }
  }
}
