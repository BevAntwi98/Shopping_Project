

const Footer = () => {

    const myStyle = {
// position:"absolute",
// left:"0",
// bottom:"0",
// right:"0"
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        padding: "5px",
        fontFamily: "Sans-Serif",
        position: "absolute",
        left:0,
        bottom:0,
        right:0,
        position:"sticky"
    }

    return (
        <footer><h3 style={myStyle}> &copy; 2021 By Bev , Jeric , Ayisha and Bence</h3></footer>
    )
}

export default Footer