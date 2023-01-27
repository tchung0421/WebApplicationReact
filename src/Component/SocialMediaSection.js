

export const SocialMediaSection = (props) => {
    return (
      <>
        <section id="socialMediaChecker" class="p-5 bg-dark text-light">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">            
            <p class="lead">             
              <h2>Check Your Social Media Profile</h2>
            </p>
            <section>
              <div class="mb-3 row">
                <label for="socialMediaSelect" class="form-label col">Social Media Type</label>
                <select class="form-select col" id="socialMediaSelect" aria-label="Choose Social Media ">
                  <option selected>Open this select menu</option>
                  <option value="1">GitHub</option>
                  <option value="2">Linkedin</option>
                  <option value="3">Facebook</option>
                  <option value="4">Tumbler</option>
                  <option value="5">Instagram</option>
                </select>                
              </div>   
              <div class="mb-3 row">
                <label for="userName" class="form-label col">Social Media Type</label>
                <input type="text" id="userName" class="form-input col"/>
                
              </div>  

              <div class="mb-3 row">
                  <input id="getProfileBtn" type="button" placeholder="Enter profile" value="Get The Profile" class="btn btn-light mt-3"/>              
              </div>           
            </section>           
            
          </div>
          <div class="col-md">
            <img id="profileImage" class ="profile" src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg" class="img-fluid rounded-circle" alt="" />
          </div>
          <div class="col-md">
            <span id="followers" data-followers-url="" class="badge rounded-pill bg-light text-dark"></span>
            <span id="following" class="badge rounded-pill bg-dark"></span>
          </div>
        </div>

        <div class="row align-items-center align-items-center">
          <div class="col-12">
            <h1>User Profile</h1>
          </div>
        </div>


        
        <div id="followersAccounts" class="row align-items-center align-items-center invisible ">
          <div class="accordion accordion-flush bg-light text-dark" id="accordionFlushExample">                    
          </div>
        </div>
      </div>
    </section>
      </>
    );
  };