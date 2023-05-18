 const greetings = {
	en: 'hello!',
  es: 'hola!'
};

export function load({ params }) {
	return {
		greeting: greetings[params.lang ?? 'en']
	};
}
