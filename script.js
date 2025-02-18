
$('.testimonial__col_main_flex').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1265,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



$('.logo-slider').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  responsive: [
    {
        breakpoint: 1365,
        settings: {
            slidesToShow: 5
        }
    },
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2
          }
      }
  ]
});

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("stickyHeader");
  const bannerSection = document.querySelector(".banner_section");

  function updateMargin() {
      const headerHeight = header.offsetHeight;
      bannerSection.style.paddingTop = `${headerHeight}px`;
  }

  function handleScroll() {
      if (window.scrollY > 50) {
          header.classList.add("scrolled", "fade-in");
      } else {
          header.classList.remove("scrolled", "fade-in");
      }
  }

  // Run on load and resize
  updateMargin();
  window.addEventListener("resize", updateMargin);
  window.addEventListener("scroll", handleScroll);
});



document.getElementById("videoWrapper").addEventListener("click", function() {
  let video = document.getElementById("video");
  let coverImage = document.getElementById("coverImage");
  let videoWrapper = document.getElementById("videoWrapper");
  
  coverImage.style.display = "none";
  videoWrapper.style.display = "none";
  video.style.display = "block";
  video.play();
});





document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".counter");
    let observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let counter = entry.target;
                    let target = +counter.getAttribute("data-target");
                    let count = 0;
                    let duration = 2000; // Total animation duration in milliseconds
                    let increment = target / (duration / 50); // Adjust for slower counting

                    let updateCount = () => {
                        if (count < target) {
                            count += increment;
                            counter.textContent = Math.floor(count) + "+"; 
                            setTimeout(updateCount, 50); // Slower interval
                        } else {
                            counter.textContent = target + "+"; // Ensure final value
                        }
                    };

                    updateCount();
                    observer.unobserve(counter);
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});



