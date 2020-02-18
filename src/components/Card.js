import React from 'react'
import {TimelineEvent} from 'react-event-timeline'
import {check, money, place, calendar, clock} from '../assets/'
import {convertTimestampToDate, convertToLocalTime, getTotalPrice} from '../utils/Utils'
import './Card.css'; 

const Card = props => {
    const stores = props.stores
    function renderTitle(store) {
        return(
            <div className="Card-title main-title">
                <img src={calendar} className="Card-icon" alt="Data"/>
                {!!store && convertTimestampToDate(store.timestamp)}
            <img src={clock} className="Card-icon" alt="Horario"/>
                {!!store && convertToLocalTime(store.timestamp)}
                <img src={place} className="Card-icon" alt="Localização"/>
                {!!store && store.custom_data[0].value}
                <img src={money} className="Card-icon" alt="Preço total"/>
                {!!store && getTotalPrice(store.products)}
            </div> 
        )
    }
    function renderItem(items, type){
        return (
            items.map((item, index) => {
               return <p key={index} className="Card-type-item">{type === "price" ? "R$" + item.custom_data[1].value + ",00" : item.custom_data[0].value}</p>
            })
        )
    }
    function renderList(stores){
        return (
            stores.map((store, index) => {
                return (
                    <TimelineEvent key={index} cardHeaderStyle={{backgroundColor:"#FFFFFF"}}
                    contentStyle={{backgroundColor:"#F8F8F8"}} container="card" bubbleStyle={{borderColor:'transparent'}} title={renderTitle(store)}
                    icon={<img src={check} style={{width: "38px", height: "38px"}} alt="Icone de verificação"/>}>
                        <div className="Card-title">
                            <div className="Card-type">
                                <p className="Card-type-title">Produto</p>
                                {console.log(store.products)}
                                {renderItem(store.products, "product")}
                            </div>
                            <div className="Card-type">
                                <p className="Card-type-title">Preço</p>
                                {renderItem(store.products, "price")}
                            </div>
                        </div>
                    </TimelineEvent>
                )
            })
        )
    }
    return(
        renderList(stores)
    )
}
export default Card