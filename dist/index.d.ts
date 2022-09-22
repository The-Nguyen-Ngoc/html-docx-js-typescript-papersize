/// <reference types="node" />
import { DocumentOptions } from './internal';
export declare function asBlob(html: string, options?: Partial<DocumentOptions>): Promise<Blob | Buffer>;
