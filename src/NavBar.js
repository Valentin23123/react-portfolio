import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function NavBar()
{

    return <nav className="nav">
      
        <ul>
            <CustomLink to="/">ABOUT ME</CustomLink>
            <CustomLink to="/projects">PROJECTS</CustomLink>
            <CustomLink to="/contact">CONTACT ME</CustomLink>
            <CustomLink to="/addproject">ADD PROJECT</CustomLink>
        </ul>
    </nav>
}


function CustomLink({to, children, ...props})
{
  const resolvedPath=useResolvedPath(to)
  const isActive=useMatch({path: resolvedPath.pathname, end: true})
    
return(
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
    </li>
)
}