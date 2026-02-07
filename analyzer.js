module.exports = function analyze(text) {
    let score = 100;
    let reasons = [];

    if (text.includes("fee") || text.includes("payment")) {
        score -= 30;
        reasons.push("Requests registration or training fee");
    }

    if (text.includes("urgent") || text.includes("immediate")) {
        score -= 20;
        reasons.push("Uses urgency pressure tactics");
    }

    if (text.includes("gmail.com") || text.includes("yahoo.com")) {
        score -= 20;
        reasons.push("Uses non-official email domain");
    }

    let verdict = "Genuine";
    if (score < 70) verdict = "Suspicious";
    if (score < 40) verdict = "Fake";

    return { score, verdict, reasons };
};
