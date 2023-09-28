import {star} from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
            src={imgURL}
            alt="customer"
            className="rounded-full w-[120px] h-[120px] object-cover"
        />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='flex justify-center items-center mt-3 gap-3'>
            <img
                src={star}
                width={24}
                height={24}
                alt="star"
                className="object-contain m-0"
            />
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <h3 className="mt-2 font-palanquin font-bold text-center text-3xl">{customerName}</h3>
    </div>
  )
}

export default ReviewCard