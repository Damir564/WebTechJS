function convertSpeed(speed, direction)
{
    if (direction ===  'toMS')
        return `${speed / 3.6} м/с`
    else if (direction === 'toKMH')
        return `${speed * 3.6} км/ч`
    else
        return `неверный второй аргумент ['toMS', 'toKMH']`
}


function absValue(x)
{
    if (x < 0)
        return -x
    return x
}


function Student(group, last_name, first_name)
{
    this.group = group
    this.last_name = last_name
    this.first_name = first_name
    let ans = `Список свойств: `
    let properties = []
    for (let key in this)
    {
        properties.push(key)
    }
    ans += properties.join(', ')
    ans += `\n`
    ans += `Студент ${this.first_name} ${this.last_name} учится в ${this.group} группе`
    console.log(ans)
}


function randomNumber(min_value, max_value)
{
    return min_value + Math.floor(Math.random() * (max_value - min_value))
}


function sampleArray(arr, count)
{
    let arr2 = []
    let len = arr.length
    for (let i = 0; i < count; i++)
        arr2.push(arr[randomNumber(0, len)])
    return arr2
}
