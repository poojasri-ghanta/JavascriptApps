//call backchaining
const stdDetails = () => {
    console.log("stdInfo");
    setTimeout(() => {
        let rollNums = [1, 2, 3, 4];
        console.log(rollNums);
        setTimeout((rollnum) => {
            let data = {
                sname: "pooja",
                qualification:"btech"
            }
            console.log(
              `studnet nmame is ${data.sname} Qualification is ${data.qualification} rollnumber is ${rollnum}`
            );
        },2000,rollNums[1])

    },2000)
}
stdDetails();