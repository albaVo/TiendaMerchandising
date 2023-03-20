import { NextPage } from "next";
import { PublicLayouts } from '@/layouts';

const indexPage: NextPage = () => {

  return (
    <PublicLayouts>
      <div className="bg-7">
          <h1 className="t-stroke"></h1>
      </div>
    </PublicLayouts>
  )
}

export default indexPage