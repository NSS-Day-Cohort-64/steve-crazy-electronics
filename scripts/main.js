const container = document.querySelector("#container")

// Generate 11 random items from the database
const snacks = await fetch("http://localhost:8088/snacks").then(r=>r.json())
const electronics = await fetch("http://localhost:8088/electronics").then(r=>r.json())
const beachware = await fetch("http://localhost:8088/beachware").then(r=>r.json())

// There are 30 items in this array
const allItems = [...snacks, ...electronics, ...beachware]

// Create an array to store what will be in the ads
const salesItems = []

for (let i = 0; i < 11; i++) {
    const randomIndex = Math.floor(Math.random() * 29)

    // Get a random object from allItems
    const randomItem = allItems[randomIndex]

    // Add item at random index to salesItems
    salesItems.push(randomItem)
}

// Generate an <article class="ads"> as the container for all ads
const layout = `<article class="ads">
    ${
        salesItems.map(item => `<section class="ad">
            <header class="ad__header">${item.name}</header>
            <div class="ad__body">${item.description}</div>
            <footer class="ad__footer">Price: ${item.price}</footer>
        </section>`).join("")
    }
</article>`


container.innerHTML = layout

