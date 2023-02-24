export class MySet<T> {
  private set: Set<string> = new Set<string>()

  add(value: T): this {
    this.set.add(JSON.stringify(value))
    return this
  }

  clear(): void {
    this.set = new Set<string>()
  }

  delete(value: T): boolean {
    if (!this.has(value)) {
      return false;
    }

    this.set.delete(JSON.stringify(value));
    return true;
  }

  has(value: T): boolean {
    return this.set.has(JSON.stringify(value));
  }

  toList(): T[] {
    const result: T[] = [];

    this.set.forEach((value: string) => {
      result.push(JSON.parse(value))

    })

    return result;
  }
}
