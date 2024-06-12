export default function clone (thing) {
  if (!thing || typeof thing !== 'object') return thing
  if (thing instanceof Date) return new Date(thing)
  if (Array.isArray(thing)) return thing.map(clone)
  return Object.fromEntries(
    Object.entries(thing).map(([key, value]) => [key, clone(value)])
  )
}
