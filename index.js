// Create an array of objects
const people = [
    {
      name: "Romeo",
      age: 17,
      hobbies: ["Basketball", "Archery", "Guitar"],
      nationality: "British",
    },
    {
      name: "Johnny",
      age: 16,
      hobbies: ["Football", "Piano",],
      nationality: "American",
    },
    {
      name: "Landon",
      age: 18,
      hobbies: ["Tennis", "MMA"],
      nationality: "Russian",
    },
  ];
  
  console.log("Names of the people:");
  people.forEach((person) => {
    console.log(person.name);
  });
  
  
  console.log("\nHobbies of the people:");
  people.forEach((person) => {
    person.hobbies.forEach((hobby) => {
      console.log(hobby);
    });
  });
  
  /
  const americanCitizens = people.filter((person) => person.nationality === "American");
  console.log("\nAmerican Citizens:");
  console.log(americanCitizens);
  