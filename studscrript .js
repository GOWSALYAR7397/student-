      let student = {
        id: B7E17403,
        name: "Gowsalya",
        marks: [85, 96, 98, 90, 98],
    };
    
    
    student.total = student.marks.reduce((sum, mark) => sum + mark, 0);
    student.percentage = student.total / student.marks.length;
    let grade;
    if (student.percentage > 90)
         {
        grade = "A Grade";
    }
     else if (student.percentage > 80 && student.percentage <= 90) 
        {
        grade = "B Grade";
    }
     else if (student.percentage > 70 && student.percentage <= 80)
         {
        grade = "C Grade";
    } 
    else if (student.percentage > 60 && student.percentage <= 70)
         {
        grade = "D Grade";
    } 
    else if (student.percentage > 50 && student.percentage <= 60)
         {
        grade = "E Grade";
    } 
    else
     {
        grade = "Fail";
    }
    {
    
    console.log("----- Student Grade Report -----");
    console.log("ID       :", student.id);
    console.log("Name     :", student.name);
    console.log("Marks    :", student.marks);
    console.log("Total    :", student.total);
    console.log("Percentage:", student.percentage.toFixed(2) + "%");
    console.log("Grade    :", grade);
}
    
    