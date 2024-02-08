import clsx from 'clsx';
import { Form, useActionData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function NewUser() {
    const navigate = useNavigate();
    const errors = useActionData();
    console.log('display errors ', errors);

/*
    useEffect(() => {
        //if there is not errors redirect-navigate to /users page
        if (errors === null) {
            console.log("navigate(/users)");
            navigate("/users");
        }
    },[errors]);
*/

    return (
        <Form method="post" action="/new-user">
            <div className="input-group mb-4">
            <span className="input-group-text" id="name">
                Name
            </span>
            <input
                type="text"
                name="name"
                className={clsx('form-control', errors?.name && 'is-invalid')}
                aria-label="name input"
                aria-describedby="nameFeedback"
            />
            <div id="usernameFeedback" className="invalid-tooltip">
                {errors?.name}
            </div>
            </div>
            <div className="input-group mb-4">
            <span className="input-group-text" id="username">
                Username
            </span>
            <input
                type="text"
                name="username"
                className={clsx('form-control', errors?.username && 'is-invalid')}
                aria-label="username input"
                aria-describedby="usernameFeedback"
            />
            <div id="usernameFeedback" className="invalid-tooltip">
                {errors?.username}
            </div>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="email">
                Email
            </span>
            <input
                type="text"
                name="email"
                className={clsx('form-control', errors?.email && 'is-invalid')}
                aria-label="Sizing example input"
                aria-describedby="emailFeedback"
            />
            <div id="emailFeedback" className="invalid-tooltip">
                {errors?.email}
            </div>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="street">
                Street
            </span>
            <input
                type="text"
                name="street"
                className={clsx('form-control', errors?.street && 'is-invalid')}
                aria-label="Sizing example input"
                aria-describedby="streetFeedback"
            />
            <div id="streetFeedback" className="invalid-tooltip">
                {errors?.street}
            </div>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="street-number">
                Number
            </span>
            <input
                type="text"
                name="street-number"
                className={clsx('form-control', errors?.streetNumber && 'is-invalid')}
                aria-label="Sizing example input"
                aria-describedby="street-number-feedback"
            />
            <div id="street-number-feedback" className="invalid-tooltip">
                {errors?.streetNumber}
            </div>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="city">
                City
            </span>
            <input
                type="text"
                name="city"
                className={clsx('form-control', errors?.city && 'is-invalid')}
                aria-label="Sizing example input"
                aria-describedby="cityFeedback"
            />
            <div id="cityFeedback" className="invalid-tooltip">
                {errors?.city}
            </div>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="zipcode">
                Zipcode
            </span>
            <input
                type="text"
                name="zipcode"
                className={clsx('form-control', errors?.zipcode && 'is-invalid')}
                aria-label="Sizing example input"
                aria-describedby="zipcodeFeedback"
            />
            <div id="zipcodeFeedback" className="invalid-tooltip">
                {errors?.zipcode}
            </div>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="phone">
                Phone
            </span>
            <input
                type="text"
                name="phone"
                className={clsx('form-control', errors?.phone && 'is-invalid')}
                aria-label="Sizing example input"
                aria-describedby="phoneFeedback"
            />
            <div id="phoneFeedback" className="invalid-tooltip">
                {errors?.phone}
            </div>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="website">
                Website
            </span>
            <input
                type="text"
                name="website"
                className={clsx('form-control', errors?.website && 'is-invalid')}
                aria-label="Sizing example input"
                aria-describedby="websiteFeeback"
            />
            <div id="websiteFeeback" className="invalid-tooltip">
                {errors?.website}
            </div>
            </div>
            <button type="submit" className="btn btn-outline-primary" name="submit">
            Submit
            </button>
        </Form>
    );
}


/*
Warning: Cannot update a component(`RouterProvider`) while rendering a different component(`NewUser`).
To locate the bad setState() call inside`NewUser`,
follow the stack trace as described in https://reactjs.org/link/setstate-in-render
NewUser@http://localhost:5173/src/pages-views/NewUser.jsx?t=1707325029056:22:20
RenderedRoute@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=6a7590ff:3550:7
Outlet@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=6a7590ff:3918:3
MainBody@http://localhost:5173/src/components/MainBody.jsx:21:15
RootLayout
RenderedRoute@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=6a7590ff:3550:7
RenderErrorBoundary@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=6a7590ff:3507:5
DataRoutes@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=6a7590ff:4660:7
Router@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=6a7590ff:3932:7
RouterProvider@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=6a7590ff:4477:7
App react-dom.development.js:86:29

​*/