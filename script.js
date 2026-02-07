function scrollToVerify() {
    document.getElementById("verify").scrollIntoView({ behavior: "smooth" });
}

async function verifyOffer() {
    const text = document.getElementById("message").value;

    const res = await fetch("http://localhost:3000/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    document.getElementById("verdict").innerText = data.verdict;
    document.getElementById("score").innerText = `Trust Score: ${data.score}%`;

    const bar = document.getElementById("bar");
    bar.style.width = data.score + "%";
    // use CSS classes for color states
    bar.className = "";
    if (data.verdict === "Genuine") bar.classList.add('genuine');
    if (data.verdict === "Suspicious") bar.classList.add('suspicious');
    if (data.verdict === "Fake") bar.classList.add('fake');

    const list = document.getElementById("reasons");
    list.innerHTML = "";
    data.reasons.forEach(r => {
        const li = document.createElement("li");
        li.innerText = "• " + r;
        list.appendChild(li);
    });

    document.getElementById("result").scrollIntoView({ behavior: "smooth" });
}
