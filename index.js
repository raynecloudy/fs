import { readFileSync, renameSync, statSync, utimesSync, writeFileSync } from "node:fs";

export class FSFile extends Object {
  _path;

  constructor(path) {
    super();

    Object.defineProperty(this, "accessed", {
      get: () => {
        return statSync().atime;
      },
      set: (value) => {
        utimesSync(this._path, value, statSync().mtime);
      }
    });

    Object.defineProperty(this, "content", {
      get: () => {
        return readFileSync(this._path).toString();;
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
        return statSync().mtime;
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
  }
}
