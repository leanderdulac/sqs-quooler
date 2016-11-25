/// <reference types="node" />
import { SQS } from 'aws-sdk';
import { EventEmitter } from 'events';
export interface QueueOptions {
    sqs: SQS;
    endpoint: string;
    concurrency?: number;
}
export interface ProcessOptions {
    oneShot?: boolean;
}
export declare class Queue<TItem> extends EventEmitter {
    private options;
    private running;
    private stopped;
    constructor(options: QueueOptions);
    push(item: TItem): Promise<void>;
    startProcessing(handler: (item: TItem) => any | PromiseLike<any>, options?: ProcessOptions): PromiseLike<void>;
    stopProcessing(): PromiseLike<void>;
}
