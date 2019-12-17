import React,{ useState } from 'react';
import { LayoutPage } from '@/pages/layout';
function HomePage() {
    const [ userName, setUserName ] = useState("admin");
    return (
        <div>
            welcom {userName} !
            <LayoutPage/>
        </div>
    )
    
}
export default HomePage;