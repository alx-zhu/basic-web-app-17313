export default function QueryProcessor(query: string): string {
  const lowercase = query.toLowerCase()
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrewid") || query.toLowerCase().includes("andrew id")) {
    return "azhu3"
  } else if (lowercase.includes("name")) {
    return "jccrawsh and azhu3"
    // When plus comes before multiplied, we add the first two numbers and multiply by the third
  } else if (lowercase.includes("plus") && lowercase.includes("multiplied")) {
    // Add the first two numbers and multiply by the third
    if (lowercase.indexOf("plus") < lowercase.indexOf("multiplied")) {
      const numbers = query.match(/\d+/g);
      if (numbers) {
        return ((parseInt(numbers[0]) + parseInt(numbers[1])) * parseInt(numbers[2])).toString();
      }
    } else {
      const numbers = query.match(/\d+/g);
      if (numbers) {
        return ((parseInt(numbers[1]) + parseInt(numbers[2])) * parseInt(numbers[0])).toString();
      }
    }
  } else if (lowercase.includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return numbers.reduce((a, b) => (parseInt(a) + parseInt(b)).toString());
    }
  } else if (lowercase.includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return Math.max(...numbers.map(Number)).toString();
    }
  } else if (lowercase.includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return numbers.reduce((a, b) => (parseInt(a) * parseInt(b)).toString());
    }
  } else if (lowercase.includes("square") && lowercase.includes("cube")) {
    // Extracts numbers that are perfect squares and perfect cubes
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const square = numbers.filter((num) => {
        const sqrt = Math.sqrt(parseInt(num));
        return sqrt === Math.floor(sqrt);
      });
      const cube = square.find((num) => {
        const cbrt = Math.cbrt(parseInt(num));
        return cbrt === Math.floor(cbrt);
      });
      return cube?.toString() || "";
    }
  } else if (lowercase.includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return numbers.reduce((a, b) => (parseInt(a) - parseInt(b)).toString());
    }
  } else if (lowercase.includes("primes")) {
    // return comma separated primes
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const isPrime = (num: number) => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
          i += 6;
        }
        return true;
      };
      return numbers.filter((num) => isPrime(parseInt(num))).join(", ");
    }
  } else if (lowercase.includes("power")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      return Math.pow(parseInt(numbers[0]), parseInt(numbers[1])).toString();
    }
  }

  return "";
}
