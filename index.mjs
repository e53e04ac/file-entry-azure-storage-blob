/*!
    @e53e04ac/file-entry-azure-storage-blob/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { DefaultAzureCredential } from '@azure/identity';
import { BlobServiceClient } from '@azure/storage-blob';

import { parse as pathParse } from 'node:path';
import { relative as pathRelative } from 'node:path';
import { resolve as pathResolve } from 'node:path';

import { Base } from 'base';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').FileEntryAzureStorageBlob.Constructor} */
const constructor = ((options) => {

    const _options = ({
        containerClient: hold(() => {
            return unwrap(options.containerClient);
        }),
        path: hold(() => {
            return unwrap(options.path);
        }),
    });

    /** @type {import('.').FileEntryAzureStorageBlob._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        containerClient: (() => {
            return _options.containerClient();
        }),
        blobBlobClient: hold(() => {
            return _self.containerClient().getBlockBlobClient(self.path());
        }),
    });

    /** @type {import('.').FileEntryAzureStorageBlob.Self} */
    const self = ({
        ...Base({}),
        _FileEntry: (() => {
            return _self;
        }),
        _FileEntryAzureStorageBlob: (() => {
            return _self;
        }),
        path: (() => {
            return _options.path();
        }),
        parsedPath: hold(() => {
            return pathParse(self.path());
        }),
        root: (() => {
            return self.parsedPath().root;
        }),
        dir: (() => {
            return self.parsedPath().dir;
        }),
        base: (() => {
            return self.parsedPath().base;
        }),
        ext: (() => {
            return self.parsedPath().ext;
        }),
        name: (() => {
            return self.parsedPath().name;
        }),
        parent: hold(() => {
            return constructor({ containerClient: _self.containerClient(), path: self.dir() });
        }),
        resolve: ((...paths) => {
            const resolvedPath = pathRelative('', pathResolve(self.path(), ...paths));
            if (
                resolvedPath == '.' ||
                resolvedPath == '..' ||
                resolvedPath.startsWith('./') ||
                resolvedPath.startsWith('../')
            ) {
                throw new Error(`Invalid Path: "${resolvedPath}"`);
            }
            return constructor({ containerClient: _self.containerClient(), path: resolvedPath });
        }),
        relative: ((destination) => {
            return pathRelative(self.path(), destination.path());
        }),
        children: (async function* (params) {
            throw new Error('Unsupported');
        }),
        directories: (async function* (params) {
            throw new Error('Unsupported');
        }),
        files: (async function* (params) {
            throw new Error('Unsupported');
        }),
        childrenSync: (function* (params) {
            throw new Error('Unsupported');
        }),
        directoriesSync: (function* (params) {
            throw new Error('Unsupported');
        }),
        filesSync: (function* (params) {
            throw new Error('Unsupported');
        }),
        createDirectory: (async () => {
            //
        }),
        copyDirectory: (async (destination) => {
            throw new Error('Unsupported');
        }),
        deleteDirectory: (async () => {
            throw new Error('Unsupported');
        }),
        exists: (async () => {
            return await _self.blobBlobClient().exists();
        }),
        copyFile: (async (destination) => {
            if ('_FileEntryAzureStorageBlob' in destination) {
                await destination.parent().createDirectory();
                await destination._FileEntryAzureStorageBlob().blobBlobClient().beginCopyFromURL(_self.blobBlobClient().url).then((poller) => {
                    return poller.pollUntilDone();
                });
                return;
            }
            throw new Error('Unsupported');
        }),
        deleteFile: (async () => {
            await _self.blobBlobClient().delete();
        }),
        writeBytes: (async (bytes) => {
            await self.parent().createDirectory();
            await _self.blobBlobClient().uploadData(bytes);
        }),
        writeString: (async (string, options) => {
            await self.writeBytes(Buffer.from(string, options?.encoding ?? 'utf8'));
        }),
        writeLines: (async (lines, options) => {
            await self.writeString(lines.join(options?.lineDelimiter ?? '\r\n'), {
                encoding: options?.encoding,
            });
        }),
        writeJson: (async (json, options) => {
            await self.writeString(JSON.stringify(json, options?.replacer, options?.space), {
                encoding: options?.encoding,
            });
        }),
        readBytes: (async () => {
            return await _self.blobBlobClient().downloadToBuffer();
        }),
        readString: (async (options) => {
            return await self.readBytes().then((bytes) => {
                return bytes.toString(options?.encoding ?? 'utf8');
            });
        }),
        readLines: (async (options) => {
            return await self.readString({ encoding: options?.encoding }).then((string) => {
                return string.split(options?.lineDelimiter ?? '\r\n');
            });
        }),
        readJson: (async (options) => {
            return await self.readString({ encoding: options?.encoding }).then((string) => {
                return JSON.parse(string, options?.reviver);
            });
        }),
        transformString: (async (destination, transform, options) => {
            await self.readString(options?.source).then((input) => {
                return transform(input);
            }).then((output) => {
                return destination.writeString(output, options?.destination);
            });
        }),
        existsSync: (() => {
            throw new Error('Unsupported');
        }),
        createDirectorySync: (() => {
            throw new Error('Unsupported');
        }),
        deleteFileSync: (() => {
            throw new Error('Unsupported');
        }),
        writeBytesSync: ((bytes) => {
            throw new Error('Unsupported');
        }),
        writeStringSync: ((string, options) => {
            throw new Error('Unsupported');
        }),
        writeLinesSync: ((lines, options) => {
            throw new Error('Unsupported');
        }),
        writeJsonSync: ((json, options) => {
            throw new Error('Unsupported');
        }),
        readBytesSync: (() => {
            throw new Error('Unsupported');
        }),
        readStringSync: ((options) => {
            throw new Error('Unsupported');
        }),
        readLinesSync: ((options) => {
            throw new Error('Unsupported');
        }),
        readJsonSync: ((options) => {
            throw new Error('Unsupported');
        }),
        createReadStream: (async () => {
            throw new Error('Unsupported');
        }),
        createWriteStream: (async () => {
            throw new Error('Unsupported');
        }),
        createWriteLineStream: (async (options) => {
            throw new Error('Unsupported');
        }),
    });

    return self;

});

/** @type {import('.').FileEntryAzureStorageBlob.Companion} */
const companion = ({
    fromDefaultCredential: (({ storageAccountName, containerName }) => {
        const url = `https://${storageAccountName}.blob.core.windows.net`;
        const credential = new DefaultAzureCredential();
        const blobServiceClient = new BlobServiceClient(url, credential);
        const containerClient = blobServiceClient.getContainerClient(containerName);
        return constructor({
            containerClient,
            path: '',
        });
    }),
    fromConnectionString: (({ connectionString, containerName }) => {
        const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
        const containerClient = blobServiceClient.getContainerClient(containerName);
        return constructor({
            containerClient,
            path: '',
        });
    }),
    from: ((params) => {
        if ('storageAccountName' in params) {
            return companion.fromDefaultCredential(params);
        }
        if ('connectionString' in params) {
            return companion.fromConnectionString(params);
        }
        throw new Error();
    }),
});

/** @type {import('.').FileEntryAzureStorageBlob.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as FileEntryAzureStorageBlob };
export { constructorWithCompanion as FileEntry };
