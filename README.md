# file-entry-azure-storage-blob

~~~~~ sh
npm install e53e04ac/file-entry-azure-storage-blob
~~~~~

~~~~~ mjs
import { FileEntryAzureStorageBlob } from 'e53e04ac/file-entry-azure-storage-blob';
import { FileEntry } from 'e53e04ac/file-entry-azure-storage-blob';
~~~~~

~~~~~ mermaid
graph LR;
  A(["file-entry-azure-storage-blob"]);
  B0(["@azure/identity"]);
  B1(["@azure/storage-blob"]);
  B2(["e53e04ac/base"]);
  B3(["e53e04ac/file-entry"]);
  B4(["e53e04ac/hold"]);
  C0(["@types/node"]);
  click B2 href "https://github.com/e53e04ac/base";
  click B3 href "https://github.com/e53e04ac/file-entry";
  click B4 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/file-entry-azure-storage-blob";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
