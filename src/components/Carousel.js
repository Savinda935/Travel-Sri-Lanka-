import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselItems = [
    {
      id: 1,
      subtitle: "Sri Lanka Tourism",
      title: "Explore Sri Lanka",
      description: "Discover the beauty, heritage, and culture of the Pearl of the Indian Ocean. From ancient temples to pristine beaches.",
      buttonText: "Start Your Journey",
      image: "https://images.pexels.com/photos/991012/pexels-photo-991012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: 2,
      subtitle: "Paradise Found",
      title: "Experience Paradise",
      description: "From the beaches to the mountains, Sri Lanka offers it all. Immerse yourself in tropical beauty and rich culture.",
      buttonText: "Start Your Journey",
      image: "https://images.pexels.com/photos/921294/pexels-photo-921294.png?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
      id: 3,
      subtitle: "Adventure Awaits",
      title: "The grand moment",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      buttonText: "Explore the tour",
      image: "https://images.pexels.com/photos/92733/pexels-photo-92733.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
      id: 4,
      subtitle: "Scenic Views",
      title: "Tropical palms",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      buttonText: "Explore the palms",
      image: "https://images.pexels.com/photos/1008732/pexels-photo-1008732.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
      id: 5,
      subtitle: "Coastal Beauty",
      title: "Beach Paradise",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      buttonText: "Explore the beach",
      image: "https://images.pexels.com/photos/1029614/pexels-photo-1029614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const carouselStyles = {
    carousel: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#ffffff',
      margin: 0,
      padding: 0
    },
    carouselItem: {
      visibility: 'visible',
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      backgroundColor: '#ffffff',
      flexShrink: 0,
      zIndex: 0,
      transition: '0.6s all linear'
    },
    activeItem: {
      zIndex: 1,
      display: 'flex',
      visibility: 'visible'
    },
    carouselItemInfo: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      order: 1,
      left: 0,
      margin: 'auto',
      padding: '0 80px',
      width: '50%'
    },
    carouselItemImage: {
      width: '50%',
      height: '100%',
      order: 2,
      alignSelf: 'flex-end',
      flexBasis: '50%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      transform: 'translateX(100%)',
      transition: '0.6s all ease-in-out',
      borderRadius: '0'
    },
    activeImage: {
      transform: 'translateX(0)'
    },
    subtitle: {
      fontFamily: 'Poppins, sans-serif',
      letterSpacing: '3px',
      fontSize: '14px',
      textTransform: 'uppercase',
      margin: 0,
      color: '#333333',
      fontWeight: 700,
      transform: 'translateY(25%)',
      opacity: 0,
      visibility: 'hidden',
      transition: '0.4s all ease-in-out'
    },
    title: {
      margin: '15px 0 0 0',
      fontFamily: 'Poppins, serif',
      fontSize: '64px',
      lineHeight: '68px',
      letterSpacing: '2px',
      fontWeight: 700,
      color: '#1a1a1a',
      transform: 'translateY(25%)',
      opacity: 0,
      visibility: 'hidden',
      transition: '0.6s all ease-in-out'
    },
    description: {
      transform: 'translateY(25%)',
      opacity: 0,
      visibility: 'hidden',
      transition: '0.6s all ease-in-out',
      marginTop: '35px',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '15px',
      color: '#666666',
      lineHeight: '24px',
      marginBottom: '35px'
    },
    button: {
      width: '45%',
      color: '#ffffff',
      backgroundColor: '#333333',
      fontFamily: 'Poppins, sans-serif',
      letterSpacing: '2px',
      fontSize: '12px',
      textTransform: 'uppercase',
      margin: 0,
      fontWeight: 600,
      textDecoration: 'none',
      padding: '15px 25px',
      borderRadius: '25px',
      border: 'none',
      cursor: 'pointer',
      transform: 'translateY(25%)',
      opacity: 0,
      visibility: 'hidden',
      transition: '0.6s all ease-in-out',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
      display: 'inline-block',
      textAlign: 'center'
    },
    buttonHover: {
      backgroundColor: '#1a1a1a',
      transform: 'translateY(0) scale(1.05)',
      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.3)'
    },
    activeText: {
      transform: 'translateY(0)',
      opacity: 1,
      visibility: 'visible'
    },
    navigation: {
      position: 'absolute',
      right: 0,
      zIndex: 2,
      backgroundColor: '#f8f9fa',
      bottom: 30,
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
    },
    arrow: {
      cursor: 'pointer',
      display: 'inline-block',
      padding: '15px 20px',
      position: 'relative',
      color: '#333333',
      fontSize: '18px',
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      border: 'none',
      transition: '0.3s all ease',
      userSelect: 'none'
    },
    arrowHover: {
      backgroundColor: '#333333',
      color: '#ffffff'
    },
    arrowSeparator: {
      content: '',
      right: '-1px',
      position: 'absolute',
      width: '1px',
      backgroundColor: '#333333',
      height: '20px',
      top: '50%',
      marginTop: '-10px'
    }
  };

  return (
    <div style={carouselStyles.carousel}>
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          style={{
            ...carouselStyles.carouselItem,
            ...(index === currentSlide ? carouselStyles.activeItem : {})
          }}
        >
          <div style={carouselStyles.carouselItemInfo}>
            <p style={{
              ...carouselStyles.subtitle,
              ...(index === currentSlide ? carouselStyles.activeText : {})
            }}>
              {item.subtitle}
            </p>
            <h2 style={{
              ...carouselStyles.title,
              ...(index === currentSlide ? carouselStyles.activeText : {})
            }}>
              {item.title}
            </h2>
            <p style={{
              ...carouselStyles.description,
              ...(index === currentSlide ? carouselStyles.activeText : {})
            }}>
              {item.description}
            </p>
            <button
              style={{
                ...carouselStyles.button,
                ...(index === currentSlide ? carouselStyles.activeText : {})
              }}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, carouselStyles.buttonHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, {
                  backgroundColor: '#333333',
                  transform: 'translateY(0) scale(1)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                });
              }}
            >
              {item.buttonText}
            </button>
          </div>
          <div
            style={{
              ...carouselStyles.carouselItemImage,
              backgroundImage: `url(${item.image})`,
              ...(index === currentSlide ? carouselStyles.activeImage : {})
            }}
          />
        </div>
      ))}
      
      <nav style={carouselStyles.navigation}>
        <button
          style={carouselStyles.arrow}
          onClick={prevSlide}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, carouselStyles.arrowHover);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, {
              backgroundColor: '#333333',
              color: '#ffffff'
            });
          }}
        >
          ←
          <span style={carouselStyles.arrowSeparator}></span>
        </button>
        <button
          style={carouselStyles.arrow}
          onClick={nextSlide}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, carouselStyles.arrowHover);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, {
              backgroundColor: 'transparent',
              color: 'hsl(342, 92%, 46%)'
            });
          }}
        >
          →
        </button>
      </nav>
    </div>
  );
};

export default Carousel;