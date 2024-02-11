export async function getPlayers() {
    const res = await fetch('https://amfoot39.ru/api/players')
    if (!res.ok) {
        console.log('Failed to fetch data')
    }
    const data = await res.json();
    return data;
}

export async function getEvents() {
    const res = await fetch('https://amfoot39.ru/api/events')
    if (!res.ok) {
        console.log('Failed to fetch data')
    }
    const data = await res.json();
    return data;
}

export async function getDocuments() {
    const res = await fetch('https://amfoot39.ru/api/documents')
    if (!res.ok) {
        console.log('Failed to fetch data')
    }
    const data = await res.json();
    return data;
}

export async function getNews() {
    const res = await fetch('https://amfoot39.ru/api/news')
    if (!res.ok) {
        console.log('Failed to fetch data')
    }
    const data = await res.json();
    return data;
}

// async function getContacts() {
//     const res = await fetch('https://amfoot39.ru/api/contacts')
//     if (!res.ok) {
//         console.log('Failed to fetch data')
//     }
//     const data = await res.json();
//     return data;
// }

// async function getGames() {
//     const res = await fetch('https://amfoot39.ru/api/games')
//     if (!res.ok) {
//         console.log('Failed to fetch data')
//     }
//     const data = await res.json();
//     return data;
// }