import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from './data'

const images = [
  {
    id: "1",
    imageName:
      "https://drive.google.com/uc?export=view&id=1rm4f-6JlcgqiERU_tYTzkrx27gpm2SWO",
    tag: "Food",
  },
  {
    id: "2",
    imageName:
      "https://drive.google.com/uc?export=view&id=1S7UhjVl8CD8ip981jqyGCibELpnxyyUI",
    tag: "Food",
  },
  {
    id: "10",
    imageName:
      "https://drive.google.com/uc?export=view&id=1x5kEcZ33iF4z8Ahn1szGrL-YR5-KtEUR",
    tag: "Food",
  },
  
  {
    id: "11",
    imageName:
      "https://drive.google.com/uc?export=view&id=1eOOXkqP2cNeTdWHgQgnl2KeXdz4_5-GN",
    tag: "Food",
  },
  {
    id: "36",
    imageName:
      "https://drive.google.com/uc?export=view&id=1HTPGwnfeJOD8KTcC5tJQi0h-uw_5uneG",
    tag: "Food",
  },
  {
    id: "7",
    imageName:
      "https://drive.google.com/uc?export=view&id=1kmjJhalY8B1BkYE6bHHt8h3y9hXIYGc8",
    tag: "Food",
  },
  {
    id: "26",
    imageName:
      "https://drive.google.com/uc?export=view&id=1InLAZXwlYLNAkuERmwOrxEm4KXxFqM04",
    tag: "Food",
  },


  {
    id: "13",
    imageName:
      "https://drive.google.com/uc?export=view&id=1Fy_jVNTYyqXa1acLBhajrdS9xxqAz_LE",
    tag: "Food",
  },

  {
    id: "19",
    imageName:
      "https://drive.google.com/uc?export=view&id=1NBRoRLm5CPbuYkloKg2oSi1nFMwiXR9w",
    tag: "Food",
  },
  {
    id: "12",
    imageName:
      "https://drive.google.com/uc?export=view&id=1S0KfLZ57J845xvR7nG1kjpb13qZDr2GG",
    tag: "Outlet",
  },
  {
    id: "21",
    imageName:
      "https://drive.google.com/uc?export=view&id=1-njdJCsZyLpCOTErfFscaMHnu1HEy8aL",
    tag: "Food",
  },
  {
    id: "22",
    imageName:
      "https://drive.google.com/uc?export=view&id=1_A9hxuhaUy5_rMsU3h3GzbYZGU1IOvdu",
    tag: "Food",
  },

  {
    id: "24",
    imageName:
      "https://drive.google.com/uc?export=view&id=1Vt0nfpOZKKFagp8wUfp2OdZMIxiGlrQh",
    tag: "Food",
  },


  {
    id: "30",
    imageName:
      "https://drive.google.com/uc?export=view&id=1hUnUkiIvSdS_NkkylnkMFm_QmeerZmpW",
    tag: "Food",
  },
  {
    id: "39",
    imageName:
      "https://drive.google.com/uc?export=view&id=1CYBgO_KGtaEOuWhqhMo9CnGDyFxwdrNI",
    tag: "Outlet",
  },
  {
    id: "40",
    imageName:
      "https://drive.google.com/uc?export=view&id=1V9Hw41wX-2iBiH-PkJQjBQUWlTPFeZQH",
    tag: "Food",
  },

  {
    id: "3",
    imageName:
      "https://drive.google.com/uc?export=view&id=1Q3RCBHxspQlzBUiyUkQ6pQ10hNjn28YH",
    tag: "Outlet",
  },
  {
    id: "19",
    imageName: "https://www.youtube.com/embed/0VSdf2fECOI",
    tag: "Videos",
  },
  {
    id: "20",
    imageName: "https://www.youtube.com/embed/41RHck26nnY",
    tag: "Videos",
  },
  {
    id: "21",
    imageName: "https://www.youtube.com/embed/u2GjqaBnarw",
    tag: "Videos",
  },
  {
    id: "22",
    imageName: "https://www.youtube.com/embed/1DesRoAmwe0",
    tag: "Videos",
  },
  {
    id: "23",
    imageName: "https://www.youtube.com/embed/Ythx7fKXnd0",
    tag: "Videos",
  },
  {
    id: "24",
    imageName: "https://www.youtube.com/embed/_Q4fgUUS9DA",
    tag: "Videos",
  },
];

function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images.filter((image) => image.tag !== "Videos"))
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <SimpleReactLightbox>
      <div className="gallery">
        <div className="tags">
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Outlet"
            tagActive={tag === "Outlet" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Food"
            tagActive={tag === "Food" ? true : false}
            handleSetTag={setTag}
          />{" "}
          <TagButton
            name="Videos"
            tagActive={tag === "Videos" ? true : false}
            handleSetTag={setTag}
          />
        </div>
        <SRLWrapper>
          <div className="container-2">
            {filteredImages.map((image) => {
              return (
                <div key={image.id} className="image-card">
                  {image.tag === "Videos" ? (
                    <iframe
                      width="420"
                      height="250"
                      src={image.imageName}
                      title="Youtube video player"
                    />
                  ) : (
                    <a href={image.imageName}>
                      <LazyLoadImage
                        effect="blur"
                        className="image"
                        src={`${image.imageName}`}
                        alt=""
                      />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
export default Gallery;
