let input = process.argv.slice(2);

const timer = function(){
    for(let alarms of input){
        let alarm = Number(alarms);
        if(!isNaN(alarm)){
            if(alarm >= 0){
                setTimeout(() => {
                    // process.stdout.write('\x07');
                    console.log('BING!');
                }, alarm * 1000);
            }

        }
    }
}   

timer();


