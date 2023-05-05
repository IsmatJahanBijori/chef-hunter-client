// eslint-disable-next-line no-unused-vars
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaDownload } from "react-icons/fa";
const Blog = () => {
    return (
        <div className='p-5' style={{ fontFamily: 'Manrope', fontSize: '25px' }}>
        <p>In a Q&A blog post format, the blogger will literally be responding to questions in a single or series of posts. The inquiries might come from the general public and could be about the niche; they MUST be addressed because they are a crucial piece of information.</p>
        <FaDownload className='mb-5'/>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span className='fw-bold'>Tell us the differences between uncontrolled and controlled components.</span></Accordion.Header>
                    <Accordion.Body>
                        Controlled components are those whose state and behavior are under the parent components control. To modify their state and behavior, these components rely on props that are given down from the parent component. A component that receives its current value and update callback via props is said to be a controlled functional component. Components that control their own state on an internal level are referred to as uncontrolled components. A functional component that controls its own internal state is said to be uncontrolled.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><span className='fw-bold'>How to validate React props using PropTypes</span></Accordion.Header>
                    <Accordion.Body>
                        When someone call a component in React, can provide data to that component, such as numbers, texts, functions, objects, boolean, strings and arrays. You can pass data from one component to another if you have numerous components. When a component is called, you may add props to it exactly like you would send arguments to a conventional JavaScript function in order to pass them between components.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><span className='fw-bold'>Tell us the differences between uncontrolled and controlled components.</span></Accordion.Header>
                    <Accordion.Body>
                        The package that offers the JavaScript run-time environment is called NodeJS. It is a JavaScript framework that is primarily used for interacting with our applications backend or creating the backend using JavaScript. Express, on the other hand, is a framework that supports NodeJS and aids in handling requests and responses. It is a front-end JavaScript library. It is primarily employed in the development of our applications user interface or frontend.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><span className='fw-bold'>What is a custom hook, and why will you create a custom hook?</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        Reusable functions are hooks.
                        We can extract component logic into a custom Hook when it has to be used by numerous components. Reusability is provided by custom React JS hooks because once a custom hook is built, it can be used repeatedly, making the code cleaner and taking less time to write.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );

};

export default Blog;