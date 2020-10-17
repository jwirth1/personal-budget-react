const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 30
        },
        {
            title: 'Rent',
            budget: 350
        },
        {
            title: 'Groceries',
            budget: 90
        },
        {
            title: 'Gas',
            budget: 50
        },
        {
            title: 'Dog food',
            budget: 50
        },
        {
            title: 'Internet',
            budget: 70
        },
        {
            title: 'Car Insurance',
            budget: 100
        },
        
    ]
}
app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('Example app listening at http;//localhost:${port}');
});