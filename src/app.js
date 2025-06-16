const who = ["A two headed pinecone", "My neighbor's llama", "An invisible clown", "The ghost of my ex"];
const action = ["yelled at", "danced with", "threw spaghetti at", "sneezed on"];
const what = ["my sandwich", "my homework", "my favorite mug", "the TV"];
const where = ["in my house", "at the supermarket", "during a Zoom call", "in the bathtub"];

// Generar excusa aleatoria
function generateExcuse() {
    const w = who[Math.floor(Math.random() * who.length)];
    const a = action[Math.floor(Math.random() * action.length)];
    const obj = what[Math.floor(Math.random() * what.length)];
    const loc = where[Math.floor(Math.random() * where.length)];

    return `${w} ${a} ${obj} ${loc}`;
}

// Mostrar excusa en el HTML
document.getElementById("excuse").innerText = generateExcuse();