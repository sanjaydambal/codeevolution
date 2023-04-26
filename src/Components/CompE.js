import React, { useContext } from 'react'
import CompF from './CompF'
import { channelContext, userContext } from '../App'

function CompE() {
    const user = useContext(userContext)
    const channel = useContext(channelContext)
  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default CompE