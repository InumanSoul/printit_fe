export const parseDatabaseBoolean = (value: string | number | boolean) => {
  if (value === '1' || value === 1) {
    return true
  } else if (value === '0' || value === 0) {
    return false
  }
}