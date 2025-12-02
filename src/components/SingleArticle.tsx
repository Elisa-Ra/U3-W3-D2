import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { type Article } from "../types"

interface Props {
  article: Article
}

const SingleArticle = ({ article }: Props) => {
  return (
    <Card className="my-3 shadow-sm">
      <Card.Img  variant="top" src={article.image_url}  style={{ height: '18rem' }} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        {/* <Card.Text>
          Pubblicato il{" "}
         {article.published_at}
        </Card.Text> */}
        <Link to={`/articles/${article.id}`} className="btn btn-info">
          Leggi l'articolo
        </Link>
      </Card.Body>
    </Card>
  )
}

export default SingleArticle
