function contactLoad() {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('id', 'description');

    const contactUsDiv = document.createElement('div');
    contactUsDiv.setAttribute('id', 'contact-us');

    const h3Contact = document.createElement('h3');
    h3Contact.textContent = 'Contact Us'

    const emailPara = document.createElement('p');
    emailPara.textContent = 'Email: maredipomodoro@pomodoro.com';

    const phonePara = document.createElement('p');
    phonePara.textContent = 'Phone number: 554-3123-6423';

    const adressDiv = document.createElement('div');
    adressDiv.setAttribute('id', 'adress');

    const h3Adress = document.createElement('h3');
    h3Adress.textContent = 'Adress';

    const adressPara = document.createElement('p');
    adressPara.textContent = 'Via Toscana, 66/B, 00187 Roma RM, Italia';

    adressDiv.appendChild(h3Adress);
    adressDiv.appendChild(adressPara);

    contactUsDiv.appendChild(h3Contact);
    contactUsDiv.appendChild(emailPara);
    contactUsDiv.appendChild(phonePara);

    descriptionDiv.appendChild(contactUsDiv);
    descriptionDiv.appendChild(adressDiv);

    const contentDiv = document.querySelector('#content');
    contentDiv.appendChild(descriptionDiv);


}

export { contactLoad }