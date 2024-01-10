export class LocalStorageUtil {
    static getItem(key: string): string | null {
      return window.localStorage.getItem(key)
    }
  
    static setItem(key: string, value: any): void {
      window.localStorage.setItem(key, value)
    }
     static removeItem(key: string): void {
      window.localStorage.removeItem(key)
    }
  }