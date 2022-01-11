function RoomCalcJS(){
  let KeepGoing = true;
  while(KeepGoing){
  let width = prompt("Enter Width: ");
  let length = prompt("Enter Length: ");
  let height = prompt("Enter Height: ");
  let area = width * length;
  let volume = width * length * height;
  let perimeter = (2*width) + (2*length);
  console.log("Area: " + area);
  console.log("Volume: " + volume);
  console.log("Perimeter: " + perimeter);

  KeepGoing = Again();
  }
}

function SearchStudents(){
  const fNames = ["Andy", "Antonio", "Anurag", "Calyn", "Cassly", "Cordero", "Cortez", "Cullin", "Erin", "Ese", "Huy", "James", "Marjorie", "Madalina", "Phillip", "Ramone", "Richard","Rick","Tommy","Zachary"];
  const lNames = ["Beer", "Manzari", "Reddy", "Greene", "Sullen", "Ebberhart", "Christian", "Flynn", "Walter", "Jackson", "Phan", "Mitchell", "Varasteanu", "Patton", "Condrad", "Lynch", "Moss","Madaleno","Waalkes","Parr"];
  const hTowns = ["Berkley, MI","Beverly Hills, MI", "Rochester, MI", "Portage, MI","Detroit, MI", "Berkley, MI","Detroit, MI","Fowlerville, MI","Troy, MI","Detroit, MI", "Lansing, MI","Yap, FSM","Saint Clair Shores, MI","Detroit, MI","Canton, MI", "Fort Lauderdale, FL","Canton, MI","Gilber, AZ","Raleigh, NC","Wyandotte, MI"];
  const favFoods = ["French Fries", "Focaccia Barese","tacos","mac and cheese","steak", "BBQ","Chicken Fettuccine Alfredo","Pad Thai","tacos","shrimp", "Korean BBQ","Katsu","French Fries","lasagna","fried chicken", "chicken soup","sushi","hamburger","curry","sushi"];
  let KeepGoing = true;
while(KeepGoing){
  let stu = prompt("Which student would you like to learn more about? (enter a number 0-19): ");

  if(stu >= 0 || stu <= 19){
    console.log(`${fNames[stu]} ${lNames[stu]}'s hometown is ${hTowns[stu]} and favorite food is ${favFoods[stu]}`);
  }
  else if(stu < 0 || stu > 19){
    console.log("Sorry, that student does not exist.");
  }

  KeepGoing = Again();
}
} 

function Again(){
  if (confirm('Would you like to continue?')) {
    KeepGoing = true;
  } else {
    KeepGoing = false;
    console.log("Goodbye!")
  }
  return KeepGoing;
}