import React, { useEffect, useState } from 'react'

function List({getItem}) {
    const [items , setItems] = useState([]);
    // console.log(getItem());
    useEffect(()=>{
        setItems(getItem());
        console.log("its running...");
    },[getItem])
  return (
    <div>
        {items.map((item,ind)=>{
            return <p key={ind}>{item}</p>
        })}
    </div>
  )
}

export default List