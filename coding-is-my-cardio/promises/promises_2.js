const doSomethingAsync = (milliseconds) => {
    return new Promise((resolve, reject) => {
        const randomError = Math.random() > 0.5 ? true : false;
        if (randomError) {
            reject('Something went wrong');
        } else {
            setTimeout(()=> {
                resolve(`Resolved in ${milliseconds/1000} seconds`);
            }, milliseconds);
        }
    });
    
    
}

const init = async () => {
    console.log('Calling doSomethingAsync');
    try{
        const message = await doSomethingAsync(2000);
        console.log('Message: ', message);
    } catch(e) {
        console.log('Message: ', e);
    }
    console.log('Done calling doSomethingAsync');
    
}

init();