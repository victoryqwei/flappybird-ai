var trainingData = [
	{
		inputs: [1, 0],
		targets: [1]
	},
	{
		inputs: [0, 1],
		targets: [1]
	},
	{
		inputs: [0, 0],
		targets: [0]
	},
	{
		inputs: [1, 1],
		targets: [0]
	}
]

var nn = new NeuralNetwork(2, 2, 1);

for (var i = 0; i < 50000; i++) {
	var random = Math.floor(Math.random() * trainingData.length);
	nn.train(trainingData[random].inputs, trainingData[random].targets);
}

console.log(nn.feedForward([1, 0]));
console.log(nn.feedForward([0, 1]));
console.log(nn.feedForward([1, 1]));
console.log(nn.feedForward([0, 0]));