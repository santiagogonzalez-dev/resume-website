interface Greetings {
	[key: string]: string;
}

interface Params {
	lang?: string;
}

const greetings: Greetings = {
	en: 'Hello',
	es: 'Hola'
	// Add more greetings as needed
};

export function load({ params }: { params: Params }) {
	return {
		greeting: greetings[params.lang ?? 'en']
	};
}
