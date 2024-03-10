console.log("Using for loop:");
for (let i = 0; i < resumeData.skills.length; i++) {
  console.log(resumeData.skills[i]);

  //for in (for object)
  console.log("\nUsing for-in loop:");
for (let key in resumeData.contact) {
  console.log(`${key}: ${resumeData.contact[key]}`);


  //for each(for arrays)
  console.log("\nUsing forEach:");
resumeData.experience.forEach((job) => {
  console.log(`Position: ${job.position}, Company: ${job.company}, Dates: ${job.dates}`);
});
//for-of loop (for arrays)
console.log("\nUsing for-of loop:");
for (let skill of resumeData.skills) {
  console.log(skill);
}

