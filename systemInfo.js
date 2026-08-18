import os from 'os';

export function showSystemInfo() {
    const totalMemoryGB = os.totalmem() / 1024 / 1024 / 1024;
    const freeMemoryGB = os.freemem() / 1024 / 1024 / 1024;

    console.log('\n--- INFORMACJE O SYSTEMIE ---');

    console.log('Nazwa komputera:', os.hostname());
    console.log('System operacyjny:', os.type());
    console.log('Wersja systemu:', os.release());
    console.log('Architektura:', os.arch());

    console.log('Całkowita pamięć RAM:', totalMemoryGB.toFixed(2), 'GB');
    console.log('Wolna pamięć RAM:', freeMemoryGB.toFixed(2), 'GB');

    console.log('Czas działania systemu:', os.uptime(), 'sekund');
}