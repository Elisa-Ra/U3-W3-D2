import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleArticle from './SingleArticle'
import { type Article } from '../types'

const apiURL = "https://api.spaceflightnewsapi.net/v4/articles"

const FetchComponent = function () {
  const [articles, setArticles] = useState<Article[]>([])
 

  const getArticles = () => {
    // recupero i libri dall'API
    fetch(apiURL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Problema nel recupero dati')
        }
      })
      .then((allArticles) => {
        console.log(allArticles)
        setArticles(allArticles.results) // salvo i libri ottenuti nello state
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">ARTICOLI</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map((article) => (
          <Col xs={12} md={4} key={article.id}>
            <SingleArticle article={article} />
          </Col>
        ))}
      </Row>

    </Container>
  )
}

export default FetchComponent