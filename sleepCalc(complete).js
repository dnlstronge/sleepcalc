// Sleep Debt Calculator


const getSleepHours = day => {

    //input actual sleep hours per day
    
      switch(day) { 
      case 'monday':
      return 2;
      case 'tuesday':
      return 7;
      case 'wednesday':
      return 8;
      case 'thursday': 
      return 8;
      case 'friday': 
      return 8;
      case 'saturday':
      return 9;
      case 'sunday':
      return 6;
      default:
      return "error";
      }
    };
    
    const getActualSleepHours = () =>
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') +
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
    
    // Determines ideal amount
    
    const getIdealSleepHours = () => {
      const idealHours = 7.5;
      return idealHours * 7;
    };
    
    // Debt Calculation
    
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
    
    
    if(actualSleepHours === idealSleepHours) {
      console.log("You got enough sleep!");
    } 
      else if(actualSleepHours > idealSleepHours) {
      console.log("You got " + (actualSleepHours - idealSleepHours) + " hour(s) more sleep than needed!");
    } 
      else if(actualSleepHours < idealSleepHours) {
      console.log("You need " +(idealSleepHours - actualSleepHours) + " hour(s) more sleep!");
    }
    else {
      console.log("Something went wrong");
    }
    };
    
    //Calculate Sleep Debt - call function calculateSleepDebt
    
    calculateSleepDebt();
    
    