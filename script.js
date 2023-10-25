function insert_Row() {
  //Write your code here
const row = document.createElement("tr");
const cell1 = document.createElement("td");
cell1.innerText = "New Cell1";
const cell2 = document.createElement("td");
cell2.innerText = "New Cell2";
row.appendChild(cell1);
row.appendChild(cell2);

const table = document.getElementById("sampleTable");
table.insertBefore(row,table.children[0]);
}