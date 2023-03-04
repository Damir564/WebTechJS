const task = +prompt('Введите номер задачи')
switch (task)
{
    case 1:
        let number1 = 36
        let number2 = 20
        console.log(`${number1} км/ч соответствует ${number1 / 3.6} м/с`)
        console.log(`${number2} м/с соответствует ${number2 * 3.6} км/ч`)
        break
    case 2:
        let a = 3
        let b = 4
        let c = 5
        let ifAOk = a < (b + c)
        let ifBOk = b < (a + c)
        let ifCOk = c < (a + b)
        if (!(ifAOk && ifBOk && ifCOk))
        {
            console.log('Треугольника не существует')
        }
        else
        {
            console.log('Треугольник существует')
            let p = a + b + c
            let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
            let psRatio = p / s
            console.log(`Периметр = ${p}`)
            console.log(`Площадь = ${s}`)
            console.log(`Соотношение = ${psRatio}`)
        }
        break
    case 3:
        {
        let n = 0
        while (true)
        {
            n = +prompt("Введите число")
            if (!isNaN(n))
                break
            console.log('Это не число')
        }
        for (let i = 0; i <= n; i++)
        {
            if (i % 5 === 0 && i !== 0)
                console.log(`${i} fizz buzz`)
            else if (i % 2 === 0)
                console.log(`${i} buzz`)
            else
                console.log(`${i} fizz`)
        }
        break
    }
    case 4:
        {
        let n = 0
        while (true)
        {
            n = +prompt("Введите высоту ёлки")
            if (!isNaN(n))
                break
            console.log('Это не число')
        }
        let ans = "\n"
        for (let i = 1; i != n + 1; i++)
        {
            if (i % 2 !== 0)
                ans += "*".repeat(i)
            else
                ans += "#".repeat(i)
            ans += "\n"
        }
        ans += "||"
        console.log(ans)
        break
    }
    case 5:
        {
        let n = 243
        while (true)
        {
            let guess = +prompt("Угадайте число")
            if (guess > n)
                console.log("ваше число больше")
            else if (guess < n)
                console.log("ваше число меньше")
            else
                break
        }
        console.log("угадано")
        break
    }
    case 6:
        {
        let n = 0
        while (true)
        {
            n = +prompt("Введите число n")
            if (!isNaN(n))
                break
            console.log('Это не число')
        }
        let x = 0
        while (true)
        {
            x = +prompt("Введите число x")
            if (!isNaN(n))
                break
            console.log('Это не число')
        }
        let y = 0
        while (true)
        {
            y = +prompt("Введите число y")
            if (!isNaN(n))
                break
            console.log('Это не число')
        }
        let ans = `n = ${n}, x = ${x}, y = ${y} => `
        if (n % x + n % y != 0)
            ans += `false`
        else
            ans += 'true'
        console.log(ans)
        break
    }
    case 7:
        {
        let n = 0
        while (true)
        {
            n = +prompt("Введите месяц")
            if (n > 12)
            {
                console.log('Большой месяц')
                continue
            }
            if (!isNaN(n))
                break
            console.log('Это не число')
        }
        let ans = `месяц ${n} => `
        if (n < 4)
            ans += `1 `
        else if (n < 7)
            ans += `2 `
        else if (n < 10)
            ans += `3 `
        else
            ans += `4 `
        ans += `квартал`
        console.log(ans)
        break
    }
}
