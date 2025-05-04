{
    //
    const createArray = (...param: string[]): string[]=>{
        return param
    }
    
     const result = createArray('bangladesh','india')
    
   


     const createArrayWithGeneric = <T>(param:T):T[]=>{
        return [param]
     }

     type user ={
        name:string,
        id:number
     }

     const resGeneric = createArrayWithGeneric<number>(1)
    //  const resObject = createArrayWithGeneric<{name:string, id:number}>({name:'Nadim Nafi', id:1234})
     const resObject = createArrayWithGeneric<user>({name:'Nadim Nafi', id:1234})

     const createArrayWithTuple = <T,Q>(param1:T, param2:Q):[T,Q]=>{
        return [param1, param2]
     }
     const resTuple = createArrayWithTuple<string, number>('Bangladesh', 1971)
    


     const addCourseToStudent =<T>(student:T):T=>{
        const cousrName = "NLW"
        return {
            ...student,cousrName
        }
     }

     type Student ={
        name:string,
        id:number,
        age:number,
        isMarried: boolean
     }

     const resCourse = addCourseToStudent<Student>({name:'Nadim Nafi',id:1235, age:29, isMarried:false})
     console.log(resCourse)
    //
}