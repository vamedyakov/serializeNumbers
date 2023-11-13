function serializeNumbers(numbers) {
    let serialized = '';
  
    const counts = {};
    numbers.forEach(num => (counts[num] = (counts[num] || 0) + 1));
  
    Object.keys(counts).forEach(num => {
      serialized += String.fromCharCode(num);
      serialized += String(counts[num]);
    });
  
    return serialized;
  }
  
  function deserializeNumbers(serialized) {
    const numbers = [];
    let i = 0;
  
    while (i < serialized.length) {
      const num = serialized.charCodeAt(i++);
      const count = serialized.substring(i, i + 1);
      i++;
  
      for (let j = 0; j < count; j++) {
        numbers.push(num);
      }
    }
  
    return numbers;
  }
  