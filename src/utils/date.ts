export const getDay = (dateTimeString: string) => {
  if (!dateTimeString) return ''

  const date = new Date(dateTimeString)

  return date.getDate()
}

export const getMonth = (dateTimeString: string) => {
  if (!dateTimeString) return ''

  const date = new Date(dateTimeString)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const month = months[date.getMonth()]

  return month
}

export const getStartTime = (dateTimeString: string) => {
  if (!dateTimeString) return ''

  const date = new Date(dateTimeString)

  const hours = date.getHours()
  const minutes = date.getMinutes()

  const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}`

  return formattedTime
}

export const getWeekday = (dateTimeString: string) => {
  const date = new Date(dateTimeString)

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const weekday = weekdays[date.getDay()]

  return weekday
}

export const getYear = (dateTimeString: string) => {
  if (!dateTimeString) return ''

  const date = new Date(dateTimeString)

  return date.getFullYear()
}
