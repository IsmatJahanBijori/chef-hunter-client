// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
// import RecipeDetails from '../RecipeDetails/RecipeDetails';

const ChefsRecipe = () => {

    const chefsInfo = useLoaderData()
    return (
        <Container>
            <Card className='mt-5 p-5'>
                <Card.Img style={{ width: "1200px", height: '800px' }} variant="top" src={chefsInfo.picture} />
                <Card.Body style={{ fontFamily: 'Manrope', fontSize: '30px' }}>
                    <Card.Text>{chefsInfo.name}</Card.Text>
                    <Card.Text style={{ fontFamily: 'Manrope', fontSize: '20px' }}>{chefsInfo.bio}</Card.Text>
                    <Card.Text>Experience: {chefsInfo.experience}</Card.Text>
                    <Card.Text>Numbers of Recipes:: {chefsInfo.numberOfRecipes}</Card.Text>
                    <Card.Text>Likes: {chefsInfo.likes}</Card.Text>
                </Card.Body>
            </Card>

           {/* <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>{chefsInfo.recipes.map(recipe => console.log(recipe[0].name))}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
    </CardGroup>*/}
    {chefsInfo.recipes.map(recipe => <RecipeDetails key={recipe.recipes_id} recipe={recipe}></RecipeDetails> )}
    

        </Container>
    );
};

export default ChefsRecipe;
// console.log(recipe[0].name)