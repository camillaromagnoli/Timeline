
    export function convertTimestampToDate(strDate){
        return new Date(strDate).toLocaleDateString()
    }
    export function convertToLocalTime(strDate){
        const date = new Date(strDate)
        return date.getHours() + ":" + date.getMinutes()
    }
    export function getTotalPrice(... products){
        var total = 0
        products[0].forEach(product => {
            total += product.custom_data[1].value
        })
        const strLabel = "R$" + total + ",00"
        return strLabel
    }