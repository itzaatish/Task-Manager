const value = async()=>{
    try {
        response = await axios.get("http://localhost:3000/tasks")
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }const axios = require('axios');
    axios.defaults.baseURL = 'http://localhost:5000';
    
    const fetchData = async () => {
      try {
        const response = await axios.get('/tasks'); // Use relative path
        const data = response.data;
        console.log('Data:', data);
        // Handle the data received from the server here
      } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
          console.error('HTTP error! Status:', error.response.status);
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          console.error('No response received. Request details:', error.request);
        } else {
          console.error('Request setup error:', error.message);
        }
      }
    };
    
    // Call the function
    fetchData();
    
}