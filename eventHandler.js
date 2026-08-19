import EventEmitter from 'events';

export const eventEmitter = new EventEmitter();

eventEmitter.on('hashGenerated', (data) => {
    console.log('\n--- HASH WYGENEROWANY ---');
    console.log('Hash:', data.hash);
    console.log('Sól:', data.salt);
});