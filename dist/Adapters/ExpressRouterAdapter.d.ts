import { Controller } from "../Protocols/Http";
export declare class ExpressRouterAdapter {
    static adapt(app: Controller): (req: any, res: any) => Promise<void>;
}
