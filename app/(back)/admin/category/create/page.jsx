import React from 'react'
import { CategoryForm } from './_components/categoryForm'
import { redirect } from 'next/navigation';
import DbConnect from '@/utils/dbConnect';

const page = () => {

  const handleInsertCategory = async (cat_title, cat_description) => {

    // connectin established
    DbConnect();

    let data = await Category.create({ cat_title, cat_description });

    redirect("/admin/category");

  }


  return (
    <div className='flex flex-1 justify-center'>
      <CategoryForm handleInsertCategory={async() => {
        "use server"
       await handleInsertCategory()
      }} />
    </div>
  )
}

export default page