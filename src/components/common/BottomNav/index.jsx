import React, { useState, useEffect } from 'react'

import uuid from 'react-uuid'

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

                {Object.keys(contactData).map(((keyName, i) => {

const objects = contactData[keyName].multiBox;

const objectTitles = objects.map((item, i) => {
  if (item['type'] == "content") {
    return item
  }
})//check for icon option just to be safe

const objectStyles = objects.map((item, i) => {
  if (item['type'] == "styl") {
    return item
  }
})
//check for content option just to be safe

const objectHrefs = objects.map((item, i) => {
  if (item['type'] == "href") {
    return item
  }
})
//check for content option just to be safe

const objectTitle = objectTitles
  .filter(item => item !== undefined)[0]['content']

const objectStyle = objectStyles
  .filter(item => item !== undefined)[0]['content']

const objectHref = objectHrefs
  .filter(item => item !== undefined)[0]['content']

return (
  <>
                            <a key={uuid()} href={objectHref}>
                                <Button  objectStyle={objectStyle} >
                                    {objectTitle}
                                </Button>
                            </a>
  </>
)

}))
}
                
                </ButtonsBox>
            </StyledBottomNav>
        </Transition>
    );

}

