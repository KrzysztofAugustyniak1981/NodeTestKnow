import { showSystemInfo } from './systemInfo.js';
import { parseUrl } from './urlParser.js';
import { generateHash } from './passwordHasher.js';
import { eventEmitter } from './eventHandler.js';

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n=== Menu ===');
    console.log('1. Wyświetl informacje o systemie');
    console.log('2. Parsuj URL');
    console.log('3. Generuj hash hasła');
    console.log('4. Wyjdź');
}

function askUser() {
    showMenu();

    rl.question('Wybierz opcję: ', (choice) => {

        if (choice === '1') {
            showSystemInfo();
            askUser();
        }

        else if (choice === '2') {
            rl.question('Podaj adres URL: ', (address) => {
                parseUrl(address);
                askUser();
            });
        }

        else if (choice === '3') {
            rl.question('Podaj hasło: ', (password) => {

                if (!password) {
                    console.log('Hasło nie może być puste.');
                    askUser();
                    return;
                }

                rl.question('Podaj sól lub zostaw puste: ', (salt) => {

                    try {
                        const result = generateHash(password, salt);

                        eventEmitter.emit('hashGenerated', result);
                    } catch (error) {
                        console.log('Wystąpił błąd podczas generowania hasha.');
                    }

                    askUser();
                });
            });
        }

        else if (choice === '4') {
            rl.close();
        }

        else {
            console.log('Niepoprawna opcja. Wybierz 1, 2, 3 lub 4.');
            askUser();
        }
    });
}

rl.on('close', () => {
    console.log('\nAplikacja została zamknięta.');
});

process.on('exit', () => {
    console.log('\nProces Node.js został zakończony.');
});

console.log('Argumenty programu:', process.argv);

askUser();