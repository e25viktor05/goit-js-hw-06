// const findCategory = document.querySelectorAll('.item');                                    console.log('Number of categories:',findCategory.length);
// const newArray = [...findCategory].map(element => Category:${element.children[0].textContent}Elements: ${element.children[1].children.length}).join('');  
// console.log(newArray);
const findCategory = document.querySelectorAll('.item');                                    
 console.log('Number of categories:',findCategory.length);
const items = [...findCategory];
items.forEach((element) =>{
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.childElementCount);
    
});

// const listEl = document.querySelector("#categories");
// console.log("Number of categories:", listEl.childElementCount);
// const items = [...listEl.children];
// items.forEach((element) => {
//     console.log("Category:", element.firstElementChild.textContent);
//     console.log("Elements:", element.lastElementChild.childElementCount);
//   });