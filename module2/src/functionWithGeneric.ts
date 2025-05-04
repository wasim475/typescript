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
     console.log(resObject)
    //
}