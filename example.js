import { SystemDirectory, SystemFile } from "./index.js";

const file = new SystemFile("./out/hello.txt");
file.content = "hello, world!";

const dir = new SystemDirectory("./out");
dir.path = "./hello/world";
