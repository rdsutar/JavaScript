const accountId = 123456;
let accountEmail = "rohan@gamil.com";
var accountPassword = "7886654";
accountCity = "Raigad";

// accountId = 2; // Not allowed

accountEmail = "rd@gmail.com";
accountPassword = "654789";
accountCity = "Pune";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var
Beacuse of issue in block scope nad functional scope.
*/