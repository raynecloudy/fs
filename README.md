`@raynecloudy/fs` is a wrapper around the more low-level core npm package "fs". this npm package provides high-level and easy file system manipulation :)

Example:
```ts
import { SystemDirectory, SystemFile } from "@raynecloudy/fs";

let file = new SystemFile("./example.txt");
file.content = "this is an example of setting the content of a file!";

let dir = new SystemDirectory("./example/of/a/path");
file.path = dir.path;
dir.permissions.everyone.write = false;
```

READ THE DOCS: https://fs.raynec.dev/
