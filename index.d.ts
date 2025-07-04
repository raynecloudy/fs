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
    permissions: Permissions;
  }

  /**
   * A directory handler object.
   */
  export class SystemDirectory {
    /**
     * A `Date` object with the UTC timestamp of when the directory was last accessed.
     */
    accessed: Date;
    /**
     * @throws {Error} if the path specified is not a directory.
     */
    constructor(
      /**
       * The path to the file. If it does not exist, it will be created.
       */
      ...paths: string[]
    );
    /**
     * A `Date` object with the UTC timestamp of when the directory was created.
     */
    readonly created: Date;
    /**
     * A `Date` object with the UTC timestamp of when the directory was last modified.
     */
    modified: Date;
    /**
     * The full path to the directory.
     */
    path: string;
    /**
     * The directory's permissions.
     */
    permissions: Permissions;
  }

  export interface Permissions {
    /**
     * A three-digit number indicating permissions for the owner, the group, and everyone else.
     */
    code: number;
    /**
     * Everybody that is not the owner or a member of the group.
     */
    everyone: RWX;
    /**
     * A member of the owner group.
     */
    group: RWX;
    /**
     * The owner.
     */
    user: RWX;
  }

  export interface RWX {
    /**
     * Permission to read.
     */
    read: boolean;
    /**
     * Permission to write.
     */
    write: boolean;
    /**
     * Permission to execute a file, or traverse a directory.
     */
    execute: boolean;
  }
}
