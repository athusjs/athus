"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
class HttpResponse {
    /**
     * Define status code with return response
     * @param code Number of http status
     * @returns HttpResponse
     */
    static status(code) {
        HttpResponse.statusCode = code;
        return HttpResponse;
    }
    /**
     * Mount and send a response data
     * @param data All data has send to client
     * @returns Response
     */
    static send(data) {
        var _a;
        HttpResponse.data = data !== null && data !== void 0 ? data : "";
        return {
            statusCode: HttpResponse.statusCode,
            data: (_a = HttpResponse.data) !== null && _a !== void 0 ? _a : "",
        };
    }
    /**
     * Return status 400 with custom message and error
     * @param message Message retuns in data.message
     * @param error if can show error for user
     * @returns Response
     */
    static badRequest(message, error) {
        return {
            statusCode: 400,
            data: {
                message,
                error,
            },
        };
    }
    /**
     * Return status 500 with custom message and error
     * @param message Message retuns in data.message
     * @param error if can show error for user
     * @returns Response
     */
    static serverError(message, error) {
        return {
            statusCode: 500,
            data: {
                message,
                error,
            },
        };
    }
    /**
     * Return a stream file in response
     * @param mimeType Type on head of file
     * @param file Buffer from file
     * @returns Response
     */
    static sendFileStream(mimeType, file) {
        return {
            statusCode: 200,
            stream: {
                mimeType,
                file,
            },
        };
    }
}
HttpResponse.statusCode = 200;
exports.HttpResponse = HttpResponse;
