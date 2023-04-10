"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressRouterAdapter = void 0;
class ExpressRouterAdapter {
    static adapt(app) {
        return async (req, res) => {
            var _a;
            const useCase = await app.handle(req);
            if (useCase.stream && typeof useCase.stream.file !== 'string') {
                res.setHeader('Content-Type', (_a = useCase.stream.mimeType) !== null && _a !== void 0 ? _a : 'text/plain');
                res.send(useCase.stream.file);
            }
            else {
                res.status(useCase.statusCode).send(useCase.data);
            }
        };
    }
}
exports.ExpressRouterAdapter = ExpressRouterAdapter;
