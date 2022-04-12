const houses = require('./db.json');

//create var to keep track of upcoming houses id and set equal to 4
let globalID = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex((elem) => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        const {id, address, price, imageURL} = req.body;
        let newHouse = {
            id: globalID,
            address,
            price,
            imageURL,
        }  
        houses.push(newHouse);
        globalID++;
        res.status(200).send(houses);

    },
    updateHouse: (req, res) => {
            const {id} = req.params;
            const {type} = req.body;

            let index = houses.findIndex(elem => +elem.id === +id);
            console.log(type)


            //edit this 
            if ( houses[index].price <= 10,000 && type === 'minus') {
                houses[index].price = 0;
                res.status(200).send(houses);
            } else if (type === 'plus') {
                houses[index].price += 10,000;
                res.status(200).send(houses)
            } else if (type === 'minus') {
                houses[index].price -=10000
                res.status(200).send(houses)
            } else {
                res.sendStatus(400).send('something is wrong..')
            }



        res.status(200).send(houses)
    }
}