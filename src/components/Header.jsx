import Avatar from "../assets/img/Avatar.svg"
export default function Header({title}) {
    return (
        <>
        <header>
         <h1 className="header_title">{title}</h1>
         <img className="header_user_avatar" src={Avatar} alt="avatar" />
        </header>
        </>
    )
}