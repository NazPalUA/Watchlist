export default function getUniqueIds(idsArr: string[]) {
  const uniqueIds = new Set(idsArr)
  return Array.from(uniqueIds)
}
