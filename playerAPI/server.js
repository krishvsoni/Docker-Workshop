import express from 'express';
import axios from 'axios';
const app =  express();



// firstName , lastName , imageUrl
app.use(express.json());

const fetch_player = async () => {
    const url = `https://api.cricktrade.co/api/player/getallplayers`;
    const response = await axios.get(url);
    return response.data;
};

app.get('/', async (req, res) => {
    try {
        const players = await fetch_player();
        let htmlResponse = '<html><body><h1>Players List</h1><ul>';
        players.forEach(player => {
            htmlResponse += `<li>${player.firstName} ${player.lastName} <img src="${player.imageUrl}" alt="${player.firstName} ${player.lastName}" /></li>`;
        });
        htmlResponse += '</ul></body></html>';
        res.send(htmlResponse);
    } catch (error) {
        res.status(500).send('Error fetching players');
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});