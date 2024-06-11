let x = document.getElementById("main");
let arr = ["https://i.pinimg.com/736x/b6/f8/f5/b6f8f5181e1b60005fc11ab2967d4fb8.jpg"

,"https://i.pinimg.com/736x/b6/f8/f5/b6f8f5181e1b60005fc11ab2967d4fb8.jpg"

,"https://i.pinimg.com/564x/06/ea/01/06ea018d5cd92a3c03eec5642c7ed36f.jpg"

,"https://i.pinimg.com/564x/42/03/82/420382dfe19ce8229f34a2199ff484c2.jpg"

,"https://i.pinimg.com/564x/9d/81/5c/9d815c030120681e6e8f57e73733314f.jpg"

,"https://i.pinimg.com/736x/1b/9a/3c/1b9a3c3aaa102c70e225d509a716db26.jpg"

,"https://i.pinimg.com/736x/1b/9a/3c/1b9a3c3aaa102c70e225d509a716db26.jpg"

,"https://i.pinimg.com/736x/1b/9a/3c/1b9a3c3aaa102c70e225d509a716db26.jpg"

,"https://i.pinimg.com/736x/1b/9a/3c/1b9a3c3aaa102c70e225d509a716db26.jpg",

"https://i.pinimg.com/564x/22/60/f6/2260f6d1b6f676514f956f7290eb4a0d.jpg"];




let s = "";
for(let i = 1 ; i < 66 ; i++){
    let r = Math.floor(Math.random()*10);
   s += `<div class="card"><img src=${arr[r]}>
   </div>`
    
}
x.innerHTML = s

// `<div class="card">
// <img src="https://i.pinimg.com/736x/8f/b7/84/8fb784746c1e62ea615f042b8f5d52d8.jpg">
// </div>`