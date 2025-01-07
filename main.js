const container = document.querySelector('#galery');
const besar = document.querySelector('#besar');
const tumbs = document.querySelectorAll('#tumbs')

container.addEventListener('click', function(even){
    if(even.target.id == 'tumbs'){
        besar.src = even.target.src;    
        besar.classList.add('fade');
        setTimeout(function(){
            besar.classList.remove('fade')
        }, 500);

        tumbs.forEach(function(er){
            if(er.classList.contains('active')){
                er.classList.remove('active');
            }
        });
        even.target.classList.add('active');
    };

});