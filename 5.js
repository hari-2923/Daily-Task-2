let objSort = (input) => {
    let result = input.sort((a,b) => {
        return a.libID - b.libID
    })
    return result;
}

let library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        libID: 2
    },
    {
        title: "Walter Isaacson",
        author: "Steve Jobs",
        libID: 1
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libID: 3
    }
]

console.log((objSort(library)))