let playerHealf = 100;
let playerGold = 0;
let playerLevel = 1;
let playerName = "";
let numberDef = 0;
let isGameOver = false;
const maxPlayerLevel = 5;
function generateGameLegend(playerName){
	return `Давным-давно в мире, окутанном тьмой и ужасом, жил молодой воин по имени ${playerName}. Он отправился в долгое и опасное путешествие, чтобы найти древний артефакт, который, как говорят легенды, может уничтожить всех злых демонов и вернуть мир к прежнему состоянию.
    ${playerName} был готов ко всем испытаниям, которые ему предстояли на его пути. Его путь был долгим и полным опасностей - он встретил множество врагов, которые хотели остановить его в поисках артефакта. ${playerName} был настолько смелым и умелым воином, что справлялся с каждым врагом на своем пути.
    Однажды он встретил злого короля, который хранил артефакт. В битве с королем, ${playerName} победил и вернул артефакт, и теперь он должен использовать его, чтобы уничтожить всех злых демонов и вернуть мир к прежнему состоянию.
    Теперь ${playerName} отправляется в последнее путешествие, чтобы уничтожить демонов и спасти мир. Его здоровье и богатство помогут ему в этом путешествии, но ему также придется принимать трудные решения и сражаться в жестоких битвах. Сможет ли ${playerName} победить всех демонов и вернуть мир к прежнему состоянию? Только время покажет.`;
}
function welcomePlayer(){
	let nameReceiverd = false;
	while (!nameReceiverd) {
		const nicename = prompt("");
		if (nicename === "" || nicename === null){
			alert("");
		} else {
			alert("");
			playerName = nicename;
			const legend = generateGameLegend(playerName);
			alert(legend);
			nameReceiverd = true;
		}
	}
}
function getRandomNamber(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function battle() {
	let enemyHealth = getRandomNamber (50,100);
	alert("");
	let isPlayerTurn = true;
	while (playerHealf > 0 && enemyHealth > 0 && !isGameOver) {
		if (isPlayerTurn) {
			let