const URI = 'http://localhost/kairos_api/public';

export default {
    async fetchTrendingItems() {
        try {
            let response = await fetch('http://192.168.43.121/netmall_update/public/api/api/v1/items');
            let responseJsonData = await response.json();
            return responseJsonData;
        }
        catch (e) {
            console.log(e)
            return 0;
        }
    },
    async fetchCategories() {
        try {
            let response = await fetch('http://192.168.43.121/netmall_update/public/api/api/v1/categories');
            let responseJsonData = await response.json();
            return responseJsonData;
        }
        catch (e) {
            console.log(e)
            return 0;
        }
    },

}