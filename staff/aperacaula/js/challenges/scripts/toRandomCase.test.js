try{
    var count=toRandomCase(56)
}catch(err){
    err=1;
}finally{
    console.log('This should deliver an error', err!== undefined, err)
}
