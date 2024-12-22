import { Readable } from 'stream';
import { AxiosRequestConfig } from 'axios';
export declare const buffertoJson: (buffer: Buffer) => any;
export declare const jsontoBuffer: (json: object) => Buffer;
export declare const transformBuffer: (buffer: Buffer, transformFn: (data: Buffer) => Buffer) => Buffer;
export declare const bufferToFile: (buffer: Buffer, filePath: string) => Promise<void>;
export declare function toBuffer(data: any): Buffer;
export declare const extractUrlFromString: (str: string) => string | "";
export declare const getBufferFromStream: (stream: Readable) => Promise<Buffer>;
export declare const getStreamFromBuffer: (buffer: Buffer) => Readable;
export declare const FileTypeFromUrl: (url: string) => Promise<string | null>;
export declare const FileTypeFromBuffer: (buffer: Buffer) => Promise<string | null>;
export declare const FileTypeFromBlob: (blob: Blob) => Promise<string | null>;
export declare const FileTypeFromStream: (stream: Readable) => Promise<string | null>;
export declare function detectType(content: string | Buffer): Promise<string>;
export declare function getBuffer(url: string, options?: AxiosRequestConfig): Promise<Buffer>;
export declare function getJson(url: string, options?: AxiosRequestConfig): Promise<any>;
export declare function postJson(url: string, data: any, options?: AxiosRequestConfig): Promise<any>;
declare const _default: {
    buffertoJson: (buffer: Buffer) => any;
    jsontoBuffer: (json: object) => Buffer;
    transformBuffer: (buffer: Buffer, transformFn: (data: Buffer) => Buffer) => Buffer;
    bufferToFile: (buffer: Buffer, filePath: string) => Promise<void>;
    toBuffer: typeof toBuffer;
    extractUrlFromString: (str: string) => string | "";
    getBufferFromStream: (stream: Readable) => Promise<Buffer>;
    getStreamFromBuffer: (buffer: Buffer) => Readable;
    FileTypeFromUrl: (url: string) => Promise<string | null>;
    FileTypeFromBuffer: (buffer: Buffer) => Promise<string | null>;
    FileTypeFromBlob: (blob: Blob) => Promise<string | null>;
    FileTypeFromStream: (stream: Readable) => Promise<string | null>;
    detectType: typeof detectType;
    getBuffer: typeof getBuffer;
    getJson: typeof getJson;
    postJson: typeof postJson;
};
export default _default;
