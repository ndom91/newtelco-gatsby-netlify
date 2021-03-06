import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import fetch from '../utils/fetch'
import { useQuery } from 'react-query'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Racks from '../components/Racks'

import * as S from '../components/Content/styled'

const SectionItem = props => {
  const post = props.data.markdownRemark
  const title = post.frontmatter.title

  const { status, data, error, isFetching } = useQuery('datacenters', () => {
    if (title === 'Colocation') {
      return fetch('https://newtelco.dev/.netlify/functions/netbox')
    }
  })
  return (
    <>
      <SEO title={post.frontmatter.title} />
      <S.Content>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <S.ContentHeader>{post.frontmatter.title}</S.ContentHeader>
          <S.ContentHtml dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        {post.frontmatter.title === 'Colocation' && (
          <S.Netbox className={isFetching ? 'loading' : ''}>
            {status === 'loading' ? (
              <S.LoaderWrapper>
                <Loader type='Puff' color='#67b24640' />
              </S.LoaderWrapper>
            ) : status === 'error' ? (
              <span>Error: {error.message}</span>
            ) : (
              data && (
                <Racks
                  datacenters={data.results
                    .filter(dc => dc.rack_count !== null)
                    .map(dc => {
                      return { value: dc.name, label: dc.name }
                    })}
                />
              )
            )}
          </S.Netbox>
        )}
      </S.Content>
    </>
  )
}

export const query = graphql`
  query SectionItem($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default SectionItem
