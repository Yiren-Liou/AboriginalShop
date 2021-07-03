export default function toDate(date) {
  const local = new Date(date * 1000);
  return local.toLocaleDateString();
}
