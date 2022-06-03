const items = document.querySelector('#categories');
console.log("Number of categories:", items.children.length);

[...items.children].forEach(item => {
        const itemsTitle = item.querySelector('h2').textContent;
        console.log("Category:", itemsTitle);
    
        const itemsCategory = item.querySelectorAll('li');
        console.log("Elements:", itemsCategory.length);
    }
)