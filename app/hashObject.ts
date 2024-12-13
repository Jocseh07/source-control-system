import crypto from "crypto";
import * as fs from "fs";
import * as zlib from "zlib";

enum HashObjectCommands {
  Write = "-w",
}

export async function hashObject(args: string[]) {
  switch (args[1]) {
    case HashObjectCommands.Write:
      const sha1 = await hash(args[2]);
      const compressed = zlib.deflateSync(sha1);
      const blobDir = sha1.substring(0, 2);
      fs.mkdirSync(".git/objects/" + blobDir, { recursive: true });
      const blobFile = sha1.substring(2);
      const blobPath = ".git/objects/" + blobDir + "/" + blobFile;
      fs.writeFileSync(blobPath, compressed);
      process.stdout.write(sha1);
      break;
    default:
      const sha = await hash(args[1]);
      process.stdout.write(sha);
      break;
  }
}

async function hash(path: string) {
  const content = fs.readFileSync(path);
  const output = Buffer.from(`blob ${content.length}\0${content}`);
  const hash = crypto.createHash("sha1").update(output).digest("hex");
  return hash;
}
