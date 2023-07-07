//jshint esversion:6

//instaed of binding the entire object to the function,we can do


module.exports.getDate = getDate;
function getDate(){
  const today = new Date();
  const options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    }

return today.toLocaleDateString("en-US", options);
}

//above code can be written as
// exports.getDate = function(){
//   let today = new Date();
//   let options = {
//       weekday: "long",
//       day: "numeric",
//       month: "long"
//     }
//     return today.toLocaleDateString("en-US", options);
// }


module.exports.getDay = getDay;
function getDay(){
  const today = new Date();
  const options = {
      day: "numeric",
    }

  let day = today.toLocaleDateString("en-US", options);
  return day;
}
