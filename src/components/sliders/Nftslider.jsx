import React, { useEffect, useRef, useState } from "react"

const sliderRotation = (nodes) =>{
    nodes.forEach( (child) => {
        if(child.classList.contains('active')){
            child.classList.remove('active')
            child.classList.add('prev')
        }else if(child.classList.contains('next')){
            child.classList.remove('next')
            child.classList.add('active')
        }else if(child.classList.contains('prev')){
            child.classList.remove('prev')
            child.classList.add('next')
        }
    })
}

const sliderInit = (nodes) =>{
    const length = nodes.length
    const activeIndex = length / 2
    nodes[activeIndex].classList.add('active')
    for(let i = 0; i<activeIndex; i++){
        nodes[i].classList.add('prev')
    }
    for(let i = activeIndex + 1; i<length; i++){
        nodes[i].classList.add('next')
    }
}

const sliderDots = (nodes) =>{
    let temp = []
    nodes.forEach((el, i) =>{
        temp.push(<button className={el.classList.contains('active') ? 'active' : ''}>{i+1}</button>)
    })

    return temp
}

const NftSlider = ({children}) =>{
    const sliderContainer = useRef(document.createElement("div"))
    const [dots, setDots]   = useState([])

    useEffect(() =>{
        sliderInit(sliderContainer.current.children[0].childNodes)
        setDots(sliderDots(sliderContainer.current.children[0].childNodes))
        setInterval(() =>{
            sliderRotation(sliderContainer.current.children[0].childNodes)
        },2000)
    },[])

    return (
        <div className="slider-nft" ref={sliderContainer}>
            <div className="nft-slider">
                { children }
            </div>
            <div className="nft-dots">
                {
                    dots.map( (el, i) => 
                        <React.Fragment key={i}>
                        {el}
                        </React.Fragment>    
                    )
                }
            </div>
        </div>
    )
}

export default NftSlider