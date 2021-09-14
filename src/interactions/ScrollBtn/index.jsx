import React, { useState, useEffect } from 'react'


import { ScrollButton, ScrollButtonIcon } from "./styles"

export const ScrollBtn = ({

    showBelow
}) => {


    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll, { passive: true })
            return () => window.removeEventListener(`scroll`, handleScroll, { passive: true })
        }
    }, [])

    return (
        <div>
            {show &&
                <ScrollButton onClick={handleClick} aria-label="to top">
                    <ScrollButtonIcon />
                </ScrollButton>
            }
        </div>
    )
}

