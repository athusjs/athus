import { Response, Request } from "./index";
export interface Controller {
    handle(req: Request): Promise<Response>;
}
