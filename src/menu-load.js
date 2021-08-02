function menuLoad() {
    const plate1 = document.createElement('div');
    plate1.setAttribute('class', 'plate');

    const plate1Text = document.createElement('div');
    plate1Text.classList.add('plateText');

    const h3Plate1 = document.createElement('h3');
    h3Plate1.textContent = 'Pizza margarita';

    const paraPlate1 = document.createElement('p');
    paraPlate1.textContent = '10€';

    const plate1ImgDiv = document.createElement('div');
    plate1ImgDiv.classList.add('plateImg');

    const imgPlate1 = document.createElement('img');
    imgPlate1.setAttribute('src', '../assets/pizza-2.jpg');

    plate1ImgDiv.appendChild(imgPlate1);

    plate1Text.appendChild(h3Plate1);
    plate1Text.appendChild(paraPlate1);

    plate1.appendChild(plate1Text);
    plate1.appendChild(plate1ImgDiv);

    // ------

    const plate2 = document.createElement('div');
    plate2.setAttribute('class', 'plate');

    const plate2Text = document.createElement('div');
    plate2Text.classList.add('plateText');

    const h3Plate2 = document.createElement('h3');
    h3Plate2.textContent = 'Pasta Fibonacci';

    const paraPlate2 = document.createElement('p');
    paraPlate2.textContent = '7€';

    const plate2ImgDiv = document.createElement('div');
    plate2ImgDiv.classList.add('plateImg');

    const imgPlate2 = document.createElement('img');
    imgPlate2.setAttribute('src', '../assets/pasta-3.jpg');

    plate2ImgDiv.appendChild(imgPlate2);

    plate2Text.appendChild(h3Plate2);
    plate2Text.appendChild(paraPlate2);

    plate2.appendChild(plate2Text);
    plate2.appendChild(plate2ImgDiv);

    // --------

    const plate3 = document.createElement('div');
    plate3.setAttribute('class', 'plate');

    const plate3Text = document.createElement('div');
    plate3Text.classList.add('plateText');

    const h3Plate3 = document.createElement('h3');
    h3Plate3.textContent = 'Ensalata di pasta';

    const paraPlate3 = document.createElement('p');
    paraPlate3.textContent = '8€';

    const plate3ImgDiv = document.createElement('div');
    plate3ImgDiv.classList.add('plateImg');

    const imgPlate3 = document.createElement('img');
    imgPlate3.setAttribute('src', '../assets/pasta-1.jpg');

    plate3ImgDiv.appendChild(imgPlate3);

    plate3Text.appendChild(h3Plate3);
    plate3Text.appendChild(paraPlate3);

    plate3.appendChild(plate3Text);
    plate3.appendChild(plate3ImgDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('id', 'description');

    descriptionDiv.appendChild(plate1);
    descriptionDiv.appendChild(plate2);
    descriptionDiv.appendChild(plate3);

    const content = document.querySelector('#content');
    content.appendChild(descriptionDiv);


}


export { menuLoad }
