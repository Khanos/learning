const fetchProducts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve([
                {id: 1, name: 'Product 1'},
                {id: 2, name: 'Product 2'},
                {id: 3, name: 'Product 3'}
            ]);
        } , 1000);
    });
}

const fetchReviews = async (productId) => {
    return new Promise((resolve, reject) => {
        const randomError = Math.random() > 0.5 ? true : false;
        if (randomError) {
            reject('Something went wrong');
        } else {
            setTimeout(()=> {
                resolve([
                    {id: 1, productId: productId, content: 'Review 1'},
                    {id: 2, productId: productId, content: 'Review 2'},
                    {id: 3, productId: productId, content: 'Review 3'}
                ]);
            } , 1000);
        }
    });
}

const fetchCategories = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve([
                {id: 1, name: 'Category 1'},
                {id: 2, name: 'Category 2'},
                {id: 3, name: 'Category 3'}
            ]);
        } , 1000);
    });
}

const fetchUsers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve([
                {id: 1, name: 'User 1'},
                {id: 2, name: 'User 2'},
                {id: 3, name: 'User 3'}
            ]);
        } , 1000);
    });
}

const promisesArray = [fetchProducts(), fetchReviews(1), fetchCategories(), fetchUsers()];

// Promise.all(promisesArray)
//     .then(values => {
//         console.log('Success: ', values);
//     })
//     .catch( error => {
//         console.log('Fail:', error);
    // });

Promise.allSettled(promisesArray)
    .then(values => {
        console.log('Success: ', JSON.stringify(values, null, 2));
    })
