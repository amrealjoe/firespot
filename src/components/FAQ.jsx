import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 786px;
`
const Question = styled(Typography)`
    && {
        text-transform: capitalize;
        padding: 10px 0;
    }
`
const Answer = styled(Typography)`
    && {
        line-height: 1.2;
    }
`

const Section = styled.section`
`

const Note = styled.section`
    padding: 0 12px;
    border-left: 10px solid orange;
    margin: 17px;
`


function FAQ(props) {
    return (
        <Container>
            <Note>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, deleniti officia totam illum quidem blanditiis rem, obcaecati esse placeat laborum hic ducimus odio dolorum necessitatibus numquam sequi quod illo quaerat.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam doloribus distinctio ipsa, nesciunt numquam hic, error quae vero ea quaerat atque quis eaque adipisci repudiandae minima officiis ab natus praesentium.
            </Note>
            <Section>
                <Question variant="h6">What is the exact question really?</Question>
                <Answer variant='subtitle1'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, quidem. Enim qui magni amet praesentium libero omnis voluptatibus facilis ratione, error iste nostrum mollitia maiores aperiam ad cupiditate nesciunt id?
                </Answer>
            </Section>
            <Section>
                <Question variant="h6">What is the exact question really?</Question>
                <Answer variant='subtitle1'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, quidem. Enim qui magni amet praesentium libero omnis voluptatibus facilis ratione, error iste nostrum mollitia maiores aperiam ad cupiditate nesciunt id?
                </Answer>
            </Section>
        </Container>
    )
}

export default FAQ