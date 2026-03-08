// data for projects. THank you very much mr AI for formatting the data
const cardData = [
    {
        title: "Bank Appen",
        subheading: "C#",
        imageSrcSet: `https://ik.imagekit.io/4mzgxtohp/bank-application.png?tr=w-300 300w,
                      https://ik.imagekit.io/4mzgxtohp/bank-application.png?tr=w-500 500w,
                      https://ik.imagekit.io/4mzgxtohp/bank-application.png?tr=w-768 768w`,
        modalTitle: "Bank Appen",
        modalSubheading: "A console application written in C# for a group project.",
        modalBody: `<p><strong>Features:</strong></p>
        <ul>
            <li>A UI library used for creating a good looking user interface inside the application.</li>
            <li>Secure user storing using PBKDF2 hashing.</li>
            <li>Dashboard and features for both a regular client and an admin.</li>
            <li>Multiple different accounts such as Checking, Loan and Savings account.</li>
            <li>Ability to make transactions between accounts.</li>
            <li>Ability to take out loans.</li>
            <li>2-Factor Authentication.</li>
        </ul>`
    },
    {
        title: "MILTON",
        subheading: "Blazor, ASP.NET",
        imageSrcSet: `https://ik.imagekit.io/4mzgxtohp/MILTON.png?tr=w-300 300w,
                      https://ik.imagekit.io/4mzgxtohp/MILTON.png?tr=w-500 500w,
                      https://ik.imagekit.io/4mzgxtohp/MILTON.png?tr=w-768 768w`,
        modalTitle: "MILTON",
        modalSubheading: "AI Compliance Engine",
        modalBody: `<p>MILTON provides an enterprise-grade AI compliance engine that transforms source data into audit-ready evidence for externally and internally regulated industries.</p>`
    },
    {
        title: "Munilytics",
        subheading: "React, ASP.NET, Wolverine, FastEndpoints, Entity Framework",
        imageSrcSet: `https://ik.imagekit.io/4mzgxtohp/munalytics.jpg?tr=w-300 300w,
                      https://ik.imagekit.io/4mzgxtohp/munalytics.jpg?tr=w-500 500w,
                      https://ik.imagekit.io/4mzgxtohp/munalytics.jpg?tr=w-768 768w`,
        modalTitle: "Munilytics",
        modalSubheading: "High-performance analytics engine for Swedish municipalities.",
        modalBody: `<p><strong>The Vision:</strong><br>
        Sweden's 290 municipalities manage billions of SEK in taxpayer money, yet local politicians often lack the tools to see if they are actually being efficient. All the data exists in the Kolada database, but it is buried under 5,000+ complex variables. Our mission is to turn this "Data Swamp" into a "Data Crystal Palace."</p>

        <p><strong>The Technical Factor:</strong></p>
        <ul>
            <li><strong>OLAP Cube Architecture:</strong> Building a multidimensional data structure using PostgreSQL with Partitioning and Columnar storage for sub-second latency.</li>
            <li><strong>Vector Math:</strong> Implementing a Peer Grouper Algorithm to calculate statistical distance between municipalities.</li>
            <li><strong>The Pipeline:</strong> A robust ETL system that talks to the strictly typed Kolada API.</li>
        </ul>`
    },
    {
        title: "Andaluz Casa",
        subheading: "Next.js, Storyblok",
        imageSrcSet: `https://ik.imagekit.io/4mzgxtohp/andaluz.png?tr=w-300 300w,
                      https://ik.imagekit.io/4mzgxtohp/andaluz.png?tr=w-500 500w,
                      https://ik.imagekit.io/4mzgxtohp/andaluz.png?tr=w-768 768w`,
        modalTitle: "Andaluz Casa",
        modalSubheading: "Holiday house rental website",
        modalBody: `<p>A complete holiday house rental website featuring headless CMS support, extensive property information with markdown formatting, integrated contact forms, and a custom blog.</p>`
    }
];

const container = document.getElementById("card-container");
const template = document.getElementById("card-template");

const modal = document.getElementById("project-modal");
const modalTitle = modal.querySelector(".card-title");
const modalSubheading = modal.querySelector(".card-subheading");
const modalBody = modal.querySelector(".card-body");
const closeModalBtn = document.getElementById("close-modal-btn");

// Close modal with button and by clicking outside the modal
closeModalBtn.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Generate cards from data and fill global modal with project details on button click
cardData.forEach(data => {
    const card = template.content.cloneNode(true);

    card.querySelector(".card-title").textContent = data.title;
    card.querySelector(".card-subheading").textContent = data.subheading;
    card.querySelector(".card-image").src = data.imageSrcSet[0];
    card.querySelector(".card-image").srcset = data.imageSrcSet.join(", ");
    card.querySelector(".open-modal-btn").addEventListener("click", () => {
        modalTitle.textContent = data.modalTitle;
        modalSubheading.textContent = data.modalSubheading;
        modalBody.innerHTML = data.modalBody;
        modal.showModal();
    });

    container.appendChild(card);
});