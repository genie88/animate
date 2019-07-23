// Ensure this is treated as a module.
export {};

declare global {
  interface Error {
    [key: string]: any
  }
  interface Promise<T> {
    [key: string]: any
  }
  interface Window {
    [key: string]: any
  }
}
