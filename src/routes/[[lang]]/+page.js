 const greetings = {
	en: 'hello!',
	de: 'hallo!',
	fr: 'bonjour!',
   es: 'hola!'
};

export function load({ params }) {
	return {
		greeting: greetings[params.lang ?? 'en']
	};
}
