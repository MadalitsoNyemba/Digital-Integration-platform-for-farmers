
const URI = 'http://localhost/kairos_api/public';

export default {
    async fetchFarmers() {
        try {
            let response = await fetch('http://192.168.43.121/dip-api/public/api/api/v1/farmers');
            let responseJsonData = await response.json();
            return responseJsonData;
        }
        catch (e) {
            console.log(e)
            return 0;
        }
    },
    

}