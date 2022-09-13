// 'ta' is Tamil Language

const relativeEn = new Intl.RelativeTimeFormat('ta', {
  style: 'long',
  numeric: 'auto',
});
console.log(relativeEn.format(0, 'day'));
console.log(relativeEn.format(0, 'month'));
console.log(relativeEn.format(0, 'year'));
console.log('---------------');
console.log(relativeEn.format(1, 'day'));
console.log(relativeEn.format(1, 'month'));
console.log(relativeEn.format(1, 'year'));
console.log('---------------');
console.log(relativeEn.format(-1, 'day'));
console.log(relativeEn.format(-1, 'month'));
console.log(relativeEn.format(-1, 'year'));
console.log('---------------');
console.log(relativeEn.format(2, 'day'));
console.log(relativeEn.format(2, 'month'));
console.log(relativeEn.format(2, 'year'));
