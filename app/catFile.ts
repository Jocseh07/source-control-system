import * as fs from "fs";
import * as zlib from "zlib";

enum CatFileCommands {
  Content = "-p",
  Type = "-t",
  Size = "-s",
}

export async function catFile(args: string[]) {
  const object = args[2];
  const blobDir = object.substring(0, 2);
  const blobFile = object.substring(2);
  const blobPath = ".git/objects/" + blobDir + "/" + blobFile;
  const blob = fs.readFileSync(blobPath);

  const rawData = zlib.unzipSync(blob);
  const data = rawData.toString("utf-8").split("\0");
  let content = data[1].trimEnd();
  const fileData = data[0].split(" ");
  const type = fileData[0];
  const size = fileData[1];

  switch (args[1]) {
    case CatFileCommands.Content:
      process.stdout.write(content);
      break;
    case CatFileCommands.Type:
      console.log(type);
      break;
    case CatFileCommands.Size:
      console.log(size);
      break;
    default:
      throw new Error(`Unknown cat-file command ${args[1]}`);
  }
}
