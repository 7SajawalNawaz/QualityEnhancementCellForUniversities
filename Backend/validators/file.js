const fileValidationExtension = (ext) =>{
    if(ext=== '.pdf' || ext=== '.docx' || ext=== '.png' || ext=== '.jpg' || ext=== '.jpeg'){
        return true ;
    }
    else{
        return false ;
    }
}

module.exports = {fileValidationExtension};