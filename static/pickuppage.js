const id_index = 0
const name_index = 1
const price_index = 2
const quantity_index = 3
const orderer_index = 4
const location_index = 5
const batch_index = 6

function remove(id){
	let to_change = document.getElementById(id)
	to_change.innerHTML = "Accepted"
}