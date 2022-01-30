import React from "react";

class Footer extends React.Component {
    state = {  } 
    render() { 
        return (
<footer>
<div class="footer_head">
<section>
<span><i class="fa fa-map-marker"></i></span>
<span>Netflix Inc, Canada</span>
</section>
<section>
<span><i class="fa fa-phone"></i></span>
<span>(00) 0000 0000</span>
</section>
<section>
<span><i class="fa fa-envelope"></i></span>
<span>info@netflix.com</span>
</section>
</div>
<span class="border-shape"></span>
<div class="bottom_content">
<section>
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
<a href="#"><i class="fa fa-telegram"></i></a>
</section>
<section>
<a href="#">Home</a>
<a href="#">About us</a>
<a href="#">Be a Member</a>
<a href="#">Shows</a>
<a href="#">Movies</a>
<a href="#">Contact Us</a>
</section>
</div>
<div class="copyright">
Copyright © 2022 Netflix - All rights reserved 
</div>
</footer>
        );
    }
}
 
export default Footer;