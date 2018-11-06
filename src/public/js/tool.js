/**
 * Created by lenovo on 2018/11/5.
 */
export function filterCustomDate(time) {
  let date = new Date(time) // 将时间戳转化成日期
  let template = 'yyyy-MM-dd'
  template = template.replace(/y+/g, date.getFullYear())
  let obj = {
    '(M+)': date.getMonth() + 1 + '', // js月份从0计算
    '(d+)': date.getDate() + '',
    '(h+)': date.getHours() + '',
    '(m+)': date.getMinutes() + '',
    '(s+)': date.getSeconds() + ''
  }

  for (let key in obj) {
    let reg = new RegExp(key)
    if (reg.test(template)) {
      let str = RegExp.$1.length === 1 ? obj[key] : returnDoubleDate(obj[key])
      template = template.replace(reg, str)
    }
  }
  return template
}

function returnDoubleDate(time) {
  // 7 => 007  17 => 0017
  return ('00' + time).substr(time.length)
}
