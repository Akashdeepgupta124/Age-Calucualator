const date = document.getElementById("dob");
const calculateBtn = document.getElementById("Calculate_btn");
const res = document.getElementById("result");

calculateBtn.addEventListener("click", function(){

    const dob = new Date (date.value);
    const ageinms = Date.now() - dob.getTime();
    const ageDate = new Date(ageinms)
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    res.innerHTML = `your AGE is ${age}`;
})