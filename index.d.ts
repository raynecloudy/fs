/**
 * A file handler object.
 */
export class FSFile {
  /**
   * A UTC timestamp of when the file was last accessed.
   */
  accessed: number;
  /**
   * The content of the file.
   */
  content: string;
  /**
   * A UTC timestamp of when the file was created.
   */
  created: number;
  /**
   * A UTC timestamp of when the file was last modified.
   */
  modified: number;
  /**
   * The full path to the file.
   */
  path: string
}
