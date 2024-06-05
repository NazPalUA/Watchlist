export function filterUniqueIds(idsArr: string[]) {
  const uniqueIds = new Set(idsArr)
  return Array.from(uniqueIds)
}
