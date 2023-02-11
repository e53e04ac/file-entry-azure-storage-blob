# file-entry-azure-storage-blob

~~~~~ sh
npm install e53e04ac/file-entry-azure-storage-blob
~~~~~

~~~~~ mjs
import { type FileEntryAzureStorageBlob } from 'e53e04ac/file-entry-azure-storage-blob';
import { const FileEntryAzureStorageBlob } from 'e53e04ac/file-entry-azure-storage-blob';
import { const FileEntry } from 'e53e04ac/file-entry-azure-storage-blob';
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
  click B_2 "https://github.com/e53e04ac/base/tree/b45c2734e219419ebd59c99b026f593b813ba494";
  click B_3 "https://github.com/e53e04ac/hold/tree/8fc3f6696d1c7ed6d184d90c5e33298cc9228991";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/file-entry/tree/bc4d7803552b302d1ec4baa19065b5efa6f94038";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry-azure-storage-blob";
    E_0(["FileEntryAzureStorageBlob"]);
    E_1(["FileEntry"]);
  end;
  M(["index.mjs"])
  subgraph "@azure/identity";
    I_0_0(["DefaultAzureCredential"]);
  end;
  subgraph "@azure/storage-blob";
    I_1_0(["BlobServiceClient"]);
  end;
  subgraph "node:path";
    I_2_0(["parse"]);
    I_2_1(["relative"]);
    I_2_2(["resolve"]);
  end;
  subgraph "base";
    I_3_0(["Base"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
    I_4_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  M ----> I_2_2;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_4_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry-azure-storage-blob";
    E_0(["type FileEntryAzureStorageBlob"]);
    E_1(["const FileEntryAzureStorageBlob"]);
    E_2(["const FileEntry"]);
  end;
  M(["index.d.ts"])
  subgraph "@azure/storage-blob";
    I_0_0(["BlockBlobClient"]);
    I_0_1(["ContainerClient"]);
  end;
  subgraph "base";
    I_1_0(["Base"]);
  end;
  subgraph "file-entry";
    I_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_3_0(["Get"]);
    I_3_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
