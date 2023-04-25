import React, { useState } from 'react'

function ArrayHook() {
    const [items,setItems] = useState([])
    const AddItem = () =>
    {
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }

  return (
    <div>
        <button onClick={AddItem}> Add a number</button>
        <table>
        <td>
        {items.map(items =>(<tr key= {items.id}> Id:{items.id} Random Number:{items.value}</tr>))}
        </td>
        </table>
    </div>
  )
}

export default ArrayHook