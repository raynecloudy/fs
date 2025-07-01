import { chmodSync, existsSync, mkdirSync, readFileSync, renameSync, statSync, utimesSync, writeFileSync } from "node:fs";
import { join, parse } from "node:path";

export class SystemFile extends Object {
  _path;
  permissions = {
    everyone: {},
    group: {},
    user: {}
  };

  constructor(...paths) {
    super();

    this._path = join(...paths);

    if ((() => {
      try {
        return statSync(this._path).isDirectory()
      } catch (error) {
        return false;
      }
    })()) {
      throw Error(`${this._path} is a directory`);
    }
    
    if (!existsSync(this._path) && parse(this._path).dir !== "") {
      mkdirSync(parse(this._path).dir, { recursive: true });
    }
    writeFileSync(this._path, "");

    Object.defineProperty(this, "accessed", {
      get: () => {
        return statSync(this._path).atime;
      },
      set: (value) => {
        utimesSync(this._path, value, statSync().mtime);
      }
    });

    Object.defineProperty(this, "content", {
      get: () => {
        return readFileSync(this._path).toString();
      },
      set: (value) => {
        writeFileSync(this._path, value);
      }
    });

    Object.defineProperty(this, "created", {
      get: () => {
        return statSync(this._path).birthtime;
      }
    });

    Object.defineProperty(this, "modified", {
      get: () => {
        return statSync(this._path).mtime;
      },
      set: (value) => {
        utimesSync(this._path, statSync().atime, value);
      }
    });

    Object.defineProperty(this, "path", {
      get: () => {
        return this._path;
      },
      set: (value) => {
        renameSync(this._path, value);
        this._path = value;
      }
    });

    Object.defineProperty(this.permissions, "code", {
      get: () => {
        return parseInt((statSync(this._path).mode & 0o777).toString(8));
      },
      set: (value) => {
        chmodSync(this._path, parseInt(value.toString(), 8));
      }
    });

    Object.defineProperty(this.permissions.user, "read", {
      get: () => {
        const code = this.permissions.code.toString()[0];
        return [4, 5, 6, 7].includes(code);
      },
      set: (value) => {
        const code = this.permissions.code;
        if (value === true && ![4, 5, 6, 7].includes(parseInt(code.toString()[0]))) {
          chmodSync(this._path, parseInt(`${code + 400}`, 8));
        } else if (value === false && [4, 5, 6, 7].includes(parseInt(code.toString()[0]))) {
          chmodSync(this._path, parseInt(`${code - 400}`, 8));
        }
      }
    });

    Object.defineProperty(this.permissions.group, "read", {
      get: () => {
        const code = this.permissions.code.toString()[1];
        return [4, 5, 6, 7].includes(code);
      },
      set: (value) => {
        const code = this.permissions.code;
        if (value === true && ![4, 5, 6, 7].includes(parseInt(code.toString()[1]))) {
          chmodSync(this._path, parseInt(`${code + 40}`, 8));
        } else if (value === false && [4, 5, 6, 7].includes(parseInt(code.toString()[1]))) {
          chmodSync(this._path, parseInt(`${code - 40}`, 8));
        }
      }
    });

    Object.defineProperty(this.permissions.everyone, "read", {
      get: () => {
        const code = this.permissions.code.toString()[2];
        return [4, 5, 6, 7].includes(code);
      },
      set: (value) => {
        const code = this.permissions.code;
        if (value === true && ![4, 5, 6, 7].includes(parseInt(code.toString()[2]))) {
          chmodSync(this._path, parseInt(`${code + 4}`, 8));
        } else if (value === false && [4, 5, 6, 7].includes(parseInt(code.toString()[2]))) {
          chmodSync(this._path, parseInt(`${code - 4}`, 8));
        }
      }
    });

    Object.defineProperty(this.permissions.user, "write", {
      get: () => {
        const code = this.permissions.code.toString()[0];
        return [2, 3, 6, 7].includes(code);
      },
      set: (value) => {
        const code = this.permissions.code;
        if (value === true && ![2, 3, 6, 7].includes(parseInt(code.toString()[0]))) {
          chmodSync(this._path, parseInt(`${code + 200}`, 8));
        } else if (value === false && [2, 3, 6, 7].includes(parseInt(code.toString()[0]))) {
          chmodSync(this._path, parseInt(`${code - 200}`, 8));
        }
      }
    });

    Object.defineProperty(this.permissions.group, "write", {
      get: () => {
        const code = this.permissions.code.toString()[1];
        return [2, 3, 6, 7].includes(code);
      },
      set: (value) => {
        const code = this.permissions.code;
        if (value === true && ![2, 3, 6, 7].includes(parseInt(code.toString()[1]))) {
          chmodSync(this._path, parseInt(`${code + 20}`, 8));
        } else if (value === false && [2, 3, 6, 7].includes(parseInt(code.toString()[1]))) {
          chmodSync(this._path, parseInt(`${code - 20}`, 8));
        }
      }
    });

    Object.defineProperty(this.permissions.everyone, "write", {
      get: () => {
        const code = this.permissions.code.toString()[2];
        return [2, 3, 6, 7].includes(code);
      },
      set: (value) => {
        const code = this.permissions.code;
        if (value === true && ![2, 3, 6, 7].includes(parseInt(code.toString()[2]))) {
          chmodSync(this._path, parseInt(`${code + 2}`, 8));
        } else if (value === false && [2, 3, 6, 7].includes(parseInt(code.toString()[2]))) {
          chmodSync(this._path, parseInt(`${code - 2}`, 8));
        }
      }
    });

    Object.defineProperty(this.permissions.user, "execute", {
      get: () => {
        const code = this.permissions.code.toString()[0];
        return [1, 3, 5, 7].includes(code);
      },
      set: (value) => {
        const code = this.permissions.code;
        if (value === true && ![1, 3, 5, 7].includes(parseInt(code.toString()[0]))) {
          chmodSync(this._path, parseInt(`${code + 100}`, 8));
        } else if (value === false && [1, 3, 5, 7].includes(parseInt(code.toString()[0]))) {
          chmodSync(this._path, parseInt(`${code - 100}`, 8));
        }
      }
    });

    Object.defineProperty(this.permissions.group, "execute", {
      get: () => {
        const code = this.permissions.code.toString()[1];
        return [1, 3, 5, 7].includes(code);
      },
      set: (value) => {
        const code = this.permissions.code;
        if (value === true && ![1, 3, 5, 7].includes(parseInt(code.toString()[1]))) {
          chmodSync(this._path, parseInt(`${code + 10}`, 8));
        } else if (value === false && [1, 3, 5, 7].includes(parseInt(code.toString()[1]))) {
          chmodSync(this._path, parseInt(`${code - 10}`, 8));
        }
      }
    });

    Object.defineProperty(this.permissions.everyone, "execute", {
      get: () => {
        const code = this.permissions.code.toString()[2];
        return [1, 3, 5, 7].includes(code);
      },
      set: (value) => {
        const code = this.permissions.code;
        if (value === true && ![1, 3, 5, 7].includes(parseInt(code.toString()[2]))) {
          chmodSync(this._path, parseInt(`${code + 1}`, 8));
        } else if (value === false && [1, 3, 5, 7].includes(parseInt(code.toString()[2]))) {
          chmodSync(this._path, parseInt(`${code - 1}`, 8));
        }
      }
    });
  }
}
