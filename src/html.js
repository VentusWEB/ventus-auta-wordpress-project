
import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        <!-- Yandex.Metrika counter -->
                        <script type="text/javascript" >
                            setTimeout(function(){
                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                           m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                        
                           ym(83027727, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:true,
                                ecommerce:"dataLayer"
                           });
                           }, 5000);
                        </script>
                        <noscript><div><img src="https://mc.yandex.ru/watch/83027727" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                        <!-- /Yandex.Metrika counter -->
            `
                    }}
                />
            </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
