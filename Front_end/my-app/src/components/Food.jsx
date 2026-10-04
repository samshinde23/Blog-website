import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function Food() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App food-page">
        
        <h1>Food</h1>
        <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light"><b>Food</b></h1>
        <p class="lead text-muted">Food page</p>
       
      </div>
    </div>
  </section>
  <div class="album py-5 bg-light">
    <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img src={`food1.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Savory Stories</b></h3>
              <p class="card-text"> A journey through delicious recipes and culinary adventures.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/FoodView/10")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">8 August 2024</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`food2.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Bite & Delight</b></h3>
              <p class="card-text">Exploring flavors one bite at a time.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/FoodView/11")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">3 April 2024</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`food3.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>The Tasty Trail</b></h3>
              <p class="card-text">Discovering food, recipes, and hidden gems.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/FoodView/12")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">18 May 2024</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`food4.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Whisk & Wander</b></h3>
              <p class="card-text">A mix of home cooking and foodie travel.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/FoodView/13")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">26 October 2023</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`food5.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Fork & Flavor</b></h3>
              <p class="card-text"> Where taste meets creativity.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/FoodView/14")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">17 July 2023</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`food6.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Plated Perfection</b></h3>
              <p class="card-text">Elevating everyday meals into gourmet experiences.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/FoodView/15")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">18 August 2023</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`food7.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>The Hungry Palette</b></h3>
              <p class="card-text">A fusion of colors, flavors, and cuisines.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/FoodView/16")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">20 February 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`food8.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Feast Chronicles</b></h3>
              <p class="card-text">Telling stories through food and culture.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/FoodView/17")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">9 September 2021</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`food9.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Simply Satisfying</b></h3>
              <p class="card-text"> Easy, delicious, and wholesome recipes.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/FoodView/18")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">23 January 2020</small>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </div>
      </div>
      <Footer />
    </>
  );
}

export default Food;
