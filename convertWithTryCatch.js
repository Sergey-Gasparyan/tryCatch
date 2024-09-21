function isPositiv(a) {
    if(typeof a === "number") {
        try{
            if(a === 0) throw new Error("Zero Error!")
            else if(a < 0) throw new Error("Negativ Error!")
            
        }
        catch (err) {
            return err.message
    }
      return "Yes"
    }
    else return "Please enter a number"
}
console.log(isPositiv(0))