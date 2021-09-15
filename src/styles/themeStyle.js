

const defaultFontSize = {
    p: "clamp(0.75rem,1.4vw,1rem)",
    span: "clamp(0.75rem,1.4vw,1.3rem)",
    em: "clamp(0.75rem,1.4vw,1.5rem)",
    li: "clamp(0.75rem,1.3vw, 2rem)",
    h1: "clamp(1.5rem, 3.0vw, 4rem)",
    h2: "clamp(1.3rem, 2.5vw, 3rem)",
    h3: "clamp(1rem,1.8vw,2.2rem)",
    h4: "clamp(1rem, 2vw, 2rem)",
    h5: "clamp(1rem, 2.4vw, 2rem)",
    h6: "clamp(1rem, 2vw, 2rem)",
}

const fontSize = {
    xs: "clamp(0.6rem,0.5vw,.9rem)",
    s: "clamp(.5rem,.8vw,1rem)",
    m: "clamp(1rem,1.4vw,1.5rem)",
    l: "clamp(1rem,2vw,2rem)",
    xl: "clamp(2rem,5vw,5rem)",
    xxl: "clamp(3rem,vw,8rem)",
    footerIcon: "clamp(0.75rem,2vw,1rem)",
    featuresrIcon: "clamp(2rem,12vw,8rem)",
    navSlogansmall: "8px",
    navSloganBig: "clamp(0.125rem,1vw,.8rem)",
    navBrandNamesmall: "14px",
    navBrandNameBig: "clamp(.8rem,2vw,1.5rem)",
    navButtons: "clamp(0.125rem,1vw,.8rem)"
}

const controls = {
    color: "white",
    fontSizeSmall: "2rem",
    opacity: ".8",
    transition: "1.2s",
    hoverColor: "black",
    hoverOpacity: ".5",
    fontSize: "3.3rem",
}


const transitions = {
    primary: "all .4s ease-in-out",
    easeIn: ".3s ease-in",
    easeOut: ".3s ease-out",
    easeInOut: ".5s ease-in-out"
}

const textStyle = {
    textFamily: "'Ubuntu', sans-serif",
    letterSpacing: "0.1rem",
}

const border = {
    primary: "0px",
    oval: "50px",
    sharp: "0px",
}

const device = {
    s: "576px",
    m: "768px",
    l: "992px",
    xl: "1200px",
    xxl: "1400px",
}

const btn = {
    borderStyle: "solid",
    borderSize: "4px",
    letterSpacing: "5px",
}

const fontWeight = {
    lxx: 900,
    lx: 800,
    l: 700,
    m: 600,
}

const padding = {
    s: "5px",
    m: "10px",
    l: "20px",
    xl: "40px",
}

const lineHeight = {
    s: "1em",
    m: "1.4em",
    l: "1.7em",
    xl: "2em",
}

const nav = {
    defaultBg: "white",
    scrollBg: "rgba(255,255,255,0.5)",
    burgerClose: "white",
    burgerOpen: "silver",
}

export const themeStyleDark = {
    fontSize,
    transitions,
    controls,
    textStyle,
    border,
    device,
    btn,
    fontWeight,
    padding,
    lineHeight,
    nav,
    defaultFontSize,

    colors: {
        primary: "#dcb800",  
        primaryLight: "#6a0097",
        secondary: "#000000", 
        secondaryLight: "#00000075", 
        third: "#ffffff", 
        moveFillBg: "linear-gradient(to bottom, #2e004c, orangered)",
        background: "#d1d1d1", 
        fontColor: "#161616", 
    },
};





export const themeStyleLight = {
    fontSize,
    transitions,
    controls,
    textStyle,
    border,
    device,
    btn,
    fontWeight,
    padding,
    lineHeight,
    nav,
    defaultFontSize,

    colors: {
        primary: "#6a0097", /* blue */
        primaryLight: "#dcb800",
        secondary: "#ffffff", /* light */
        secondaryLight: "#d4d4d099", /* light */
        third: "#000000", /* dark */
        moveFillBg: "linear-gradient(to bottom, #ff9700, #00ff34)",
        background: "#161616",
        fontColor: "#d1d1d1", 

    }
};


export const fontSlanted = `font-family:'Caveat', cursive;`


