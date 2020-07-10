export default function PhotoBox() {
    return (
    <ul className="photos">
        <li>
            <div className="photo">
                <div className="photo-header">
                <div className="photo-owner">Owner 1</div>
                <div className="photo-title">title 1</div>
                </div>
                <img className="photo-img" src={puppy1}></img>
                <div className="photo-description">description 1</div>
            </div>
        </li>
    </ul>
    )
}
