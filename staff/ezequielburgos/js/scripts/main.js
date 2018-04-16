document.getElementById('my-input').addEventListener('submit', function(event){
    event.preventDefault();
    console.log(document.getElementById('my-input').value);   
});