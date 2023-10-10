  fetch("https://api.unsplash.com/photos/?client_id=n53Sh2Wasyye0-2m4dsF23oVmb4MoOaaVcg3-PS-Sto")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let container = document.querySelector(".container");
      let img = document.createElement("img");
      img.setAttribute("src", data[i].urls.small);
      container.append(img);
    }
  });


