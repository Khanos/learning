const doSomethingAsync = (milliseconds) => {
    return new Promise((resolve, reject) => {
        try{
            const randomError = Math.random() > 0.5 ? true : false;
            if (randomError) {
                throw new Error('Something went wrong');
            } else {
                setTimeout(()=> {
                    resolve(`Resolved in ${milliseconds/1000} seconds`);
                }, milliseconds);
            }
        }catch(e){
            reject(e.message);
        }
    });
    
    
}

doSomethingAsync(2000)
    .then((response)=> {
        console.log(`Success. ${response}`);
    })
    .catch((response)=> {
        console.log(`Fail. Error: ${response}`);
    });