// Nullable Types

function searchName(value:string | null) {
    if(value){
        console.log("searching")
    }else{
        console.log("Nothing to search")
    }
}

searchName("null")