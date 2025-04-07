"use strict";
// Fetch articles and display the top 5 with the most engagement
async function fetchTopArticles() {
    try {
        const response = await fetch("https://dev.to/api/articles?tag=wecoded");
        if (!response.ok)
            throw new Error("Failed to fetch articles");
        const data = await response.json();
        // Filter, sort, and limit to top 5 articles
        const topArticles = data
            .filter((article) => article.positive_reactions_count > 0 || article.comments_count > 0)
            .sort((a, b) => b.positive_reactions_count +
            b.comments_count -
            (a.positive_reactions_count + a.comments_count))
            .slice(0, 3);
        // Insert articles into the DOM
        const container = document.getElementById("community-stories");
        if (container) {
            container.innerHTML = topArticles
                .map((article) => `
              <div class="story-card">
                  <a href="${article.url}"><h3 class="heading">${article.title}</h3></a>
                  <p class="body-base">By ${article.user.name}</p>
              </div>
          `)
                .join("");
        }
    }
    catch (error) {
        console.error("Error fetching stories:", error);
    }
}
// Run the function after the page loads
document.addEventListener("DOMContentLoaded", fetchTopArticles);
