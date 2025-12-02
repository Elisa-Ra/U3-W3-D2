import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Spinner, Alert, Card } from 'react-bootstrap'
import { type Article } from '../types'

const apiURL = "https://api.spaceflightnewsapi.net/v4/articles"

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`${apiURL}/${id}`)
        if (!res.ok) throw new Error('Errore nel recupero articolo')
        const data: Article = await res.json()
        setArticle(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }
    fetchArticle()
  }, [id])

  if (loading) return <Spinner animation="border" />
  if (error) return <Alert variant="danger">{error}</Alert>

  return (
    <Container className="my-4">
      {article && (
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Card>
              <Card.Img variant="top" src={article.image_url} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  Pubblicato il{' '}
                  {new Date(article.published_at).toLocaleDateString('it-IT', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </Card.Text>
                <Card.Text><strong>News Site:</strong> {article.news_site}</Card.Text>
                <Card.Text><strong>Summary:</strong> {article.summary}</Card.Text>
                <Card.Text>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Leggi l’articolo completo
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default ArticleDetail
