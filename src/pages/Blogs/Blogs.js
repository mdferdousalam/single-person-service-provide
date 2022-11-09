import React from 'react';
import UseTitle from '../../hooks/UstTitle';

const Blogs = () => {
    UseTitle('Blogs')
    return (
        <div className='mb-96'>
            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference Between SQL and NoSQL ?
                </div>
                <div className="collapse-content">
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. </p>
                    <p>
                        SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
                        NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
                        Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.
                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is JWT and how does it works ?
                </div>
                <div className="collapse-content">
                    <p>
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                    </p>
                    <p>
                        JWT Works
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        Once decoded, you will get two JSON strings:

                        The header and the payload.
                        The signature.
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                    </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between JavaScript and Node.JS ?
                </div>
                <div className="collapse-content">
                    <p> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    <p>
                        JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

                        JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

                        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

                        JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development

                        JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
                        JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.
                    </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does Node.JS handle multiple request at the same time ?
                </div>
                <div className="collapse-content">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;