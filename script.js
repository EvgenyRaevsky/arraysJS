const task = document.querySelectorAll('.task');

const description = {
    1: 'Задание 1: Создайте массив nums со значениями 5, 2, 4 и пустой массив squares. Добавьте в массив nums элемент с индексом 99 который содержит значение 3. С помощью цикла получите массив squares из 4 элементов, значениями которых будут квадраты значений массива nums, а именно [25, 4, 16, 9]',
    2: 'Задание 2: В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название продукта и его стоимость. Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них.',
    3: 'Задание 3: Создайте массив products с названиями продуктов (5-10); Создайте пустой массив массив basket. Выберите случайное число от 10 до 30 и наполните массив basket случайными продуктами следующим образом: если продукта еще нет в корзине - сформируйте объект, который включает в себя название продукта, цену и количество (1), если продукт уже есть в корзине - увеличьте его количество на 1. После наполнения корзины, с помощью метода reduce посчитайте сумму товаров корзины (цена *  количество)'
}

// Task 1
const nums = [5, 2, 4]
nums[99] = 3
let squares = []

nums.forEach(el => {
    if (el) {
        squares.push(el ** 2)
    }
})

// Task 2
const list = [
    { product: "Apple", price: 85 },
    { product: "Cherry", price: 129 },
    { product: "Strawberry", price: 132 },
    { product: "Banana", price: 99 },
    { product: "Mango", price: 45 },
    { product: "Kiwi", price: 89 },
    { product: "Pear", price: 102 },
    { product: "Orange", price: 56 },
    { product: "Apricot", price: 75 },
    { product: "Watermelon", price: 132 },
    { product: "Melon", price: 143 }
]

list.sort((a, b) => {
    return b.price - a.price
})

let resList = `Максимальная цена: ${list[0].product} - ${list[0].price} руб`

// Task 3

const product = [...list]
let basket = []

const randNum = Math.floor(Math.random() * 21 + 10)

const purchase = () => {
    for (let i = 0; i < randNum; i++) {
        let randProduct = product[Math.floor(Math.random() * product.length)]
        if (basket.length) {
            for (let j = 0; j < basket.length; j++) {
                if (basket[j].product === randProduct.product) {
                    basket[j].cnt++
                    break
                } else if (j === basket.length - 1) {
                    basket.push(randProduct)
                    basket[basket.length - 1].cnt = 1
                    break
                }
            }
        } else {
            basket.push(randProduct)
            basket[i].cnt = 1
        }
    }
}
purchase()

// При помощи reduce не получилось
let sum = 0
basket.forEach(el => {
    sum += el.price * el.cnt
})
let sumStr = `Общая сумма всех товаров составляет ${sum} руб`

// Result
const target = document.createElement('div')
target.className = 'description'

task.forEach((el, i) => {
    let tmp;
    if (i === 0) {
        target.innerText = description[1]
    } else if (i == 1) {
        target.innerText = description[2]
    } else {
        target.innerText = description[3]
    }
    tmp = target.cloneNode(true)
    el.append(tmp)
})

const result = document.createElement('div')
result.className = 'result'

task.forEach((el, i) => {
    let tmp;
    if (i === 0) {
        result.innerText = squares.join(' ')
    } else if (i == 1) {
        result.innerText = resList
    } else {
        result.innerText = sumStr
    }
    tmp = result.cloneNode(true)
    el.append(tmp)
})
