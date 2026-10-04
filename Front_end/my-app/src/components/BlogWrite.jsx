import React from "react";
import { useParams } from "react-router-dom";
function BlogWrite() {
  const blogs = {
    Food: {
      title: "The Joy of Cooking",
      content:
        "Cooking is not just about preparing meals; it's an art and a passion. The aroma of spices, the sizzling sound of a pan, and the delightful taste of home-cooked food bring joy to every foodie. Whether you're experimenting with a new recipe or enjoying a classic dish, food connects us all!"
    },
    Travel: {
      title: "Wanderlust Chronicles",
      content:
        "Traveling opens the door to new cultures, experiences, and unforgettable memories. Whether you're exploring the mountains, diving into the ocean, or wandering through vibrant streets, every journey enriches your soul. Don't just exist, travel and explore the world!"
    },
    Relationship: {
      title: "The Essence of Relationships",
      content:
        "Relationships are built on love, trust, and understanding. Whether it's family, friends, or a special someone, nurturing connections makes life meaningful. Communication, patience, and shared moments strengthen bonds, making relationships the true treasures of life."
    },
    Home: {
      title: "The Comfort of Home",
      content:
        "Home is where the heart is! A place of comfort, warmth, and endless memories. From cozy corners to the laughter of loved ones, home is more than just a space – it's an emotion. Cherish the little moments that make a house a home!"
    }
  };
  
  const { category } = useParams();
  const blog = blogs[category] || { title: "Blog Not Found", content: "No content available." };

  return (
    <>
      <div className="App">
        
        <h1>Blog Write</h1>
        <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Blog Write</h1>
        <p class="lead text-muted">Write page</p>
        </div>
    </div>
  </section>
  <h1>{blog.title}</h1>
  <p>{blog.content}</p>



      </div>
    </>
  );
}

export default BlogWrite;
