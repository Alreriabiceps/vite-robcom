import React from 'react'

const Footer = () => {
return (
    <div style={{width: '100%' }}>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-10">
<aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Robcom</p>
    <a href='https://github.com/Alreriabiceps'>click me for website inquiry</a> 
</aside>
</footer>
    </div>
)
}

export default Footer