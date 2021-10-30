import axios from 'axios'


// export const sendGetRequest = async () => {
//     try {
//         const resp = await axios.get('http://localhost:3001/lol');
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };

// sendGetRequest();



export const getKek = async () => {
const res = await axios.get('http://localhost:3001/lol')
console.log(res);
return res.data;
app.get('/lol', function(req, res) {

        const HTML_DIR = path.join('/work/front/html/')
    app.use(express.static(HTML_DIR))
        res.sendFile('/work/front/html/TO DO.html');
    });

}

sendGetRequest();