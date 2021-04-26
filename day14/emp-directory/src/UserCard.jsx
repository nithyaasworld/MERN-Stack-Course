import './home.css';
function UserCard({name, email, img}) {
    return (
        <div className="user-card">
            <img src={img} alt="" />
            <div className="user-info">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default UserCard;