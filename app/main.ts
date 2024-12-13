import { init } from "./init";
import { catFile } from "./catFile";
import { hashObject } from "./hashObject";
import { lsTree } from "./lsTree";

const args = process.argv.slice(2);
const command = args[0];

enum Commands {
  Init = "init",
  CatFile = "cat-file",
  HashObject = "hash-object",
  LsTree = "ls-tree",
}

switch (command) {
  case Commands.Init:
    await init();
    break;
  case Commands.CatFile:
    await catFile(args);
    break;
  case Commands.HashObject:
    await hashObject(args);
    break;
  case Commands.LsTree:
    await lsTree(args);
    break;
  default:
    throw new Error(`Unknown command ${command}`);
}
