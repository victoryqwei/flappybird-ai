function nextGeneration(organism) {

	calculateFitness();

	for (var i = 0; i < population; i++) {
		organism[i] = pickOne();
	}

	pipes = [new Pipe(getRandomInt(100, canvas.height - 100))]

	saved = [];
	score = 0;
	generation++;

	return organism;
}

function calculateFitness() {
	var sum = 0;
	for (var organism of saved) {
		sum += organism.score;
	}

	for (var organism of saved) {
		organism.fitness = organism.score / sum;
	}
}

function pickOne() {
	var index = 0;
	var r = Math.random() * 1;

	while (r > 0) {
		if (!saved[index]) {
			return;
		}
		r -= saved[index].fitness;
		index++;
	}

	index--;

	var organism = saved[index];

	var child = new Bird(50, 100, organism.brain.copy());
	child.mutate();
	return child;

}
