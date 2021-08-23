name_of_the_student_array=[];

function submit() {
     var student_display_array=[];
    for (var j=1; j<=4; j++)
    
    {
    var name_of_the_student=document.getElementById("name_of_the_sudent_"+j).value;
    console.log(name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);}

    console.log(name_of_the_student_array);
     
    var length_name_of_the_student_array=name_of_the_student_array.length;
    console.log(length_name_of_the_student_array);

    for (var k=0; k<length_name_of_the_student_array; k++)
    {
        student_display_array.push("<h4> Name-"+ name_of_the_student_array[k]+"</h4>");
        console.log(student_display_array);
    }

    console.log(student_display_array);
    document.getElementById("display_with_commas").innerHTML=student_display_array;

    var remove_commas=student_display_array.join("");
    document.getElementById("display_without_commas").innerHTML=remove_commas;
    
    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorti(){
    name_of_the_student_array.sort()
    console.log(name_of_the_student_array)

    var display_student_array_sorting=[];

    var length_of_name_of_the_student_array=name_of_the_student_array.length;
    console.log(length_name_of_the_student_array);

    for (let k = 0; k < length_of_name_of_the_student_array; k++) {
        display_student_array_sorting.push("<h4> Name -" + name_of_the_student_array[k] + "h4");
        console.log(display_student_array_sorting);
    }

    var remove_commas=student_display_array_sorting.join("");
    console.log(remove_commas);
    
    document.getElementById("display_without_commas").innerHTML=remove_commas;
}