
const Slider = () => {
return(
<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="5000">

  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>

  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="/Assets/Home Banners_converted.png" alt="Chania" width='100%'/>
    </div>

    <div class="item">
      <img src="/Assets/Home Banners_converted2.png" alt="Chania" width='100%' />
    </div>
  
    <div class="item">
      <img src="/Assets/Home Banners_converted3.png" alt="Flower" width='100%' />
    </div>

    <div class="item">
      <img src="/Assets/Home Banners_converted4.png" alt='4' width="460" height="345" />
    </div>
  </div>

  
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>)
}
export default Slider;
