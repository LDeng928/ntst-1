import { Link, routes } from '@redwoodjs/router'

import { useState, useEffect } from 'react'
import { useCart } from 'src/components/Cart'
import { truncate } from 'src/utils'

const ProductCard = ({ product }) => {
  const { name, description, imgUrl, price, tag } = product
  const { addItem } = useCart()
  const [carting, setCarting] = useState(false)
  const [extenddesc, setExtenddesc] = useState(false)

  let timer

  const onClick = () => {
    setCarting(true)
    timer = setTimeout(() => setCarting(false), 1000)
    addItem({ item: { ...product, price: price * 100 } })
  }

  useEffect(() => {
    return () => clearTimeout(timer)
  }, [timer])
  return (
    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
      <div className="p-6 flex flex-col items-center">
        <Link to={routes.productdetail({ id: product.id })}>

          <h2 className="mb-4 text-xl text-center font-semibold p-4 border border-ntst-white hover:bg-ntst-blue hover:text-ntst-white">
            {name}
          </h2>

          <img
            src={imgUrl}
            alt={tag}
            className="w-80 h-40 object-cover rounded-md"
          />


       
        </Link>
        <p className="text-center my-4 font-semibold">${price}</p>

        <button
          onClick={() => setExtenddesc(!extenddesc)}
          className="mb-2 p-1 has-tooltip"
        >
          {extenddesc ? description : truncate(description, 20)}{' '}
          <span className="tooltip p-1 rounded border border-gray-200 bg-gray-100 shadow-lg ml-4 text-sm">
            Expand
          </span>
        </button>

        <button
          className="bg-ntst-purple text-ntst-white font-semibold p-3 rounded-md hover:bg-ntst-white hover:text-ntst-blue"
          disabled={carting}
          onClick={() => onClick()}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
