export function parseUrl(address) {
    try {
        const parsedUrl = new URL(address);

        console.log('\n--- INFORMACJE O URL ---');

        console.log('Protokół:', parsedUrl.protocol);
        console.log('Host:', parsedUrl.hostname);
        console.log('Port:', parsedUrl.port);
        console.log('Ścieżka:', parsedUrl.pathname);
        console.log('Parametry:', parsedUrl.search);
        console.log('Hash:', parsedUrl.hash);
    } catch (error) {
        console.log('Błąd: podano niepoprawny adres URL.');
    }
}