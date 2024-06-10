export const getData = async() =>{
    const response = await fetch('https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human'), method = 'GET';
    return await response.json();
}