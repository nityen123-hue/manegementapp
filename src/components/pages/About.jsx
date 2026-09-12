function About() {
    return (
        <div className="container mt-4">

            <h4 className="mb-3 fs-2 fw-bold">
                About This App
            </h4>

            <p className="fs-4">
                This is a simple Task Manager app built with:
            </p>

            <ul>
                <li className="list-unstyled">- React (components, props, hooks)</li>
                <li className="list-unstyled">- Bootstrap (styling)</li>
                <li className="list-unstyled">- React Router (page navigation)</li>
                <li className="list-unstyled">- localStorage (data persistence)</li>
            </ul>

            <p className="text-secondary">
                Route: "/about"
            </p>

        </div>
    );
}

export default About; 