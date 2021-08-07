import glob from 'glob';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (app) => {
	glob(`${__dirname}/controllers/**/*Routes.js`, {}, async (er, files) => {
		if (er) throw er;
		files.forEach((file) => {
            console.log(`file to load ${file}`);
            import(`file:///${file}`).then(mod => {
                mod.default(app)
        });
        });
	});
};