import {Api} from './Api'
export const getEvents = async () => {
    const result = await Api.get("events.json")
    if(!!result.data.events) {
        const events = result.data.events
        events.forEach( element => {
            element.custom_data.sort((a,b) => {return a.key.localeCompare(b.key)})
        })
        const stores = events.filter( element => {return element.event === "comprou"})
        const products = events.filter( element => {return element.event === "comprou-produto"})
        stores.forEach(store => {
            store.products = []
            products.forEach(product => {
                if(product.custom_data[2].value === store.custom_data[1].value) {
                    store.products.push(product)
                }
            })
        })
        return stores
    }
    return null
}

