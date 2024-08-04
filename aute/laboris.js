function findMatches(array, pattern) {
    return array.filter(item => item.includes(pattern));
}

let items = ['apple', 'banana', 'apricot', 'cherry'];
let matching = findMatches(items, 'ap');
console.log(matching); // Output: ['apple', 'apricot']
