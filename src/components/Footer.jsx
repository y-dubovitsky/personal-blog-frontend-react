export default function Footer() {

    const getCurrentTime = () => {
        return new Date().toLocaleDateString();
    }

    return(
        <div id="footer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequatur aliquid accusamus sit corrupti a amet blanditiis ea velit nisi.
            <div className="date">
                {getCurrentTime()}
            </div>
        </div>
    )
}