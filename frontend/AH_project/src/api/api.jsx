export async function getPlayers() {
    const res = await fetch('https://amfoot39.ru/api/players')
    if (!res.ok) {
        console.log('Failed to fetch data')
    }
    const data = await res.json();
    return data;
}