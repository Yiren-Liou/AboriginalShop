import dayjs from 'dayjs';

dayjs().format();
export default function toDate(date) {
  const local = dayjs(new Date(date * 1000)).format('YYYY-MM-DD');
  return local;
}
