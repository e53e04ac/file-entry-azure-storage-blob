/*!
    @e53e04ac/file-entry-azure-storage-blob/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { BlockBlobClient } from '@azure/storage-blob';
import { ContainerClient } from '@azure/storage-blob';

import { Base } from 'base';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace FileEntryAzureStorageBlob {

    type Options = {
        readonly containerClient: ValueOrGet<ContainerClient>;
        readonly path: ValueOrGet<string>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly containerClient: Get<ContainerClient>;
        readonly blobBlobClient: Get<BlockBlobClient>;
    };

    type Self = Base & FileEntry & {
        readonly _FileEntry: Get<_Self>;
        readonly _FileEntryAzureStorageBlob: Get<_Self>;
        readonly copyFile: {
            (destination: FileEntryAzureStorageBlob): Promise<void>;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = {
        readonly fromDefaultCredential: {
            (params: {
                readonly storageAccountName: string;
                readonly containerName: string;
            }): Self;
        };
        readonly fromConnectionString: {
            (params: {
                readonly connectionString: string;
                readonly containerName: string;
            }): Self;
        };
        readonly from: {
            (params: (Parameters<Companion['fromDefaultCredential']>[0])): Self;
            (params: (Parameters<Companion['fromConnectionString']>[0])): Self;
        };
    };

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type FileEntryAzureStorageBlob = FileEntryAzureStorageBlob.Self;

export declare const FileEntryAzureStorageBlob: FileEntryAzureStorageBlob.ConstructorWithCompanion;

export declare const FileEntry: FileEntryAzureStorageBlob.ConstructorWithCompanion;
