/**
 * 重载
 */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b
}

console.log(add(1, 2))

/**
 * 选择排序
 */
function selectSort(a: number[]): number[] {
  for (let i = 0; i < a.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minIndex]) {
        minIndex = j
      }
    }
    [a[minIndex], a[i]] = [a[i], a[minIndex]]
  }
  return a
}

console.log(selectSort([23, 12, 2, 45, 66, 44, 34, 89]))