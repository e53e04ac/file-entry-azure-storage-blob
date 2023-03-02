# file-entry-azure-storage-blob

~~~~~ sh
npm install e53e04ac/file-entry-azure-storage-blob
~~~~~

~~~~~ mjs
import { FileEntryAzureStorageBlob } from 'file-entry-azure-storage-blob';
import { FileEntry } from 'file-entry-azure-storage-blob';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["@azure/identity"]);
    B_1(["@azure/storage-blob"]);
    B_2(["base"]);
    B_3(["hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["file-entry"]);
  end;
  subgraph "github";
    C_2(["e53e04ac/base\n54bba636cc8cea36d25c3f8141082c53def71584"]);
    C_3(["e53e04ac/hold\n418996396af94d436211958d5e6cc4acb5aa089d"]);
    C_5(["e53e04ac/file-entry\n604b8be6e60c2a0116ba5bc26939a17584bbcd14"]);
  end;
  subgraph "npmjs";
    C_0(["@azure/identity\n3.1.3"]);
    C_1(["@azure/storage-blob\n12.13.0"]);
    C_4(["@types/node\n18.14.4"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  click C_0 "https://www.npmjs.com/package/@azure/identity/v/3.1.3";
  click C_1 "https://www.npmjs.com/package/@azure/storage-blob/v/12.13.0";
  click C_2 "https://github.com/e53e04ac/base/tree/54bba636cc8cea36d25c3f8141082c53def71584";
  click C_3 "https://github.com/e53e04ac/hold/tree/418996396af94d436211958d5e6cc4acb5aa089d";
  click C_4 "https://www.npmjs.com/package/@types/node/v/18.14.4";
  click C_5 "https://github.com/e53e04ac/file-entry/tree/604b8be6e60c2a0116ba5bc26939a17584bbcd14";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry-azure-storage-blob";
    E_0(["namespace FileEntryAzureStorageBlob"]);
    E_1(["type FileEntryAzureStorageBlob"]);
    E_2(["const FileEntryAzureStorageBlob"]);
    E_3(["const FileEntry"]);
  end;
  M["index.d.ts"]
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
  E_3 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry-azure-storage-blob";
    E_0(["FileEntryAzureStorageBlob"]);
    E_1(["FileEntry"]);
  end;
  M["index.mjs"]
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
