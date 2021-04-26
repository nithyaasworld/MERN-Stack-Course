import './styles.css';
import UserCard from './UserCard';
import users from './users';
function Home() {
    return (
        <>
            <h1>Users at Acme Inc.</h1>
            <div className="user-card-container">
            {users.map((user)=> <UserCard email = {user.email} img= {user.picture.thumbnail} name = {user.name.title + " " + user.name.first + user.name.last} />)}
            </div>
        </>
    )
}
export default Home;