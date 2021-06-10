'use strict'

const arr = Array.from({ length: 101 }, (v, k) => k)


function binarySearch(arr) {
   if (arr.length === 1) {
      return alert(`Загаданое число было  ${arr[0]}`);
   };
   if (arr.length < 1) {
      return alert('Где то меня обманули');
   };

   const value = Math.floor(arr.length / 2);
   if (confirm(`твое число ${arr[value]} ?`)) {
      return alert('это было легко :)');
   } else {
      if (confirm('Число больше ?')) {
         binarySearch(arr.slice(value));
      } else {
         binarySearch(arr.slice(0, value + 1));
      };
   };
};

function startSearching() {
   alert('загадывай число, сейчас отгадаю:)')
   binarySearch(arr);
   if (confirm('Давай еще разок ?')) {
      startSearching()
   }
}

startSearching();