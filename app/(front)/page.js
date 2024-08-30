import { Banner } from "./components/banner"
import CardContainer from "./components/card-container"
import { CategoriesList } from "./components/categories-list"

const page = () => {
  return (
    <div>
      <Banner />
      <div className="flex flex-1 px-10 bg-pink-200 mt-10 py-5 gap-5 md:flex-row flex-col">
        <div className="w-3/12">
          <CategoriesList />
        </div>
        <div className="w-9/12">
          <CardContainer />
        </div>
      </div>
    </div>
  )
}

export default page