/// <reference types="node" />
export interface Response {
    statusCode: number;
    data?: any;
    stream?: {
        mimeType: string;
        file: Buffer | string;
    };
}
export interface Request {
    body?: any;
    params?: any;
    query?: any;
    headers?: any;
    file?: any;
}
export declare class HttpResponse {
    private static statusCode;
    private static data;
    /**
     * Define status code with return response
     * @param code Number of http status
     * @returns HttpResponse
     */
    static status(code: number): typeof HttpResponse;
    /**
     * Mount and send a response data
     * @param data All data has send to client
     * @returns Response
     */
    static send(data?: any): Response;
    /**
     * Return status 400 with custom message and error
     * @param message Message retuns in data.message
     * @param error if can show error for user
     * @returns Response
     */
    static badRequest(message: string, error: any): Response;
    /**
     * Return status 500 with custom message and error
     * @param message Message retuns in data.message
     * @param error if can show error for user
     * @returns Response
     */
    static serverError(message: string, error: any): Response;
    /**
     * Return a stream file in response
     * @param mimeType Type on head of file
     * @param file Buffer from file
     * @returns Response
     */
    static sendFileStream(mimeType: string, file: Buffer): Response;
}
