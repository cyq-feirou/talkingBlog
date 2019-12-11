import React,{ useState } from 'react';
function HomePage() {
    const [ userName, setUserName ] = useState("admin");
    return (
        <div>
            welcom {userName} !
        </div>
    )
    
}
export default HomePage;