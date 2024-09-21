function reverseString(s) {
    try {
      if (typeof s !== "string") {
        throw new Error("Error: s.split is not a function");
      }
      return s.split("").reverse().join("");
    } catch(error) {
      return error.message;
    }
  }
  console.log(reverseString(5656))