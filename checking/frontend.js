const axios = require('axios');

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:8000');
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
};

fetchData();