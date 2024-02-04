import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/es' // import locale

dayjs.extend(isLeapYear) // use plugin
dayjs.locale('es') // use locale

export const getCurrentDate = () => {
  const now = dayjs();
  console.log("now", now)
  return now.format("ddd DD MM YYYY");
}