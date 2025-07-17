const generateCode =(codelength)=>{

    const numbers= String(Math.random()).split(".")[1].split("")
    const length = numbers.length
    let Vcode = ""

    if(!codelength){
        codelength=4
    }

    for (let i=0 ; i < codelength ; i++){
        Vcode = Vcode + numbers [length - (i+1)]
    }
    return Vcode

}
module.exports=generateCode;