import { renameSync, writeFileSync } from "node:fs";

export class FSFile extends Object {
  _accessed;
  _content;
  _modified;
  _path;

  constructor() {
    super();

    Object.defineProperty(this, "content", {
      get: () => {
        return this._content;
      },
      set: (value) => {
        writeFileSync(this._path, value);
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
