import hidePopup from "./hidePopup";

const createPopup = () => {
    const popupSection = document.getElementById('popup');
    const popCtn = document.createElement('section');
    popCtn.setAttribute('id', 'pop__container');
    popCtn.innerHTML = `    
    <div class="image__section">
      <img class="thumb" src="" alt="MEAL IMAGE"/>
      <h2 class="mealName"></h2>
    </div>
    <section class="information">
      <h4 class="category"></h2>
      <h4 class="area"></h2>
      <p class="instructions"></p>

    </section>
    <section>
      <h2>Comments</h2>
      <div class="comments"></div>

    </section>
    <section >
      <form class="add__comment" action="">
        <input type="text" placeholder="Your name">
        <textarea type="text" maxlength="100" placeholder="Your insights"></textarea>
        <button type="submit">COMMENT</button>
      </form>
    </section>
    <i id='pop__close' class="fa-solid fa-xmark"></i>    
    `
    popupSection.appendChild(popCtn);
    const closeIcon = document.getElementById('pop__close');
    closeIcon.addEventListener('click', () => {
        hidePopup();          
    });

}

export default createPopup;