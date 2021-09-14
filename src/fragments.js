import { graphql } from "gatsby"

//main name = Ventusauta

export const fragments = graphql`


fragment FileFragmentImg on File {
  childImageSharp {
    gatsbyImageData
  }
}

fragment FileFragmentSvg on File {
  childSvg {
    content {
      data
    }
  }
}

fragment WpMultiboxFieldFragmentContent on WpMultiboxField {
  content
  type
}

fragment WpMultiboxFieldFragment on WpMultiboxField {
    content
    title
    type
    img {
      altText
      localFile {
        ...FileFragmentSvg
        ...FileFragmentImg
      }
    }
  }


  

fragment Paragraphs on WpVentusautamain {
        mainContent
        paragraphs {
          fieldsList {
            paragraph
          }
        }
}

fragment CommonContent on WpVentusautamain {
  order
  textHeader
  sectionTitle
}


fragment ErrorContent on WpVentusautamain {
    buttonText
    titleInfo
    infoText
}


fragment PolicyContent on WpVentusautamain {
    htmlContent
}

fragment FeaturesContent on WpVentusautamain {
  features1 {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
  features2 {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
  features3 {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
}



fragment LocationContent on WpVentusautamain {
  location_info {
    city
    street
    zipCode
  }
  location_map {
    urlAdres
    mapImage {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

fragment ContactContentHours on WpVentusautamain {

  openedHours {
    multiBox {
      ...WpMultiboxFieldFragmentContent
    }
  }

}

fragment ContactContent on WpVentusautamain {
  phone {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
  whatsapp {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
  mail {
    multiBox {
      ...WpMultiboxFieldFragment
    }
  }
}


 

fragment MenuThumbnail on File {
  childImageSharp {
    gatsbyImageData(layout: CONSTRAINED, quality: 90)
  }
}

fragment VentusautamenuPreviewContent on WpVentusautamenu {
    productName
    id
    components
    price
    currency
    mainImage {
      altText
      localFile {
        ...FileFragmentSvg
        ...FileFragmentImg
      }
    }
    quantity
    menuCategory
    properties {
      checkboxOptions {
        checked
        value
      }
    }
  }

fragment VentusautamenuPreviewContentOld on WpVentusautamenu {
      title
      menu_category {
        promotion
        menuCategory
        fieldGroupName
        kindCategory
      }
      menu_details {
        quantity
        price
        components
      }
      featuredImage {
        node {
          altText
          localFile {
            ...MenuThumbnail
          }
          altText
        }
      }
}

fragment DishphotoPreviewContent on WpDishphoto {
  title
  category {
    photoCategory
  }
  featuredImage {
    node {
      altText
      localFile {
        ...MenuThumbnail
      }
      altText
    }
  }
}




  fragment HeroImage on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, quality: 90)
    }
  }


  fragment Thumbnail on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, quality: 90)
    }
  }


  fragment NavpageContent on WpNavpage {
    uri
    title
    content
  }

 

  
`
