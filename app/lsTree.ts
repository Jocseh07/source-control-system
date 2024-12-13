import * as fs from "fs";
import * as zlib from "zlib";

interface TreeEntry {
  mode: string;
  type: string;
  hash: string;
  name: string;
}

enum LsTreeCommands {
  NameOnly = "--name-only",
}

export async function lsTree(args: string[]) {
  switch (args[1]) {
    case LsTreeCommands.NameOnly:
      const nameEntries = getDetails(args[2]);
      nameEntries.forEach((entry) => {
        process.stdout.write(`${entry.name}\n`);
      });
      break;
    default:
      const entries = getDetails(args[1]);
      entries.forEach((entry) => {
        process.stdout.write(
          `${entry.mode} ${entry.type} ${entry.hash}\t${entry.name}\n`
        );
      });
      break;
  }
}

function getDetails(hash: string) {
  const treeDir = hash.substring(0, 2);
  const treeFile = hash.substring(2);
  const treePath = `.git/objects/${treeDir}/${treeFile}`;
  const compressed = fs.readFileSync(treePath);
  const content = zlib.unzipSync(compressed);
  const nameEntries: TreeEntry[] = [];
  for (const line of content.toString().split("\n")) {
    const [details, name] = line.split("\t");
    const [mode, type, hash] = details.split(" ");
    nameEntries.push({ mode, type, hash, name });
  }
  return nameEntries;
}
