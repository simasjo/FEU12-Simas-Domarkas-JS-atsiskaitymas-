/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    
    sum(a, b) {
      return a + b;
    }
  
    subtraction(a, b) {
      return a - b;
    }
  
    multiplication(a, b) {
      return a * b;
    }
  
    division(a, b) {
      if (b === 0) {
        console.error("Dalyba iš nulio negalima.");
        return undefined; 
      }
      return a / b;
    }
  }

  const calculator = new Calculator();
  // console.log(calculator.sum(5, 3));          
  // console.log(calculator.subtraction(8, 3));   
  // console.log(calculator.multiplication(4, 2)); 
  // console.log(calculator.division(10, 2));      
  // console.log(calculator.division(5, 0));     
  