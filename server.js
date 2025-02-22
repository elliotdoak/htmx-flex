import express from 'express';  

const app = express();

// Set static folder
app.use(express.static('public'));
// Parse URL encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());


// Handle GET request for users
app.get('/users', async (req, res) => {
    // const users = [
    //     { id: 1, name: 'John Doe' },
    //     { id: 2, name: 'Micheal Scott' },
    //     { id: 3, name: 'Jim Halpert' },
    // ];

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    res.send(`
        <h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
            ${users.map(user => `<li>${user.name}</li>`).join('')}
        </ul>
    `);
});

// Start the server
app.listen(3000, () => {
    console.log('Aw yeah!! Servers running on http://localhost:3000/');
});