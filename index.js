import { rename, writeFile } from "node:fs/promises";

export class FSFile extends Object {
  _accessed;
  _content;
  _created;
  _modified;
  _path;

  constructor() {
    super();

    Object.defineProperty(this, "content", {
      get: () => {
        return this._content;
      },
      set: (value) => {
        writeFile(this._path, value)
      }
    });

    Object.defineProperty(this, "path", {
      get: () => {
        return this._path;
      },
      set: (value) => {
        rename(this._path, value);
        this._path = value;
      }
    });
  }
}
