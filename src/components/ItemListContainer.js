import ItemList from './ItemList'
import {fetchData} from '../data/items';
import {useState , useEffect} from 'react'
import NoHayElementos from './NoHayElementos';
import { useParams } from 'react-router-dom';

function ItemListContainer () {
    
    let {typeP, descripcion} = useParams();

    const [state, setState] = useState([])
    useEffect(()=>{
        fetchData(typeP, descripcion).then((value)=>{ 
            setState(value)
        })
    })
    console.log(state)
    
    return (
        <div className="ItemListContainer">            
            {state.length>0?<ItemList items={state}/>:<NoHayElementos/>}             
        </div> 
    )
}
export default ItemListContainer;