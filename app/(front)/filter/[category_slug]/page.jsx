import CardContainer from "../../components/card-container"
import { CategoriesList } from "../../components/categories-list"
import Heading from "../../components/heading"


const page = ({ params }) => {
  const { category_slug } = params
  return (
    <div>
      <Heading bg_color="bg-orange-700" title={`you searched for "${category_slug}"`} subtitle={`total ${category_slug} found is 0`} />

      <div className="flex flex-1 px-10 bg-pink-200 py-10 gap-5 md:flex-row flex-col">
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