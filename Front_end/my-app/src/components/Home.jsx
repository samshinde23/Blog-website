import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function Home(props) {
  const navigate = useNavigate();
  

  return (
    <>
      <div className="App">
     
        <h1>Home</h1>
        <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Blog Horizon</h1>
        <p class="lead text-muted">Expanding the limits of blogging</p>
       
      </div>
    </div>
  </section>
  <div class="album py-5 bg-light">
    <div class="container">

     
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img src={`home1.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
              <p class="card-text">Painting is more than just colors on a canvas; it is an expression of emotions, thoughts.............</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/HomeView/1")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">6 April 2025</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`home2.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
              <p class="card-text">"Meditation is a practice that calms the mind and enhances focus. It has been used for...........</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/HomeView/2")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">4 July 2025</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`home3.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/HomeView/3")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">27 March 2025</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`home4.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/HomeView/4")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">19 January 2025</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src={`home5.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/HomeView/5")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">23 November 2024</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`home6.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/HomeView/6")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">7 July 2025</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`home7.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/HomeView/7")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">3 April 2024</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`home8.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/HomeView/8")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">12 February 2024</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`hom9.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This ..........</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/HomeView/9")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">7 July 2025</small>
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

export default Home;
