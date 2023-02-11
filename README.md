# file-entry-azure-storage-blob

~~~~~ sh
npm install e53e04ac/file-entry-azure-storage-blob
~~~~~

~~~~~ mjs
import { FileEntryAzureStorageBlob } from 'e53e04ac/file-entry-azure-storage-blob';
import { FileEntry } from 'e53e04ac/file-entry-azure-storage-blob';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["@azure/identity"]);
    B_1(["@azure/storage-blob"]);
    B_2(["e53e04ac/base"]);
    B_3(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["e53e04ac/file-entry"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  click B_0 "https://www.npmjs.org/package/@azure/identity/v/3.1.3";
  click B_1 "https://www.npmjs.org/package/@azure/storage-blob/v/12.12.0";
  click B_2 "https://github.com/e53e04ac/base/tree/2dc903faf7859d755dd52f7fde706be5170b9a6f";
  click B_3 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/file-entry/tree/54166105381939e5a1c4dee0af1f44705e5f44bc";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "@azure/identity";
    B_0_0(["DefaultAzureCredential"]);
  end;
  subgraph "@azure/storage-blob";
    B_1_0(["BlobServiceClient"]);
  end;
  subgraph "node:path";
    B_2_0(["parse"]);
    B_2_1(["relative"]);
    B_2_2(["resolve"]);
  end;
  subgraph "base";
    B_3_0(["Base"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
    B_4_1(["unwrap"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_2_1 ----> A;
  B_2_2 ----> A;
  B_3_0 ----> A;
  B_4_0 ----> A;
  B_4_1 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "@azure/storage-blob";
    B_0_0(["BlockBlobClient"]);
    B_0_1(["ContainerClient"]);
  end;
  subgraph "base";
    B_1_0(["Base"]);
  end;
  subgraph "file-entry";
    B_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_3_0(["Get"]);
    B_3_1(["ValueOrGet"]);
  end;
  B_0_0 ----> A;
  B_0_1 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_3_1 ----> A;
~~~~~
