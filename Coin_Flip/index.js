
    // function flip_coin (){
    //   const image = ["coinheads.jpg", "cointails.jpg"];
    //   let randomImage = Math.floor(Math.random()*image.length);
    //   document.getElementById("flipcoin").src = image[randomImage];
    // }

    let btn = document.getElementById("btn")

    btn.onclick = function (){
      const image = ["coinheads.jpg", "cointails.jpg"];
      let randomImage = Math.floor(Math.random()*image.length);
      document.getElementById("flipcoin").src = image[randomImage];
    }



   // "onclick" = flip_coin();