import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import r from "./assets/r.png";
import om from "./assets/om.png";
import tis from "./assets/tis.png";
import tag from "./assets/tag1.png";
import cit from "./assets/cit.png";
import fos from "./assets/fos.png";
import se from "./assets/se.png";




const watches = [
  {
    id: 1,
    brand: "ROLEX",
    name: "SUBMARINER",
    price: "₹9,50,000",
    image:
      r,
    link: "https://www.rolex.com/en-in/watches/find-rolex",
  },

  {
    id: 2,
    brand: "OMEGA",
    name: "SEAMASTER",
    price: "₹6,85,000",
    image:
      om,
    link: "https://www.omegawatches.com/",
  },

  {
    id: 3,
    brand: "TISSOT",
    name: "PRX",
    price: "₹44,000",
    image:
      tis,
    link: "https://www.tissotwatches.com/en-in/collection.html",
  },

  {
    id: 4,
    brand: "TAG HEUER",
    name: "CARRERA",
    price: "₹3,25,000",
    image:
      tag,
    link: "https://www.tagheuer.com/",
  },

  {
    id: 5,
    brand: "CITIZEN",
    name: "ECO-DRIVE",
    price: "₹39,900",
    image:
      cit,
    link: "https://www.citizenwatch.com/",
  },

  {
    id: 6,
    brand: "FOSSIL",
    name: "HERITAGE",
    price: "₹18,995",
    image:
      fos,
    link: "https://www.fossil.com/",
  },

  {
    id: 7,
    brand: "SEIKO",
    name: "PROSPEX",
    price: "₹72,000",
    image:
      se,
    link: "https://www.seikowatches.com/",
  },
];



const frontPositions = [
  {
    x: -430,
    y: 42,
    rotate: -13,
    scale: 0.82,
  },

  {
    x: -290,
    y: 15,
    rotate: -9,
    scale: 0.88,
  },

  {
    x: -145,
    y: -5,
    rotate: -5,
    scale: 0.94,
  },

  {
    x: 0,
    y: -18,
    rotate: 0,
    scale: 1.06,
  },

  {
    x: 145,
    y: -5,
    rotate: 5,
    scale: 0.94,
  },

  {
    x: 290,
    y: 15,
    rotate: 9,
    scale: 0.88,
  },

  {
    x: 430,
    y: 42,
    rotate: 13,
    scale: 0.82,
  },
];


function App() {
  const [page, setPage] = useState("collection");

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [cartCount, setCartCount] = useState(0);

  const [autoPlay, setAutoPlay] = useState(true);


  const selectedWatch = watches[selectedIndex];


 

  useEffect(() => {
    if (!autoPlay) return;

    let timer;

    if (page === "collection") {
      timer = setTimeout(() => {
        setSelectedIndex(0);
        setPage("product");
      }, 4000);
    }


    if (page === "product") {
      timer = setTimeout(() => {

        if (selectedIndex < watches.length - 1) {

          setSelectedIndex((previous) => previous + 1);

        } else {

          setSelectedIndex(0);
          setPage("collection");

        }

      }, 3500);
    }


    return () => clearTimeout(timer);

  }, [page, selectedIndex, autoPlay]);


  

  const openProduct = (index) => {

    setAutoPlay(true);

    setSelectedIndex(index);

    setPage("product");

  };




  const backToCollection = () => {

    setAutoPlay(false);

    setPage("collection");

  };


  

  const addToCart = () => {

    setCartCount((previous) => previous + 1);

  };


  

  const openWatch = () => {

    window.open(
      selectedWatch.link,
      "_blank",
      "noopener,noreferrer"
    );

  };


  return (

    <div className="page">


    

      <header className="header">

        <div className="studio-name">
          timecraftstudio
        </div>


        <div className="header-right">

          <button
            className="collection-button"
            onClick={backToCollection}
          >
            COLLECTION
          </button>


          <div className="cart">

            CART

            <span>
              {cartCount}
            </span>

          </div>

        </div>

      </header>


  

      <main className="main">


        <AnimatePresence mode="wait">


          

          {page === "collection" && (

            <motion.section
              key="collection"
              className="collection-page"

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0.96,
              }}

              transition={{
                duration: 0.7,
              }}
            >


             

              <motion.div
                className="collection-title"

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                }}
              >

                <div className="ultimate">
                  The Ultimate
                </div>

                <h1>
                  COLLECTIONS
                </h1>

              </motion.div>


              

              <div className="collection-stage">

                {watches.map((watch, index) => {

                  const position =
                    frontPositions[index];


                  return (

                    <motion.div
                      key={watch.id}

                      className="front-card"

                      initial={{
                        opacity: 0,
                        x: 0,
                        y: 70,
                        rotate: 0,
                        scale: 0.7,
                      }}

                      animate={{
                        opacity: 1,
                        x: position.x,
                        y: position.y,
                        rotate: position.rotate,
                        scale: position.scale,
                      }}

                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 80,
                        damping: 14,
                      }}

                      whileHover={{
                        y: position.y - 18,
                        scale: position.scale + 0.05,
                        rotate: 0,
                        zIndex: 50,
                      }}

                      onClick={() =>
                        openProduct(index)
                      }
                    >


                     

                      <div className="front-glass">



                        <div className="front-image">

                          <img
                            src={watch.image}
                            alt={watch.name}
                          />

                        </div>


                       

                        <div className="front-brand">

                          {watch.brand}

                        </div>


                        

                        <div className="front-name">

                          {watch.name}

                        </div>


                       

                        <div className="front-price">

                          {watch.price}

                        </div>


                        

                        <button
                          className="front-cart"

                          onClick={(event) => {

                            event.stopPropagation();

                            setCartCount(
                              (previous) =>
                                previous + 1
                            );

                          }}
                        >

                          ADD TO CART

                        </button>

                      </div>

                    </motion.div>

                  );

                })}

              </div>



              <motion.div
                className="collection-hint"

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 1.2,
                }}
              >

                Click a card to view collection

              </motion.div>


            </motion.section>

          )}


          

          {page === "product" && (

            <motion.section
              key={`product-${selectedWatch.id}`}
              className="product-page"

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
              }}

              transition={{
                duration: 0.55,
              }}
            >


             

              <div className="stack-area">


                

                <motion.div
                  className="stack-card stack-four"

                  initial={{
                    opacity: 0,
                    x: -90,
                    y: 45,
                    rotate: -8,
                  }}

                  animate={{
                    opacity: 0.32,
                    x: 80,
                    y: 35,
                    rotate: 7,
                  }}

                  transition={{
                    duration: 0.8,
                  }}
                >

                  <img
                    src={
                      watches[
                        (selectedIndex + 3) %
                          watches.length
                      ].image
                    }
                    alt=""
                  />

                </motion.div>


                

                <motion.div
                  className="stack-card stack-three"

                  initial={{
                    opacity: 0,
                    x: -70,
                    y: 35,
                    rotate: -7,
                  }}

                  animate={{
                    opacity: 0.45,
                    x: 55,
                    y: 25,
                    rotate: 5,
                  }}

                  transition={{
                    duration: 0.8,
                    delay: 0.08,
                  }}
                >

                  <img
                    src={
                      watches[
                        (selectedIndex + 2) %
                          watches.length
                      ].image
                    }
                    alt=""
                  />

                </motion.div>


                

                <motion.div
                  className="stack-card stack-two"

                  initial={{
                    opacity: 0,
                    x: -50,
                    y: 25,
                    rotate: -5,
                  }}

                  animate={{
                    opacity: 0.58,
                    x: 35,
                    y: 15,
                    rotate: 3,
                  }}

                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                  }}
                >

                  <img
                    src={
                      watches[
                        (selectedIndex + 1) %
                          watches.length
                      ].image
                    }
                    alt=""
                  />

                </motion.div>


               

                <motion.div
                  className="main-product-card"

                  initial={{
                    opacity: 0,
                    x: -120,
                    scale: 0.75,
                    rotate: -6,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                  }}

                  transition={{
                    duration: 0.9,
                    type: "spring",
                    stiffness: 85,
                    damping: 13,
                  }}
                >

                  <div className="main-watch-image">

                    <img
                      src={selectedWatch.image}
                      alt={selectedWatch.name}
                    />

                  </div>


                  <div className="main-card-label">

                    {selectedWatch.brand}

                  </div>

                </motion.div>


                

                <div className="side-card-edge">

                  <img
                    src={
                      watches[
                        (selectedIndex + 1) %
                          watches.length
                      ].image
                    }
                    alt=""
                  />

                </div>

              </div>


             

              <motion.div
                className="product-content"

                initial={{
                  opacity: 0,
                  x: 80,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
              >

                <div className="product-brand">

                  {selectedWatch.brand}

                </div>


                <h2>

                  {selectedWatch.name}

                </h2>


                <div className="product-price">

                  {selectedWatch.price}

                </div>


                <div className="small-line" />


                <p className="product-caption">

                  Timeless design.
                  <br />
                  Modern character.

                </p>


               

                <motion.button
                  className="add-button"

                  whileHover={{
                    scale: 1.04,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}

                  onClick={addToCart}
                >

                  ADD TO CART

                </motion.button>


               

                <button
                  className="view-button"
                  onClick={openWatch}
                >

                  VIEW WATCH

                </button>


              

                <button
                  className="back-button"
                  onClick={backToCollection}
                >

                  ← COLLECTIONS

                </button>

              </motion.div>


            </motion.section>

          )}

        </AnimatePresence>

      </main>


      

      <div className="bottom-label">

        LUXURY • TIME • COLLECTION

      </div>


    </div>

  );
}

export default App;
