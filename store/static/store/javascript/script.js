            let sliderImages = document.querySelectorAll('.slide'),
            arrowLeft = document.querySelector('#arrow-left'),
            arrowRight = document.querySelector('#arrow-right'),
            slider = document.querySelector('#slider')
            current = 0;

        //clear all Images
        function reset(){
            for(let i = 0; i < sliderImages.length; i++){
                sliderImages[i].style.display = 'none';
            }
        }

        //Initializes slider
        function startSlide(){
            reset();
            sliderImages[0].style.display = 'block';
        }
        
        //show prev
        function slideLeft(){
            reset();
            sliderImages[current - 1].style.display = 'block';
            current--;

        }
         
        //show Next
        function slideRight(){
            reset();
            sliderImages[current + 1].style.display = 'block';
            current++;
        }

        //Left arrow click
        arrowLeft.addEventListener('click', function(){
            if(current === 0){
                current = sliderImages.length;
            }
            slideLeft();
        });

        //Right Arrow CLick
        arrowRight.addEventListener('click', function(){
            if(current === sliderImages.length - 1){
                current = -1
            }
            slideRight();
        });
        startSlide();
        
        $(document).ready(function() {
            $('#autoWidth').lightSlider({
                autoWidth:true,
                loop:true,
                onSliderLoad: function() {
                    $('#autoWidth').removeClass('cS-hidden');
                } 
            });  
          });
        $(function(){

            var width = 720;
            var animationSpeed = 1000;
            var pause = 3000;
            var currentSlide = 1;

            var $slider = $('.ad-container');
            var $slideContainer = $slider.find('.ad-images');
            var $slides = $slideContainer.find('.ad-slide');

            var interval;
            function startSlider(){
                interval = setInterval(function(){
                    $slideContainer.animate({'margin-left': '-=1325px'}, animationSpeed, function()  {
                        currentSlide++;
                        if(currentSlide === $slides.length){
                            currentSlide = 1;
                            $slideContainer.css('margin-left', 0);
                        }

                    });
                },pause);

            }
            function stopSlider() {
                clearInterval(interval);
            }

            $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
            startSlider();
        });

        