type Identifiable = {
  id: number
}

export function filterUniqueById<T extends Identifiable>(dataArr: T[]): T[] {
  const uniqueIds = new Set<number>()
  return dataArr.filter((item) => {
    if (uniqueIds.has(item.id)) {
      return false
    }
    uniqueIds.add(item.id)
    return true
  })
}
