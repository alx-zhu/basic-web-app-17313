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
  }

  return "";
}
