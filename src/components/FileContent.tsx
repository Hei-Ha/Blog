'use client'
import { useParams } from 'next/navigation'
import RenderMDX from "@src/components/RenderMDX";
export default () => {
    const urlMsg = useParams();
    const fileCategory = urlMsg.fileMsg[0];
    const filename = decodeURI(urlMsg.fileMsg[1]);
    
    return <div>
        {/*<RenderMDX source={'#h1'}/>*/}
    </div>
}