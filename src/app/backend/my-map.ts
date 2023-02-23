export class MyMap<K, V> {
  // Store the stringify version of keys, because equality on objects doesn't work.
  private map: Map<string, V> = new Map<string, V>();
  private myKeys: Map<string, K> = new Map<string, K>();

  constructor(entries?: (K | V)[][]) {
    if (entries != undefined) {
      for (const entry of entries) {
        const key = entry[0];
        const value = entry[1];

        this.set(key as K, value as V);
      }
    }
  }

  clear(): void {
    this.map = new Map<string, V>()
    this.myKeys = new Map<string, K>()
  }

  delete(key: K): boolean {
    const keyAsString = JSON.stringify(key);
    if (!this.map.has(keyAsString)) {
      return false;
    }

    this.map.delete(keyAsString);
    this.myKeys.delete(keyAsString);
    return true;
  }

  forEach(callbackfn: (value: V, key: K) => void): void {
    this.map.forEach((_value, _key) => {
      callbackfn(_value, this.myKeys.get(_key)!!)
    })
  }

  get(key: K): V {
    const keyAsString = JSON.stringify(key);
    const result = this.map.get(keyAsString);
    if (result == undefined) {
      throw Error("This should not happen!")
    }
    return result;
  }

  has(key: K): boolean {
    const keyAsString = JSON.stringify(key);
    return this.map.has(keyAsString);
  }

  values(): IterableIterator<V> {
    return this.map.values();
  }

  keys(): IterableIterator<K> {
    return this.myKeys.values();
  }

  set(key: K, value: V): this {
    const keyAsString = JSON.stringify(key);
    this.map.set(keyAsString, value);
    this.myKeys.set(keyAsString, key);
    return this;
  }

  size() {
    return this.map.size;
  }
}
