import React,{ useState } from 'react';
import Layout from '@/pages/layout';
function HomePage() {
    const [ userName, setUserName ] = useState("admin");
    return (
        <div>
            welcom {userName} !
            <Layout/>
        </div>
    )
    
}
export default HomePage;