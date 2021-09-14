'use strict';

const sons={
	'N': 'boom.wav',
	'g': 'clap.wav',
	'U': 'hihat.wav',
	'n': 'kick.wav',
	'G': 'openhat.wav',
	'a': 'ride.wav',
	'D': 'snare.wav',
	'e': 'tink.wav',
	'V': 'tom.wav',

};

const criarDiv=(texto)=>{
	const div=document.createElement('div');
	div.classList.add('key');
	div.textContent=texto
	div.id=texto;
	document.getElementById('container').appendChild(div)
};

const exibirSons=(sons)=>Object.keys(sons).forEach(criarDiv)

const PaiSons=document.getElementById('container');

const torcarSom=(letra)=>{
	const audio=new Audio(`./sounds/${sons[letra]}`);
	audio.play();
}
const adicionarEfeito=(letra)=>document.getElementById(letra)
			.classList.add('active');

const removerFeito=(letra)=>{
	const div=document.getElementById(letra);
	const removeActive=()=>{div.classList.remove('active')}
	div.addEventListener('transitionend',removeActive)
};

const ativirDiv=(evento)=>{

	 const letra=evento.type=='click'?evento.target.id:evento.key.toUpperCase()

	 const letraPermida=sons.hasOwnProperty(letra);
	 if(letraPermida){
	 	adicionarEfeito(letra);
	 	torcarSom(letra);
	 	removerFeito(letra);
	 }
	
}
exibirSons(sons);
PaiSons.addEventListener('click',ativirDiv)

window.addEventListener('keydown',ativirDiv);


//implementacao do codigo
//PaiSons.addEventListener('mouseover',ativirDiv);
//PaiSons.addEventListener('mouseout',ativirDiv);