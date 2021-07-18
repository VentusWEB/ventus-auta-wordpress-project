import React, { useState, useEffect } from 'react'

import { Transition, StyledBottomNav, ButtonsBox } from "./styles"

import { Button } from "components/common"

export const BottomNav = ({ hrefOne, hrefOneName, hrefTwo, hrefTwoName, contactData }) => {
    const [show, setShow] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top)
        setShow(document.body.getBoundingClientRect().top > scrollPos && (window.innerHeight + window.scrollY + 300) <= document.body.offsetHeight)

    }
    useEffect(() => {
        window.addEventListener(`scroll`, handleScroll, { passive: true })


        return () => window.removeEventListener(`scroll`, handleScroll, { passive: true })
    })

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.onscroll = function (ev) {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
                    setScrollPos(0)
                }
            };
        }
    }, [])

    return (
        <Transition>
            <StyledBottomNav className={show ? "active" : "hidden"}>
                <ButtonsBox>
                    {
                        contactData.map((item) => (
                            <a key={item} href={item.href}>
                                <Button secondaryBlack={item.style} >
                                    {item.content}
                                </Button>
                            </a>
                        ))
                    }
                </ButtonsBox>
            </StyledBottomNav>
        </Transition>
    );

}

