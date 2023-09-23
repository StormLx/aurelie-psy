import  img  from "./img.jpg";

export const presentationHtml = `
<section id="presentation" class="presentation p-5">
    <div class="left-section">
    <div class="section-title">
        <h2 data-aos="fade-down" data-aos-duration="1000"><i class="bi bi-person-circle"></i> Présentation</h2>
        <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">En quelques mots</p>
    </div>

    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
        <strong>Psychologue clinicienne, Praticienne EFT & Conseillère en produits de soins naturels</strong><br><br>
        Issue de l’Université Toulouse II, j'ai initialement orienté ma pratique clinique vers la psychologie clinique du vieillissement et la neuropsychologie. Ma curiosité professionnelle m’a amenée à explorer les troubles psychologiques associés au vieillissement, qu'il soit optimal ou pathologique.
    </p>

    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="700">
        <i class="bi bi-journal-medical"></i> Mes expériences variées et mes formations complémentaires m'ont ensuite guidée vers le domaine de l'oncologie et des soins palliatifs. Cette immersion m’a confrontée à des questionnements profonds, enrichissant ma pratique et m'incitant à envisager d'autres approches pour mes séances.
    </p>

    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900">
        <i class="bi bi-heart-half"></i> Mon approche clinique se base sur une rencontre présente, centrée sur l’ici et maintenant. Je suis là pour vous guider dans votre parcours de vie, en valorisant les ressources intérieures que vous possédez déjà. Mon objectif est de renforcer votre autonomie psychique et de vous aider à redevenir maître de votre vie.
    </p>

    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1100">
        <i class="bi bi-patch-check-fill"></i> Outre un soutien psychologique traditionnel, j’offre, lorsque la situation s’y prête, des sessions de thérapies brèves de libération émotionnelle (EFT).
    </p>

    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1300">
        <i class="boxicons bx bxs-leaf"></i> Animée par une passion pour la nature et ses bienfaits, je me suis également formée en tant que conseillère en produits de soins naturels. Cette compétence complémentaire me permet de vous suggérer des solutions naturelles pour des problématiques courantes telles que l'anxiété, le stress ou les troubles du sommeil...
    </p>

    <h2 class="my-4" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500"><i class="bi bi-card-list"></i> Diplômes</h2>
    <ul data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1700">
        <li><i class="bi bi-award"></i> 2023: Certification EFT  (Emotional Freedom Technique)</li>
        <li><i class="bi bi-award"></i> 2022: Certification de Conseiller en Produits de Soins Naturels</li>
        <li><i class="bi bi-award"></i> 2016: DU de Soins Palliatifs</li>
        <li><i class="bi bi-award"></i> 2013: Master de Psychologie clinique et Gérontologie</li>
        <li><i class="bi bi-award"></i> 2012: DU de Neuropsychologie</li>
    </ul>
    </div>
    <div class="right-section">
        <img src="${img}" alt="Photo d'Aurélie"  />
    </div>
</div>

</section>

`;
