function timer1(){
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log('timer1')
        resolve(1)
    }, 5000);
    })
}

function timer2 (){
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log('timer2')
        resolve(2)
    }, 2000);
    })
}

const timerDelay = async ()=>{
    const a = await timer2();
    const b = await timer1();
    return a+b;
}

timerDelay().then(console.log)

async function double(a,b){
    a = await doubleNum(a);
    b = await doubleNum(b);
    return a+b
};

function doubleNum (num) {
    return new Promise(resolve => {
        setTimeout(resolve(num*2), 2000)
    })
}

double(2,3).then(resolve => console.log(resolve))