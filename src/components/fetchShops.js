
const URI = 'http://localhost/kairos_api/public';

export default {
    async fetchShops() {
        try {
            let response = await fetch('http://192.168.43.121/netmall_update/public/api/api/v1/shops');
            let responseJsonData = await response.json();
            return responseJsonData;
        }
        catch (e) {
            console.log(e)
            return 0;
        }
    },
    

}