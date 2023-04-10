export interface CacheManager {
    constructor(config: any): void;
    set(key: string, data: any, options?: any): Promise<void>;
    get(key: string): Promise<any>;
}
