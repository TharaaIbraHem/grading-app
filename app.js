const yargs =require('yargs')
const students=require('./students')
yargs.command({
         command:'add',
         describe:'add new student',
         bilder:{
             id:{
                 describe:'this is id of student',
                 type:'number',
                 demandoption:true
             },
             name:{
                describe:'this is name of student',
                type:'string',
                demandoption:true
            },
            subject:{
                describe:'this is subject',
                type:'string',
                demandoption:true
            },
           grade:{
                describe:'this is grade of subject',
                type:'number',
                demandoption:true
            },
            comment:{
                describe:'this is comment of grade',
                type:'string',
                demandoption:false
            },
        },
         handler:(argv)=>{
            students.addStudent(argv.id,argv.name,argv.subject,argv.grade,argv.comment)
         }

 })
//////////////////////////////////////////////////
yargs.command({
      command:'delete',
      describe:'delete student',
      bilder:{
        id:{
            describe:'this is id of student to be deleted',
            type:'number',
            demandoption:true
        }
       
    },
      handler:(argv)=>{
          students.deleteStudent(argv.id)

      }
})




yargs.command({
    command:'find',
    describe:'find student',
    bilder:{
        id:{
            describe:'this is id of student to be found',
            type:'number',
            demandoption:true
        },
       
    },
    handler:(argv)=>{
        students.findStudent(argv.id)
    }
})


yargs.command({
    command:'list',
    describe:'student list',
    handler:()=>{
        students.studentsList()
    }
})
yargs.parse()