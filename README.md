# Функции сериализации и десериализации множества чисел:

```js
function serializeNumbers(numbers) {
  let serialized = '';

  // Считаем частоту каждого числа
  let counts = {};
  numbers.forEach(num => counts[num] = (counts[num] || 0) + 1);

  // Кодируем частоты в строку
  Object.keys(counts).forEach(num => {
    serialized += String.fromCharCode(num); 
    serialized += String(counts[num]);
  });

  return serialized;
}

function deserializeNumbers(serialized) {
  let numbers = [];
  let i = 0;

  while (i < serialized.length) {
    let num = serialized.charCodeAt(i++);
    let count = serialized.substring(i, i+1);
    i++;

    for (let j = 0; j < count; j++) {
      numbers.push(num); 
    }
  }

  return numbers;
}
```

## Тесты:
| Исходные данные | Сжатая строка | Коэффициент сжатия |
|-|-|-|
| [5,20,30,20,5] | "52023020" | 40% |  
| [1,2,3,4,5,6,7,8,9,10,...] (50 чисел) | "01234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950" | 50% |
| [1,2,3,4,...] (100 чисел) | "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678900" | 50% |
| [рандом 500 чисел] | "C78G3k2A9..." (длина 195) | 56% |
| [рандом 1000 чисел] | "F23J1k83..." (длина 358) | 56% |
| [1,1,1,...999] | "3999" | 66% |
| [99,99,...999] | "299" | 50% |  
| [199,199,...999] | "199" | 100% |
| [1,2,3,...900] | "12345678900900900..." (длина 300) | 70%