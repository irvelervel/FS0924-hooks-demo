// in questo componente useremo l'hook useEffect per replicare i più famosi
// metodi di lifecycle all'interno dei componenti a funzione

import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

// REGOLE DEGLI HOOKS:
// 1) possiamo usare gli hooks solamente all'interno dei componenti react a funzione
// 2) posizioniamo sempre le dichiarazioni degli hooks in cima al componente,
// prima del return statement, al di fuori di cicli, condizioni, funzioni etc.

const EffectExample = function () {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  // useEffect viene invocato automaticamente all'avvio del componente
  // useEffect viene invocato automaticamente quando lo stato del componente cambia
  // useEffect viene invocato automaticamente quando le props del componente cambiano
  //   ATTENZIONE AI CICLI INFINITI:
  useEffect(() => {
    //     // qui dentro ci andremo a mettere il codice che vogliamo eseguire
    console.log('EFFECT!')
    //     setCount((currentCount) => {
    //       return currentCount + 1
    //     })
  })

  // ma noi vorremmo eseguire ad es. un'operazione magari solo all'avvio...
  useEffect(() => {
    console.log('MI SVEGLIO SOLO QUANDO CAMBIA COUNT')
  }, [count])

  useEffect(() => {
    console.log('MI SVEGLIO SOLO QUANDO CAMBIA SHOW')
  }, [show])

  useEffect(() => {
    console.log('SONO COMPONENTDIDMOUNT')
    // a quest'ultimo useEffect sto dando una lista DI Z E R O motivi per
    // risvegliarsi! -> non si risveglierà mai a parte l'invocazione iniziale
    // === componentDidMount()
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Img variant="top" src="https://placedog.net/400/200" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  setCount((currentCount) => {
                    return currentCount + 1
                  })
                }}
              >
                Valore di count: {count}
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setShow((currentShow) => {
                    return !currentShow
                  })
                }}
              >
                Valore di show: {show}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default EffectExample
