const id_index = 0
const name_index = 1
const price_index = 2
const quantity_index = 3
const orderer_index = 4
const location_index = 5
const batch_index = 6

let to_remove = document.getElementsByClassName("remove")

function remove(id){
	let tab = document.getElementById("tabli")
	let d_nested = document.getElementById(id);
	tab.removeChild(d_nested);
}

for(let i = 0; i < to_remove.length; i++)
to_remove[i].addEventListener('click', remove(4))