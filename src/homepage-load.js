function homePageLoad() {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('id', 'description');

    const h1 = document.createElement('h1');
    h1.textContent = 'Mare di Pomodoro';

    const section = document.createElement('section');

    const h3History = document.createElement('h3');
    h3History.textContent = 'Our history';

    const article1 = document.createElement('article');
    article1.setAttribute('id', 'history');

    const p = document.createElement('p');
    p.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate natus consequuntur aperiam, in quasi illo nisi odio laboriosam hic veritatis esse facere animi doloribus qui eum totam blanditiis laudantium.Doloribus dolorum ad nam adipisci esse dolores sed ullam, inventore, libero iure quos, pariatur neque! Fuga corrupti odio deleniti quae quisquam laborum ? Ipsam, nam. Corrupti voluptatem non quisquam placeat.'

    const img1 = document.createElement('img');
    img1.setAttribute('class', 'section-imgs');
    img1.setAttribute('src', '../assets/italian-rest-1.jpg');

    const article2 = document.createElement('article');
    article2.setAttribute('id', 'hours');

    const h3Hours = document.createElement('h3');
    h3Hours.textContent = 'Hours';

    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.textContent = 'Monday: 9:00 - 00:00';
    const li2 = document.createElement('li');
    li2.textContent = 'Tuesday: closed';
    const li3 = document.createElement('li');
    li3.textContent = 'Wednesday: 9:00 - 00:00';
    const li4 = document.createElement('li');
    li4.textContent = 'Thursday: 9:00 - 00:00';
    const li5 = document.createElement('li');
    li5.textContent = 'Friday: 9:00 - 00:00';
    const li6 = document.createElement('li');
    li6.textContent = 'Saturday: 9:00 - 00:00';
    const li7 = document.createElement('li');
    li7.textContent = 'Sunday: 9:00 - 00:00';

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);

    article2.appendChild(h3Hours);
    article2.appendChild(ul);

    article1.appendChild(p);
    article1.appendChild(img1);

    section.appendChild(h3History);
    section.appendChild(article1);
    section.appendChild(article2);

    descriptionDiv.appendChild(h1);
    descriptionDiv.appendChild(section);

    const contentDiv = document.querySelector('#content');
    contentDiv.appendChild(descriptionDiv);
}

export { homePageLoad }