export const arrangeForm =(form)=>{
    let  newFormObject ={}
    let valid = true
    for (const key in form) {
            if (form[key].valid) {
                newFormObject[key] = form[key].value 
                valid= true  
            }
    }
    return  newFormObject
}