import * as fs from "fs";

export async function init() {
  fs.mkdirSync(".git", { recursive: true });
  fs.mkdirSync(".git/objects", { recursive: true });
  fs.mkdirSync(".git/refs", { recursive: true });
  fs.writeFileSync(".git/HEAD", "ref: refs/heads/main\n");
  console.log("Initialized git directory");
}
