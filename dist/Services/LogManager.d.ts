export interface LogManager {
    log(key: string, message: string, error?: any): Promise<void>;
}
