import dayjs from 'dayjs';

dayjs().format();
export function toDate(date) {
  const local = dayjs(new Date(date * 1000)).format('YYYY-MM-DD');
  return local;
}

export function toUnix(date) {
  const local = dayjs(date).unix();
  return local;
}
