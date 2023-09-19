import React from 'react'

export default function ItemContainer({name, image_url, price, checkGrid}) {
    // TODO : change bg color of img
    // props.checkGrid == true : w-44, h-56
    // props.checkGrid == false : w-28, h-36

    return (
        <div className={`${checkGrid ? 'w-44' : 'w-28'} flex-none`}>
            <img className={`${checkGrid ? 'w-44' : 'w-28'} ${checkGrid ? 'h-56' : 'h-36'} object-cover bg-[#C0ACCA] rounded-lg`} alt="이미지" src={image_url}></img>
            <p className='font-bold'>{price}</p>
            <p className='truncate text-xs text-slate-500'>{name}</p>
        </div>
    )
}

// export default function ItemContainer(props) {
//     // TODO : change bg color of img
//     // props.checkGrid == true : w-44, h-56
//     // props.checkGrid == false : w-28, h-36

//     return (
//         <div className={`${props.checkGrid ? 'w-44' : 'w-28'} flex-none`}>
//             <img className={`${props.checkGrid ? 'w-44' : 'w-28'} ${props.checkGrid ? 'h-56' : 'h-36'} object-cover bg-[#C0ACCA] rounded-lg`} alt="이미지" src={props.image_url}></img>
//             <p className='font-bold'>{props.price}</p>
//             <p className='truncate text-xs text-slate-500'>{props.name}</p>
//         </div>
//     )
// }