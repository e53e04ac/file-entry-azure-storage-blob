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
  A(["e53e04ac/file-entry-azure-storage-blob"]);
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
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  click B_0 "https://www.npmjs.org/package/@azure/identity/v/3.1.3";
  click B_1 "https://www.npmjs.org/package/@azure/storage-blob/v/12.12.0";
  click B_2 "https://github.com/e53e04ac/base/tree/b4e091dbfeba0ea30c870ac7ac7877582e3fd4f0";
  click B_3 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/file-entry/tree/923119d07163b8f91b6138367a04760041225a06";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/file-entry-azure-storage-blob"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "@azure/identity"
    D0(["DefaultAzureCredential"]);
  end;
  subgraph "@azure/storage-blob"
    D1(["BlobServiceClient"]);
    D8(["BlockBlobClient"]);
    D9(["ContainerClient"]);
  end;
  subgraph "node:path"
    D2(["parse"]);
    D3(["relative"]);
    D4(["resolve"]);
  end;
  subgraph "base"
    D5(["Base"]);
  end;
  subgraph "hold"
    D6(["hold"]);
    D7(["unwrap"]);
    D11(["Get"]);
    D12(["ValueOrGet"]);
  end;
  subgraph "file-entry"
    D10(["FileEntry"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D6 --import--> C0;
  D7 --import--> C0;
  D8 --import--> C1;
  D9 --import--> C1;
  D5 --import--> C1;
  D10 --import--> C1;
  D11 --import--> C1;
  D12 --import--> C1;
~~~~~
