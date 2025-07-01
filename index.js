// Sample posts
const posts = [
  
   {
    title: "Streaming Wars: Who’s Winning in 2025?",
    image: "https://source.unsplash.com/600x400/?media,streaming",
    description: "Netflix, Disney+, and newcomers battle for dominance in the fast-growing streaming industry.",
  },
  {
    title: "Breaking: Youth Voter Turnout Surges in Local Elections",
    image: "https://source.unsplash.com/600x400/?politics,election",
    description: "Young voters are reshaping political outcomes — and parties are taking notice.",
  },
  {
    title: "Top 10 Fashion Trends for the Summer",
    image: "https://source.unsplash.com/600x400/?fashion,style",
    description: "From bold colors to minimalist aesthetics, see what’s hot this season.",
  },
  {
    title: "Self-Care is the New Status Symbol",
    image: "https://source.unsplash.com/600x400/?lifestyle,selfcare",
    description: "How the wellness wave is influencing work, relationships, and productivity.",
  },
  {
    title: "Is Print Media Dead or Just Evolving?",
    image: "https://source.unsplash.com/600x400/?newspaper,media",
    description: "Magazines and newspapers are adapting to the digital world — but is it enough?",
  },
  {
    title: "Power Shift: Women Leading Political Movements",
    image: "https://source.unsplash.com/600x400/?women,politics",
    description: "More women are taking center stage in global leadership and reform.",
  },
  {
    title: "Sustainable Fashion: Brands Making a Difference",
    image: "https://source.unsplash.com/600x400/?sustainable,fashion",
    description: "Consumers are choosing eco-conscious brands — and fashion houses are responding.",
  },
  {
    title: "Digital Detox: Why Everyone’s Logging Off",
    image: "https://source.unsplash.com/600x400/?lifestyle,digitaldetox",
    description: "A growing trend toward minimal screen time is reshaping how people live and work.",
  },
];






// Inject posts into page
function loadPosts() {
  const featured = document.getElementById("featured-posts");
  const all = document.getElementById("all-posts");

  posts.forEach((post, index) => {
    const card = `
      <div class="post-card">
        <img src="${post.image}" alt="${post.title}">
        <div class="content">
          <h4>${post.title}</h4>
          <p>${post.description}</p>
        </div>
      </div>
    `;
    if (index < 2) {
      featured.innerHTML += card;
    }
    all.innerHTML += card;
  });
}

document.addEventListener("DOMContentLoaded", loadPosts);
