const getSleepHours = day => {


    switch(day) { 
    case 'monday':
    return 8;
    case 'tuesday':
    return 7;
    case 'wednesday':
    return 8;
    case 'thursday': 
    return 8;
    case 'friday': 
    return 8;
    case 'saturday':
    return 5;
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
  
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };
  
  console.log(getActualSleepHours());
  
  const calculateSleepDebt
  