//store Token/username => session storage
export  function authenticate(response,next){
    if(window !== 'undefined'){
        //store data to session storage
        
        sessionStorage.setItem("token",response.data.token)
        sessionStorage.setItem("username",response.data.username)
    }
    next()
}

export const getToken=()=>{
    if (window !== "undefined") {
        if(sessionStorage.getItem("token")){
            return sessionStorage.getItem("token")
        }else{
            return false
        }
    }
}
export const getUsername=()=>{
    if (window !== "undefined") {
        if(sessionStorage.getItem("username")){
            return sessionStorage.getItem("username")
        }else{
            return false
        }
    }
}
export const logout=(next)=>{
    if (window !== "undefined") {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("username")
    }
    next()
}