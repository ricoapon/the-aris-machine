export class MyMap<K extends ObjectWithId, V> {
  // Store the stringify version of keys, because equality on objects doesn't work.
  private map: Map<number, V> = new Map<number, V>();
  private myKeys: Map<number, K> = new Map<number, K>();

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
    this.map = new Map<number, V>()
    this.myKeys = new Map<number, K>()
  }

  delete(key: K): boolean {
    if (!this.map.has(key.id)) {
      return false;
    }

    this.map.delete(key.id);
    this.myKeys.delete(key.id);
    return true;
  }

  forEach(callbackfn: (value: V, key: K) => void): void {
    this.map.forEach((_value, _key) => {
      callbackfn(_value, this.myKeys.get(_key)!!)
    })
  }

  get(key: K): V {
    const result = this.map.get(key.id);
    if (result == undefined) {
      throw Error("Key '" + key.id + "' could not be found")
    }
    return result;
  }

  has(key: K): boolean {
    return this.map.has(key.id);
  }

  values(): IterableIterator<V> {
    return this.map.values();
  }

  keys(): IterableIterator<K> {
    return this.myKeys.values();
  }

  set(key: K, value: V): this {
    this.map.set(key.id, value);
    this.myKeys.set(key.id, key);
    return this;
  }

  size() {
    return this.map.size;
  }
}

export abstract class ObjectWithId {
  readonly id: number;

  protected constructor(id: number) {
    this.id = id;
  }
}
