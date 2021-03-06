import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext } from '../Layout'
import SectionItemLoc from './SectionItemLoc'
import { useSection } from '../useSection'
import { useInView } from 'react-intersection-observer'

import * as S from './styled'

const SectionLocation = props => {
  const { locale } = React.useContext(LocaleContext)
  const nodes = useSection()

  const { rawData } = useStaticQuery(query)
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations
    }
  })

  const translations = simplified.filter(lang => lang.name === locale)[0]

  const translationEntries = Object.entries(translations.translations).filter(
    entry => entry[1] === props.title
  )
  const localeName = translationEntries[0][0]

  const localeSectionItems = nodes.filter(
    edge => edge.node.fields.locale === locale
  )

  const localeCurrentSection = localeSectionItems.filter(
    edge => edge.node.parent.sourceInstanceName === localeName
  )

  const [ref, inView, entry] = useInView({
    threshold: 0.8,
    rootMargin: '50px 20px 75px 30px',
    triggerOnce: true
  })

  return (
    <S.Wrapper>
      <S.Header>{props.title}</S.Header>
      <S.Content>
        {localeCurrentSection.map(item => {
          return (
            <SectionItemLoc
              key={item.node.frontmatter.title}
              item={item.node}
              inView={inView}
              ref={ref}
            />
          )
        })}
      </S.Content>
    </S.Wrapper>
  )
}

export default SectionLocation

const query = graphql`
  query getLocSectionNames {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            products
            services
            location
          }
        }
      }
    }
  }
`
