const fontSize = {
    xs: "10px",
    s: "clamp(0.75rem,1.5vmax,.8rem)",
    m: "clamp(0.75rem,1.5vmax,.8rem)",
    l: "clamp(0.75rem,1.5vmax,.8rem)",
    xl: "clamp(0.75rem,1.5vmax,.8rem)",
    xxl: "clamp(0.75rem,1.5vmax,.8rem)",
    footerIcon: "clamp(0.75rem,1.5vmax,.8rem)",
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
}

const textStyle = {
    textFamily: "'Ubuntu', sans-serif",
    letterSpacing: "0.1rem",
}

const border = {
    primary: "20px",
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
    burgerClose: "black",
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

    colors: {
        primary: "rgb(20, 9, 160)", /* blue */
        primaryLight: "#8C98FF",
        secondary: "#D4D4D4", /* light */
        secondaryLight: "#d4d4d01f", /* light */
        third: "#212121", /* dark */
        bottomNav: "rgba(0, 0, 0, .6)",
        heroBgThird: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.35) 15%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.15) 75%, rgba(255,255,255,0.35) 85%, rgba(255,255,255,1) 100%)",
        heroBgSecondary: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 15%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.35) 85%, rgba(0,0,0,1) 100%);",
        scrollBtn: "black",
        scrollBtnHover: "white",

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

    colors: {
        primary: "#8C98FF", /* blue */
        primaryLight: "rgb(20, 9, 160)",
        secondary: "#212121", /* dark */
        secondaryLight: "#00000075", /* light */
        third: "#D4D4D4", /* dark */
        thirdLight: "#d4d4d01f",
        bottomNav: "rgba(255, 255, 255, .6)",
        heroBgSecondary: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.35) 15%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.15) 75%, rgba(255,255,255,0.35) 85%, rgba(255,255,255,1) 100%)",
        heroBgThird: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 15%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.35) 85%, rgba(0,0,0,1) 100%);",
        scrollBtn: "black",
        scrollBtnHover: "white",
        burgerOpen: "blue",
        burgerClose: "red",

    }
};


export const fontSlanted = `font-family:'Caveat', cursive;`