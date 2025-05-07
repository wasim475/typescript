"use strict";
{
    //
    const createArray = (...param) => {
        return param;
    };
    const result = createArray('bangladesh', 'india');
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resGeneric = createArrayWithGeneric(1);
    //  const resObject = createArrayWithGeneric<{name:string, id:number}>({name:'Nadim Nafi', id:1234})
    const resObject = createArrayWithGeneric({ name: 'Nadim Nafi', id: 1234 });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resTuple = createArrayWithTuple('Bangladesh', 1971);
    const addCourseToStudent = (student) => {
        const cousrName = "NLW";
        return Object.assign(Object.assign({}, student), { cousrName });
    };
    const resCourse = addCourseToStudent({ name: 'Nadim Nafi', id: 1235, age: 29, isMarried: false });
    console.log(resCourse);
    //
}
