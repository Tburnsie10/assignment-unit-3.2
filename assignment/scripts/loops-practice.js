console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}




// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this? :
// need to change the 4 to a 6, which is one number higher than what we want our list to end at.

console.log('count from 0 to 5');
// start a at 0, while it is < 6 do code between {}, afterwards add 1 to a (a++)

for (a = 0; a < 6; a++) {
  console.log(a);
}


// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// I had to change the index number(b =3) so the list started at 3 and then I also
// had to change the < 6 so that the list would not stop before the desired range of 5.



console.log('count from 3 to 5');
//start b at 3, while it is < 6 do code between {}, afterwards add 1 to b (b++)

for (b = 3; b < 6; b++)
console.log(b);



// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// I needed to change the ++ into a += 2 because I wanted them to go up by 2 numbers per loop.

console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// start c at 2, while it is < 11 do code between {}, afterwards add 2 to c (c += 2)

for ( let c = 2; c < 11; c += 2 ) {
  console.log(c);
}




// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let d = 5; d >= 0; d--) {
  console.log(d);

}









// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

for(let star of stars) {
  console.log(star);
}



/* for(let star of stars) {
  console.log(star[0])
} */

/* for(each of stars) {
  console.log('for of loop:', stars );
  console.log(stars);
} */


/* let hand = [ 'Q', '3', 'J', '9', '6', 'K', 'A' ];

for( card of hand ){
  console.log( 'for of loop', card );
  if( card === '9' ){
      console.log( 'match!!!!!!');
  }
} */


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let count = 0;
let arrayLength = stars.length;
while(count < arrayLength) {
  let eachStar = stars[count];
  count++;
  console.log(eachStar)
}


/* let countdown = 5; {
  while (countdown > 0) {
    console.log(countdown);
    countdown = countdown - 1;
  }
  console.log(countdown);
}  */

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let counter = 0;
while(counter < 6) {
  console.log(counter);
  counter++;
}



// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let counter2 = 10;
while(counter2 > 4) {
  console.log(counter2);
  counter2 = counter2 - 1;
  
}
