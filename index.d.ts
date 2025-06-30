declare module "@raynecloudy/fs" {

  /**
   * A file handler object.
   */
  export class FSFile {
    /**
     * A `Date` object with the UTC timestamp of when the file was last accessed.
     */
    accessed: Date;
    /**
     * The content of the file.
     */
    content: string;
    constructor(
      /**
       * The path to the file. If it does not exist, it will be created.
       */
      path: string
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
  }
}
