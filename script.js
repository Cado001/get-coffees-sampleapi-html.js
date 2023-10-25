// console.log('this is working')
 const allCoffees = window.document.getElementById("all-coffees")
 allCoffees.innerHTML = '<h2> hey class </h2>'

// fetch into from sample apis
// window fetch 
window.fetch('https://api.sampleapis.com/coffee/hot')
.then(res => res.json())  // converting response to json()
.then(data => {
    console.log(data)

    data.forEach((item) => {
        console.log('item ->', item)

        // item.innerHTML - no work

        const element = document.createElement('div')
        element.innerHTML = `<div>
        <img src='${item.image}' style='width:200px>'
        <h2>one item ok ${item.title}</h2>
        <p>${item.description}</p>
        <p>${item.ingredients}</p>
        <div>
        <div>`
        allCoffees.appendChild(element)
    })


})  // get clean data 
.catch(err => console.error(err))
// display all coffees into the our web 



