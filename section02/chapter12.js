function add(a, b){
    setTimeout(() => {
        const sum = a + b;
        console.log(sum);
    }, 3000);
};

add(1, 2, (value) => {console.log(value);});