// Sample posts
const posts = [
  
   {
    title: "MORE THAN A REPLACEMENT: ADVANCING THE FUTURE WITH PROVEN FEMALE LEADERSHIP",
    image: "https://github.com/braimohigboibroheem/KlickRoundGist/blob/main/spice.jpeg",
    description: "The exit of <b>Rt. Hon. Adewunmi Oriyomi Onanuga (Ijaya)</b> from the Federal House of Representatives has   created more than a political vacancy it has opened a national conversation around equity, inclusion, and the forward movement of democratic ideals in Nigeria. At this crucial time, the question before us is not just who is next, but what should the next representation look like? The answer is constitutional and moral: another competent, visionary woman should step into the seat.  <br> <b>1. CONSTITUTIONAL & POLICY-DRIVEN JUSTIFICATION:</b> A MATTER OF LAW AND PRINCIPLE.</b> The 1999 Constitution of the Federal Republic of Nigeria (as amended) specifically in Section 14(3) calls for the fair representation of all groups in the governance structure of the nation. While federal character has historically been interpreted through ethnic or geographical lenses, gender inclusion is undeniably an essential pillar of balanced representation. Moreover, the National Gender Policy (2006), a guiding policy of the Federal Government, advocates a minimum of 35% women's representation in all elective and appointive positions. This policy was not crafted to promote tokenism but to ensure that governance reflects the true demographic composition of our society. Replacing Hon. Ijaya with another woman is not only consistent with this policy, but it also reflects a commitment to institutionalising equity, continuity, and democratic maturity.  <br><b> 2. POLITICAL PRECEDENT AND SYMBOLIC CONTINUITY:</b> Hon. Ijaya’s emergence was a milestone, not just for Remo or Ogun State, but for Nigeria at large. Her presence in the Green Chamber signified a break from the historical dominance of one gender in legislative politics and served as an encouragement for aspiring women in leadership. To now reverse that by replacing her with a man when competent, prepared women are available would represent a political backslide and signal inconsistency in our commitment to gender parity. Replacing a woman with a woman is not an emotional argument it is a strategic, institutional, and politically responsible decision.  <br> <b>3. COMPETENCE, NOT CHARITY: WOMEN HAVE EARNED IT.</b>Let us be clear: this is not a charity case. This is not about gender sentiment or playing the victim card. Our constituency, like many others in Nigeria, is home to women of impeccable character, political experience, grassroots influence, and policy knowledge. These women have served in party structures, led at the community level, and proven themselves in governance and development circles. <br> <b>4. THE POLITICAL PARTY IMPERATIVE: INCLUSIVITY WINS ELECTIONS.</b> For political parties vying for electoral advantage, this is an opportunity to demonstrate modernity, inclusiveness, and strategic foresight. The electorate, especially the youth and women, who constitute over 60% of the voter population, are increasingly inclined to support parties and candidates who represent progress and justice. By fielding a capable woman as a replacement, any party positions itself as a beacon of fairness and inclusive politics. It’s a smart political move, not just a moral one.  <br> <b>5. REPRESENTATION MUST REFLECT REALITY.</b> Governance must mirror the society it serves. Women are not minorities; they are equal stakeholders in nation-building. Their lived experiences, perspectives, and problem-solving approaches are vital to shaping laws and policies that reflect the true needs of citizens. A woman in the Green Chamber is not just a gender figure—it is a voice for families, for children, for education, health, justice, and equity. It is a national asset that must be preserved and replicated.  <br> <b>6. A CALL TO POLITICAL STAKEHOLDERS AND DECISION MAKERS.</b> We call on party leaders, delegates, traditional rulers, religious leaders, youth and women organisations, and all well-meaning stakeholders to see beyond narrow interests and align with a vision of a fairer, more balanced Nigeria. This is the time to do what is right not just for optics, but for the future.CONCLUSION: NOT JUST A SEAT, BUT A STATEMENT. In choosing a woman to replace the Late Rt. Hon. Adewunmi Oriyomi Onanuga, we are not merely filling a seat we are making a powerful statement that our democracy is evolving, that our people understand balance, and that merit and equity can walk side by side. And in this light, Mrs. Yetunde Olasimbo Akinluyi (Omo Awokoya) stands as the most qualified, compelling, and credible candidate to continue this legacy. Her leadership journey, community engagement, and political experience speak volumes about her capacity to serve not just as a female figurehead, but as a result-oriented representative who understands policy, people, and purpose. She represents not only continuity, but elevation; not just inclusion, but performance. Her emergence would affirm our commitment to gender equity, reward competence, and secure a stronger, more united voice for the people in the Green Chamber. Let the House remain balanced. Let justice, representation, and development prevail.<br> <b> <em>Let Dr. Mr. Yetunde Olasimbo Akinluyi ( Omo Awokoya) rise because she is not just a woman; she is the best choice.</em></b>",
  },
 
];






// Inject posts into page
function loadPosts() {
  const featured = document.getElementById("featured-posts");
  const all = document.getElementById("all-posts");

  posts.forEach((post, index) => {
    const card = `
      <div class="post-card">
        <img src="./spice.jpeg" alt="${post.title}" style="width:100%; max-width:1000px; height:auto; border-radius:10px;">
        <div class="content">
          <h4>${post.title}</h4>
          <p>${post.description}    </p>
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
