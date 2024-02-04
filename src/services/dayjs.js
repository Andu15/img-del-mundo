import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/es' // import locale

dayjs.extend(isLeapYear) // use plugin
dayjs.locale('es') // use locale

export const getCurrentDate = () => {
  const now = dayjs();
  const dateFormatted = now.format("dddd DD.MM.YYYY");
  return dateFormatted.slice(0,1).toUpperCase() + dateFormatted.slice(1);
}