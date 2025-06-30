import { writeFile } from "node:fs/promises";

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
    })
  }
}
