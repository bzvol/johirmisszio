export function dateToHuString(date: Date): string {
  const months = [
    "január", "február", "március", "április", "május", "június",
    "július", "augusztus", "szeptember", "november", "december"
  ]
  return `${date.getFullYear()}. ${months[date.getMonth()]} ${date.getDate()}.`
}