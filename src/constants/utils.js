
export function getPrefix(value, item) {
    var url = item;
    var PREFIX = value;
    if (url.indexOf(PREFIX) === 0) {
        // PREFIX is exactly at the beginning
        url = url.slice(PREFIX.length);
    }
    return url
}

export function getTodayDate(){
    let  today = new Date();
    var ampm = today.getHours() >= 12 ? 'PM' : 'AM';
    let date = `${today.getFullYear()}- ${(today.getMonth() + 1)}-${today.getDate()}  ${today.getHours()}:${today.getMinutes()}  ${ampm}` ;
    return date;
}