import { UserLayouts } from '@/layouts'
import Link from 'next/link'
import React, { useContext } from 'react'


const indexUser = () => {

  return (
    <div>
      <UserLayouts>
        <div className="bg-7">
          <h1 className="t-stroke"></h1>
        </div>
      </UserLayouts>
    </div>

  )
}

export default indexUser