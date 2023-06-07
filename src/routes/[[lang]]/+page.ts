import en from '../../lib/langs/en.json';
import es from '../../lib/langs/es.json';

interface Params {
	lang?: string;
}

export async function load({ params }: { params: Params }) {
	if (params.lang === 'es') {
		return es;
	} else {
		return en;
	}
}
