import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { type Article } from "../types"

interface Props {
  article: Article
}

const SingleArticle = ({ article }: Props) => {
  return (
    <Card className="my-3 shadow-sm">
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          Pubblicato il{" "}
          {new Date(article.published_at).toLocaleDateString("it-IT", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </Card.Text>
        <Link to={`/articles/${article.id}`} className="btn btn-primary">
          Leggi l'articolo
        </Link>
      </Card.Body>
    </Card>
  )
}

export default SingleArticle
