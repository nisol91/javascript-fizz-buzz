// Fizz Buzz test: Scrivi un programma che
// stampi i numeri da 1 a 100 ma per i multipli di
// 3 stampi “Fizz” al posto del numero e per i
// multipli di 5 stampi Buzz. Per i numeri che
// sono sia multipli di 3 che di 5 stampi
// FizzBuzz.


for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
      console.log('Fizz-Buzz');
      document.writeln('Fizz-Buzz' + '<br>');
  } else if (i % 3 == 0) {
      console.log('Fizz');
      document.writeln('Fizz' + '<br>');
  } else if (i % 5 == 0) {
      console.log('Buzz');
      document.writeln('Buzz' + '<br>');
  } else if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
      document.writeln(i + '<br>');
  }
}

// var i = 1;
// while (i <= 100) {
//   if (i % 3 == 0 && i % 5 == 0) {
//       console.log('Fizz-Buzz');
//       document.writeln('Fizz-Buzz' + '<br>');
//   } else if (i % 3 == 0) {
//       console.log('Fizz');
//       document.writeln('Fizz' + '<br>');
//   } else if (i % 5 == 0) {
//       console.log('Buzz');
//       document.writeln('Buzz' + '<br>');
//   } else if (i % 3 !== 0 && i % 5 !== 0) {
//       console.log(i);
//       document.writeln(i + '<br>');
//   }
//   i++;
// }

//NB!! ricordati che per primo devo sempre mettere il caso piu limitante!!
//In questo caso che sia divisibile sia per 3 che per 5!
