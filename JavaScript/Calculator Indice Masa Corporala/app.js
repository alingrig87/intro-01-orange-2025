function calculeazaIMC() {
	var inaltimeInput = document.getElementById('inaltime');
	var inaltime = Number(inaltimeInput.value);

	var greutateInput = document.getElementById('greutate');
	var greutate = Number(greutateInput.value);

	var imc = (greutate / (inaltime * inaltime)).toFixed(2);

	var mesajDeOutput;
	var color;

	if (imc < 18.5) {
		mesajDeOutput = 'IMC: ' + imc + ' Subponderal';
		color = 'blue';
	} else if (imc >= 18.5 && imc <= 25) {
		mesajDeOutput = 'IMC: ' + imc + ' Greutate normala';
		color = 'green';
	} else if (imc > 25 && imc < 30) {
		mesajDeOutput = 'IMC: ' + imc + ' Supraponderal';
		color = 'orange';
	} else {
		mesajDeOutput = 'IMC: ' + imc + ' Obez';
		color = 'red';
	}

	var paragraf = document.getElementById('output');
	paragraf.innerHTML = mesajDeOutput;
	paragraf.style.backgroundColor = color;
	paragraf.style.color = 'white';
	paragraf.style.borderRadius = '5px';
	paragraf.style.padding = '10px';
}
