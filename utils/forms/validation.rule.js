
const Validation =(value, rules, formObject)=>{
   let valid=true
    for (const rule in rules) {
       switch (rule) {
           case "isRequired":
              valid= valid&& isRequired(value)
              break;
            case "isEmail":
                valid= valid&&isEmail(value)
                break;
            case "minLength":
                valid= valid&& minLength(value, rules['minLength'])
                break;
            case "confirmPassword":
                valid = valid&&confirmPassword(value,formObject[rules['confirmPassword']].value)
                console.warn(valid)
                break;
           default:
             valid= true
       }
    }
    return  valid
}


export default Validation


const isRequired=(value)=>(
   !value? false : true   
)

const isEmail= (value) =>{
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}

const minLength= (value, length)=>(value.length>=length)

const confirmPassword=(value, passwordValue)=>(value===passwordValue)