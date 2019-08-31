import {EmailRegex} from "../config"

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
            case "maxLength":
                valid= valid&& maxLength(value, rules['maxLength'])
                break;
            case "confirmPassword":
                valid = valid&&confirmPassword(value,formObject[rules['confirmPassword']].value)
                break;
           default:
             valid= true
       }
    }
    return  valid
}


export default Validation

const isRequired=(value)=>( !value? false : true )
const isEmail= (value) =>(EmailRegex.test(value))
const minLength= (value, length)=>(value.length>=length)
const maxLength= (value, length)=>(value.length<=length)
const confirmPassword=(value, passwordValue)=>(value===passwordValue)