import EventEmitter from 'events';

export const eventEmitter = new EventEmitter();

eventEmitter.on('hashGenerated', (data) => {
    console.log('\nZdarzenie: hash został wygenerowany');
    console.log('Hash:', data.hash);
    console.log('Sól:', data.salt);
});