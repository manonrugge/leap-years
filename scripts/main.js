// converted string to numbers and store the user input in variable: year
let year = Number(prompt("Input a Year : "));
let count = 0;

// prints border top of the box around the results
console.log("**********");

// function that accepts a year as an argument and console.logs the following 20 leap years
leapYears = (leapYear) => {
    // if count is less then 20 run this block of code
    if (count < 20) {
        // if year is a multiple of 4 it is a leap year, run this block of code
        if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 == 0)) {
            // console log the leap year
            console.log(`*  ${leapYear}  *`);
            // year add 4
            year += 4;
            // count add 1
            count += 1;
        }
        // if year is not a multiple of 4, just add one 
        else {
            year += 1
        }
        // instead of looping through, i am calling the function again until the statement is false 
        leapYears(year)
    }
}
// calling the function 
leapYears(year)

// prints border bottom of the box around the results
console.log("**********");


// // This function will print the the leap years when the date that is passed in will be year 0 
// let year = Number(prompt("Input a Year : "));
// let count = 0;

// console.log("**********");

// function leapYears(leapYear) {
//     if (count < 20) {
//         console.log(`*  ${leapYear}  *`);
//         year += 4;
//         count += 1;
//         leapYears(year)
//     }
// }

// leapYears(year)

// console.log("**********");



console.log(`

        #     # ######  
        #     # #     # 
        #     # #     # 
        #     # ######  
        #     # #       
        #     # #       
         #####  #       
                        
           #    #     # ######  
          # #   ##    # #     # 
         #   #  # #   # #     # 
        #     # #  #  # #     # 
        ####### #   # # #     # 
        #     # #    ## #     # 
        #     # #     # ######  
                                
        ######  #     # #     # #     # ### #     #  #####  
        #     # #     # ##    # ##    #  #  ##    # #     # 
        #     # #     # # #   # # #   #  #  # #   # #       
        ######  #     # #  #  # #  #  #  #  #  #  # #  #### 
        #   #   #     # #   # # #   # #  #  #   # # #     # 
        #    #  #     # #    ## #    ##  #  #    ## #     # 
        #     #  #####  #     # #     # ### #     #  ##### 

        `)