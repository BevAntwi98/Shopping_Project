


function Header(props) {

    return (
        <div>
            <header>
                <h1 style={{ textAlign: "left", width: "100px" }}>{props.name}</h1>
                <h4 style={{ textAlign: "right" }}>Electronics | Jewllery | Men's Clothing | Women's Clothing</h4>
            </header>
        </div>


    )
}

export default Header;