
const fs =require('fs')


const addStudent =(id,name,subject,grade,comment)=>{
    const students = loadStudent()
    const daplicateId = students.filter((student)=>{

        return student.id===id

    })
    console.log(daplicateId)
    if(daplicateId.length===0){
    students.push({
        id:id,
        name:name,
        subject:subject,
        grade:grade,
        comment:comment

    })
////////////////////////////////////////////////////////////////
saveStudents(students)
console.log('save sucssefuly')

    }
    else{
        console.log("error exsesting student")
    }
}
  ///////////////////////////////////////////////////////////////////////////
const loadStudent = ()=>{
    try{
const dataBuffer = fs.readFileSync('students.json').toString()
return JSON.parse(dataBuffer)
    }

    catch (e){
        return []
    }
}

////////////////////////////////////////////////////////////////////
const saveStudents = (students) =>{
    const saveData = JSON.stringify(students)  
    fs.writeFileSync('students.json',saveData)
}
////////////////////////////////////////////////////////////////
const deleteStudent = (id) =>{
    const students = loadStudent()

    const studentsToKeep = students.filter((student)=>{
       
    
        return student.id !== id
    })
    console.log(studentsToKeep)
    saveStudents(studentsToKeep)
    console.log('Deleted')
}
//////////////////////////////////////////////////////////////////
const findStudent= (id) =>{
    const students = loadStudent()
    const student = students.find((student)=>{
        
        return student.id === id
    })
    
    if(student){
        console.log(student.name,student.subject,student.grade,student.comment)
    }
    else{
        console.log('Not found')
    }
}
/////////////////////////////////////////////////

const studentsList = () =>{
    const students = loadStudent()
    students.forEach((student)=>{
        console.log(student.id,student.name,student.grade)
    })
}

module.exports = {
    addStudent,deleteStudent,findStudent,studentsList
    
}