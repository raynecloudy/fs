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
    /**
     * A three-digit number indicating permissions for the file owner, the group, and everyone else.
     */
    code: number;
    /**
     * Everybody that is not the file owner or a member of the group.
     */
    everyone: RWX;
    /**
     * A member of the file owner group.
     */
    group: RWX;
    /**
     * The owner of the file.
     */
    user: RWX;
  }

  export interface RWX {
    /**
     * Permission to read the file.
     */
    read: boolean;
    /**
     * Permission to write to the file.
     */
    write: boolean;
    /**
     * Permission to execute the file.
     */
    execute: boolean;
  }
}
