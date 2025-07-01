declare module "@raynecloudy/fs" {
  /**
   * A file handler object.
   */
  export class SystemFile {
    /**
     * A `Date` object with the UTC timestamp of when the file was last accessed.
     */
    accessed: Date;
    /**
     * The content of the file.
     */
    content: string;
    /**
     * @throws {Error} if the path specified is a directory.
     */
    constructor(
      /**
       * The path to the file. If it does not exist, it will be created.
       */
      ...paths: string[]
    );
    /**
     * A `Date` object with the UTC timestamp of when the file was created.
     */
    readonly created: Date;
    /**
     * A `Date` object with the UTC timestamp of when the file was last modified.
     */
    modified: Date;
    /**
     * The full path to the file.
     */
    path: string;
    /**
     * The file's permissions.
     */
    permissions: FilePermissions;
  }

  export interface FilePermissions {
    code: number;
    everyone: RWX;
    group: RWX;
    user: RWX;
  }

  export interface RWX {
    read: boolean;
    write: boolean;
    execute: boolean;
  }
}
