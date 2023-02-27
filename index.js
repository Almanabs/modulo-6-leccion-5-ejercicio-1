import chalk from 'chalk';
import figlet from 'figlet';

figlet('JORGE', function(err, data) {
    if (err) {
        console.log('Algo salió mal...');
        console.dir(err);
        return;
    }
    console.log(chalk.blue.bold(data));
});
